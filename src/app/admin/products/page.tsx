import { Button } from "@/components/ui/button";
import { AdminPageHeader as PageHeader } from "../_components/PageHeader";
import Link from "next/link";
import { ProductTable } from "../_components/ProductsTable";

export default function AdminPrductsPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductTable />
    </>
  );
}
