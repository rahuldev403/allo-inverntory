import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Assuming you set up a global prisma client

export async function POST(req: Request) {
  const { stockId, quantity } = await req.json();
  const idempotencyKey = req.headers.get("Idempotency-Key");

  // Bonus: Idempotency Check
  if (idempotencyKey) {
    const existing = await prisma.reservation.findUnique({
      where: { idempotencyKey },
    });
    if (existing) return NextResponse.json(existing, { status: 200 });
  }

  // Atomic Update: Only decrements if enough available stock exists
  const updatedCount = await prisma.$executeRaw`
    UPDATE "Stock"
    SET "reservedUnits" = "reservedUnits" + ${quantity}
    WHERE id = ${stockId} AND ("totalUnits" - "reservedUnits") >= ${quantity}
  `;

  // Return 409 if there isn't enough stock available.
  if (updatedCount === 0) {
    return NextResponse.json(
      { error: "Conflict: Not enough stock" },
      { status: 409 },
    );
  }

  // Stock secured. Create the reservation holding units for 10 minutes.
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  const reservation = await prisma.reservation.create({
    data: { stockId, quantity, expiresAt, idempotencyKey },
  });

  return NextResponse.json(reservation, { status: 201 });
}
