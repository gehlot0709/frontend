export default function Card({ item: { productId, productName, price, inStock, image, description, categories, rating } }) {
  const getRatingStyle = () => {
    if (rating >= 8.5) return "rating-high";
    if (rating >= 6.5) return "rating-medium";
    return "rating-low";
  };

  return (
    <div className="col-3">
      <div className="card-item">
        <div className="card-img">
          <img src={image} alt={productName} />
        </div>
        <h2>{productId}</h2>
        <p className="product-name">{productName}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        {rating && (
          <p className={`product-rating ${getRatingStyle()}`}>{rating}/10</p>
        )}
        {description && <p className="product-description">{description}</p>}
        {categories && categories.length > 0 && (
          <div className="product-categories">
            {categories.map((category, index) => (
              <span key={index} className="category-tag">{category}</span>
            ))}
          </div>
        )}
        <p className={`stock-status ${inStock ? "in-stock" : "out-of-stock"}`}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}