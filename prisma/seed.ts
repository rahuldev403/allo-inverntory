import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 1. Create a Warehouse
  const warehouse = await prisma.warehouse.create({
    data: {
      name: "Primary Fulfillment Center",
      location: "New York, NY",
    },
  });

  // 2. Create a Product
  const product = await prisma.product.create({
    data: {
      name: "Ergonomic Keyboard",
      description: "Mechanical keyboard with tactile switches.",
    },
  });

  // 3. Add Stock (10 units total)
  await prisma.stock.create({
    data: {
      productId: product.id,
      warehouseId: warehouse.id,
      totalUnits: 10,
      reservedUnits: 0,
    },
  });

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
