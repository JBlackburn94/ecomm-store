import { DashboardCard } from "@/components/DashboardCard";
import { getSalesData, getUserData, getProductData } from "../utils/utils";
import { formatCurrency, formatNumber } from "@/lib/formatters";

export default async function AdminDashboard() {
  const [salesData, userData, productData] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProductData(),
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
        body={`${formatCurrency(salesData.amount)} Total`}
      />
      <DashboardCard
        title="Customers"
        subtitle={`${formatCurrency(userData.averageUserValue)} Average Value`}
        body={`${formatNumber(userData.userCount)} Total Customers`}
      />
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(
          productData.inactiveProduct
        )} Inactive Products`}
        body={`${formatNumber(productData.activeProduct)} Total Products`}
      />
    </div>
  );
}
