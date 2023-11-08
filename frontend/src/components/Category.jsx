// styles
import "./Category.css";

// imports
import { Link } from "react-router-dom";

//images
import Headphone from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Arrow from "../assets/shared/desktop/icon-arrow-right.svg";

export default function Category() {
  return (
    <div className="flow category-spacer">
      <div className="category">
        <img src={Headphone} alt="headphone-category" />
        <Link className="category-link" to="/headphones">
          Headphones
        </Link>
        <Link className="category-shop-link" to="/headphones">
          SHOP
          <div style={{ backgroundImage: `url(${Arrow})` }}></div>
        </Link>
      </div>
      <div className="category">
        <img src={Speaker} alt="headphone-category" />
        <Link className="category-link" to="/speakers">
          Speakers
        </Link>
        <Link className="category-shop-link" to="/speakers">
          SHOP
          <div style={{ backgroundImage: `url(${Arrow})` }}></div>
        </Link>
      </div>
      <div className="category">
        <img src={Earphone} alt="headphone-category" />
        <Link className="category-link" to="/earphones">
          Earphones
        </Link>
        <Link className="category-shop-link" to="/earphones">
          SHOP
          <div style={{ backgroundImage: `url(${Arrow})` }}></div>
        </Link>
      </div>
    </div>
  );
}
