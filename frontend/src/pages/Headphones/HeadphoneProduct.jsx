// imports
import { useParams, Link, ScrollRestoration } from "react-router-dom";

// RTKQ
import { useGetProductsQuery } from "../../features/productsSlice";

// styles
import "./HeadphoneProduct.css";

// components
import Category from "../../components/Category";
import ShortAbout from "../../components/ShortAbout";

export default function HeadphoneProduct() {
  const { id } = useParams();
  const { product } = useGetProductsQuery("headphones", {
    selectFromResult: ({ data }) => ({
      product: data?.entities[id],
    }),
  });

  // if (product) {
  //   console.log(product);
  // }

  return (
    <>
      <ScrollRestoration />
      {product && (
        <>
          <section
            className={
              product.new
                ? "new headphone-product-section"
                : "not-new headphone-product-section"
            }
          >
            <div className="container">
              <div className="even-columns">
                <Link className="go-back-link" to="/headphones">
                  Go Back
                </Link>
                <div className="product-image">
                  <picture>
                    <source
                      media="(max-width: 700px)"
                      srcSet={`${product.productImage[0].mobile}`}
                    />
                    <source
                      media="(max-width: 1000px)"
                      srcSet={`${product.productImage[0].tablet}`}
                    />
                    <img
                      src={`${product.productImage[0].desktop}`}
                      alt="product image"
                    />
                  </picture>
                </div>
                <div className="product-details">
                  {product.new && <small className="new">NEW PRODUCT</small>}
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <strong>$ {product.price}</strong>
                  <div className="add-to-cart-container">
                    <div className="quantity-counter">
                      <button>-</button>
                      <small>1</small>
                      <button>+</button>
                    </div>
                    <button className="add-to-cart-button">add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="features-section">
            <div className="container">
              <div className="features">
                <h3>features</h3>
                {product.features.split("\n").map((feature, index) => (
                  <p key={index}>{feature}</p>
                ))}
              </div>
              <div className="box-contents">
                <h3>in the box</h3>
                <ul className="flow">
                  {product.includes.map((item) => (
                    <li key={item.id}>
                      <span>{item.quantity}x</span>
                      <small>{item.item}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="gallery-section">
            <div className="container">
              <div className="gallery-image-one">
                <picture>
                  <source
                    media="(max-width: 700px)"
                    srcSet={`${product.gallery[0].mobile}`}
                  />
                  <source
                    media="(max-width: 1000px)"
                    srcSet={`${product.gallery[0].tablet}`}
                  />
                  <img
                    src={`${product.gallery[0].desktop}`}
                    alt="gallery image"
                  />
                </picture>
              </div>
              <div className="gallery-image-two">
                <picture>
                  <source
                    media="(max-width: 700px)"
                    srcSet={`${product.gallery[1].mobile}`}
                  />
                  <source
                    media="(max-width: 1000px)"
                    srcSet={`${product.gallery[1].tablet}`}
                  />
                  <img
                    src={`${product.gallery[1].desktop}`}
                    alt="gallery image"
                  />
                </picture>
              </div>
              <div className="gallery-image-three">
                <picture>
                  <source
                    media="(max-width: 700px)"
                    srcSet={`${product.gallery[2].mobile}`}
                  />
                  <source
                    media="(max-width: 1000px)"
                    srcSet={`${product.gallery[2].tablet}`}
                  />
                  <img
                    src={`${product.gallery[2].desktop}`}
                    alt="gallery image"
                  />
                </picture>
              </div>
            </div>
          </section>
          <section className="suggestion-section">
            <div className="container">{/* component */}</div>
          </section>
        </>
      )}
      <section className="category-section">
        <div className="container">
          <Category />
        </div>
      </section>
      <ShortAbout />
    </>
  );
}