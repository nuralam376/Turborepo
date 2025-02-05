import { Product } from "@repo/types";



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
            <div>
                {products.map((product: Product) => (
                    <div key = {product.id}>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}