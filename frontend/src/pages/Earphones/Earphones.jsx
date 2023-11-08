// imports
import { Link, ScrollRestoration } from "react-router-dom";

// styles
import "./Earphones.css";

// RTKQ
import { useGetProductsQuery } from "../../features/productsSlice";

// componenets
import Category from "../../components/Category";
import ShortAbout from "../../components/ShortAbout";
import ProductList from "../../components/ProductList";

export default function Earphones() {
  const { isSuccess, data } = useGetProductsQuery("earphones");

  return (
    <>
      <ScrollRestoration />
      <section className="earphones-category">
        <div className="container">
          <h1>earphones</h1>
        </div>
      </section>
      <section className="product-category-section flow product-category-section-spacer">
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
