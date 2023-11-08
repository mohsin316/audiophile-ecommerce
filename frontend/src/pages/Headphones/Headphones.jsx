// imports
import { ScrollRestoration } from "react-router-dom";

// styles
import "./Headphones.css";

// RTKQ
import { useGetProductsQuery } from "../../features/productsSlice";

// componenets
import Category from "../../components/Category";
import ShortAbout from "../../components/ShortAbout";
import ProductList from "../../components/ProductList";

export default function Headphones() {
  const { isSuccess, data } = useGetProductsQuery("headphones");
  console.log();

  return (
    <>
      <ScrollRestoration />
      <section className="headphones-category">
        <div className="container">
          <h1>headphones</h1>
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
