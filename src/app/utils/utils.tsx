import db from "@/db/db";

export async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numberOfSales: data._count,
  };
}

export async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);

  return {
    averageUserValue:
      userCount === 0
        ? 0
        : (orderData._sum.pricePaidInCents || 0) / userCount / 100,
    userCount,
  };
}

export async function getProductData() {
  const [activeProduct, inactiveProduct] = await Promise.all([
    db.product.count({
      where: { isAvailableToPurchase: true },
    }),
    db.product.count({
      where: { isAvailableToPurchase: false },
    }),
  ]);

  return {
    activeProduct,
    inactiveProduct,
  };
}
