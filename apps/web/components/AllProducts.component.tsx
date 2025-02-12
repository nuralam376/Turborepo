import { Product } from "@repo/types";
import Link from "next/link";

export default async function AllProducts() {
    let products: Product[] = [];
    
    try {
        const response = await fetch(`${process.env.API_URL}/products`, {
            next: { tags: ["products"] }
        });
        if (response.ok) {
            products = await response.json();
        } else {
            console.error('Failed to fetch products:', response.status);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }

 

    return (
        <div>
            <h1>Products</h1>
            <Link href="/">Home</Link>
            <div>
                {products.map((product: Product) => (
                    <Link key = {product.id} href={`/products/${product.id}`}>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}