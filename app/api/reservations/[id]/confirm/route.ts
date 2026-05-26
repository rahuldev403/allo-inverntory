import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  const reservation = await prisma.reservation.findUnique({
    where: { id: params.id },
  });

  if (!reservation || reservation.status !== "PENDING") {
    return NextResponse.json({ error: "Invalid reservation" }, { status: 400 });
  }

  // Return 410 if the reservation has expired.
  if (new Date() > reservation.expiresAt) {
    // Lazy cleanup: Release expired stock on the fly
    await prisma.$executeRaw`
      UPDATE "Stock" SET "reservedUnits" = "reservedUnits" - ${reservation.quantity} WHERE id = ${reservation.stockId}
    `;
    await prisma.reservation.update({
      where: { id: params.id },
      data: { status: "RELEASED" },
    });
    return NextResponse.json({ error: "Expired" }, { status: 410 });
  }

  // Confirm reservation and permanently decrement stock.
  await prisma.$transaction([
    prisma.reservation.update({
      where: { id: params.id },
      data: { status: "CONFIRMED" },
    }),
    prisma.$executeRaw`
      UPDATE "Stock" 
      SET "totalUnits" = "totalUnits" - ${reservation.quantity},
          "reservedUnits" = "reservedUnits" - ${reservation.quantity}
      WHERE id = ${reservation.stockId}
    `,
  ]);

  return NextResponse.json({ success: true });
}
