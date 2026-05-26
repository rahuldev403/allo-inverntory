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
    return NextResponse.json({ error: "Invalid state" }, { status: 400 });
  }

  // Release hold so units become available again.
  await prisma.$transaction([
    prisma.reservation.update({
      where: { id: params.id },
      data: { status: "RELEASED" },
    }),
    prisma.$executeRaw`
      UPDATE "Stock" SET "reservedUnits" = "reservedUnits" - ${reservation.quantity} WHERE id = ${reservation.stockId}
    `,
  ]);

  return NextResponse.json({ success: true });
}
