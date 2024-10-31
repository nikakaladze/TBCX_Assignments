// Server-side function to generate static params for product pages
export async function generateStaticParams() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    // Map through products and return the slugs
    return data.products.map((product) => ({
        slug: product.id.toString(),
    }));
}

// Server component for rendering product details
export default async function ProductDetails({ params }) {
    const { slug } = params;

    // Fetch the product details by slug
    const response = await fetch(`https://dummyjson.com/products/${slug}`);
    const products = await response.json();
    const { width, height, depth } = products.dimensions;
    const { createdAt, updatedAt, barcode, qrCode } = products.meta;

    return (
        <div className="max-w-[1200px] h-auto mx-auto my-5 p-5 bg-white rounded-lg shadow-lg">
            {/* Product images */}
            <img src={products.images[0]} alt={products.title} className="w-[200px] h-auto rounded-lg mb-5" />
            <h1 className="text-[2.5rem] text-gray-800 my-2.5">{products.title}</h1>
            <p className="text-base leading-6 text-gray-600 my-1.5">{products.description}</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">Category: {products.category}</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">
                <span>Price: {products.price} $</span>
            </p>
            <p className="text-base leading-6 text-gray-600 my-1.5">
                <span>New Price: {products.discountPercentage} $</span>
            </p>
            <p className="text-base leading-6 text-gray-600 my-1.5">Rating: {products.rating}</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">Stock: {products.stock}</p>

            {/* Product tags */}
            <ul className="list-none p-0 my-2.5">
                {products.tags.map((tag, index) => (
                    <li key={index} className="list-none p-0 my-2.5">
                        #{tag}
                    </li>
                ))}
            </ul>

            {/* Product details */}
            <p className="text-base leading-6 text-gray-600 my-1.5">Brand: {products.brand}</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">SKU: {products.sku}</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">Weight: {products.weight}</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">Width: {width} cm</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">Height: {height} cm</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">Depth: {depth} cm</p>

            {/* Product reviews */}
            <div className="productReviews">
                <h3 className="productReviewsTitle">Reviews:</h3>
                <ul className="productReviewsList">
                    {products.reviews.map((review, index) => (
                        <li key={index} className="productReview">
                            <p>
                                <strong>Rating:</strong> {review.rating}/5
                            </p>
                            <p>
                                <strong>Comment:</strong> {review.comment}
                            </p>
                            <p>
                                <strong>Date:</strong> {new Date(review.date).toLocaleDateString('en-GB')}
                            </p>
                            <p>
                                <strong>Reviewer Name:</strong> {review.reviewerName}
                            </p>
                            <p>
                                <strong>Reviewer Email:</strong> {review.reviewerEmail}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Additional product information */}
            <p className="text-base leading-6 text-gray-600 my-1.5">Warranty Information: {products.warrantyInformation}</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">Shipping Information: {products.shippingInformation}</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">Availability Status: {products.availabilityStatus}</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">Return Policy: {products.returnPolicy}</p>
            <p className="text-base leading-6 text-gray-600 my-1.5">
                Minimum Order Quantity: {products.minimumOrderQuantity}
            </p>
            <p>
                <strong>Created At:</strong> {new Date(createdAt).toLocaleDateString('en-GB')}
            </p>
            <p>
                <strong>Updated At:</strong> {new Date(updatedAt).toLocaleDateString('en-GB')}
            </p>

            {/* Barcode and QR code */}
            <p className="text-base leading-6 text-gray-600 my-1.5">Barcode: {barcode}</p>
            <div className="flex">

            <img src={qrCode} alt="Product QR Code" className="w-auto h-auto mt-5" />
            <img src={products.thumbnail} alt={`${products.title} Thumbnail`} className="productThumbnail" />
            </div>
        </div>
    );
}
