import CreateProduct from "./products/create/page";
import Products from "./products/page";

export const dynamic = "force-dynamic";


export default function Home() {
  return (
    <>
    <CreateProduct />
    <Products />
   </>
  );
}
