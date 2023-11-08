// styles
import "./ProductList.css";

// imports
import { Link } from "react-router-dom";

export default function ProductList({ number, product }) {
  // console.log(number, product);
  //   console.log(product.categoryImage);
  return (
    <section className={product.new ? "new" : ""}>
      <div className="container">
        <div className="even-columns">
          <div className="product-category-image">
            <picture>
              <source
                media="(max-width: 700px)"
                srcSet={`${product.categoryImage[0].mobile}`}
              />
              <source
                media="(max-width: 1000px)"
                srcSet={`${product.categoryImage[0].tablet}`}
              />
              <img
                src={`${product.categoryImage[0].desktop}`}
                alt="product image"
              />
            </picture>
          </div>
          <div className="product-category-details">
            {product.new && <small>NEW PRODUCT</small>}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={product.id}>See product</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
