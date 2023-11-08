// styles
import Category from "../../components/Category";
import "./Home.css";

// components
import ShortAbout from "../../components/ShortAbout";

//images
import Circles from "../../assets/home/desktop/pattern-circles.svg";
import SpeakerDesktop from "../../assets/home/desktop/image-speaker-zx9.png";
import SpeakerTablet from "../../assets/home/tablet/image-speaker-zx9.png";
import SpeakerMobile from "../../assets/home/mobile/image-speaker-zx9.png";
import EarphoneDesktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import EarphoneTablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import EarphoneMobile from "../../assets/home/mobile/image-earphones-yx1.jpg";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-introduction">
            <strong>NEW PRODUCT</strong>
            <h1>XX99 Mark II Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button>See Product</button>
          </div>
          <div className="hero-image"></div>
        </div>
      </section>
      <section className="category-section">
        <div className="container">
          <Category />
        </div>
      </section>
      <section className="latest-product-section-one">
        <div
          className="container"
          style={{ backgroundImage: `url(${Circles})` }}
        >
          <div className="even-columns">
            <div className="latest-speaker-one-image">
              <picture>
                <source media="(max-width: 700px)" srcSet={SpeakerMobile} />
                <source media="(max-width: 1000px)" srcSet={SpeakerTablet} />
                <img src={SpeakerDesktop} alt="speaker for desktop" />
              </picture>
            </div>
            <div className="latest-speaker-one-details">
              <h1>ZX9 SPEAKER</h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button>see product</button>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-product-section-two">
        <div className="container">
          <div className="even-columns">
            <div className="latest-speaker-two-details">
              <h5>ZX7 SPEAKER</h5>
              <button>see product</button>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-product-section-three">
        <div className="container">
          <div className="even-columns">
            <div className="latest-earphone-three-image">
              <picture>
                <source media="(max-width: 700px)" srcSet={EarphoneMobile} />
                <source media="(max-width: 1000px)" srcSet={EarphoneTablet} />
                <img src={EarphoneDesktop} alt="speaker for desktop" />
              </picture>
            </div>
            <div className="latest-earphone-three-details">
              <h5>YX1 EARPHONES</h5>
              <button>see product</button>
            </div>
          </div>
        </div>
      </section>
      <ShortAbout />
    </>
  );
}
