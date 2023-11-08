// imports
import { Link, ScrollRestoration } from "react-router-dom";

// styles
import "./Speakers.css";

// RTKQ
import { useGetProductsQuery } from "../../features/productsSlice";

// componenets
import Category from "../../components/Category";
import ShortAbout from "../../components/ShortAbout";
import ProductList from "../../components/ProductList";

export default function Speakers() {
  const { isSuccess, data } = useGetProductsQuery("speakers");

  return (
    <>
      <ScrollRestoration />
      <section className="speakers-category">
        <div className="container">
          <h1>speakers</h1>
        </div>
      </section>
      <section className="product-category-section flow product-category-section-spacer speakers-category-section">
        {isSuccess &&
          data.ids.map((productId, index) => (
            <ProductList
              key={productId}
              number={index}
              product={data.entities[productId]}
            />
          ))}
      </section>
      <section className="category-section">
        <div className="container">
          <Category />
        </div>
      </section>
      <ShortAbout />
    </>
  );
}
