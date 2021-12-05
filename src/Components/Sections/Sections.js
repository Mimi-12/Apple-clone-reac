import React from "react";
import Third from "../Assets/images/icons/logo_hero__trsrpeu6koqy_small.png";
import Fourth from "../Assets/images/icons/logo__dcojfwkzna2q_large (3).png";
import Fifthleft from "../Assets/images/icons/logo__fitness_large .png";
import FifthRight from "../Assets/images/icons/logo__airpods_medium.png";
import SixthLeft from "../Assets/images/icons/logo__music_medium.png";
import SixthSmall from "../Assets/images/icons/logo_whm_title__b1v7gc05jouu_medium.png";
import SixthRight from "../Assets/images/icons/logo_light__tv_large.png";
import MyYoutube from "../MyYoutube/MyYoutube";
// import News from "../News/News";
import "./Sections.css";
function Sections() {
  return (
    <div>
      {/* main section */}
      <section className="main-highlight-wrapper container-fluid">
        <div className="product-title">iphone 12</div>
        <div className="description-wrapper">Blast past fast</div>
        <div className="price-wrapper">
          From $29.12/mo. for 24 mo. or $699 before trade-in.<sup>2</sup>
          <br></br>Buy directly from Apple with special carrier offers.
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="#">learn more</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>
      </section>
      {/* second section */}
      <section className="second-hightlight-wrapper container-fluid">
        <div className="product-title">iPhone 12 Pro</div>

        <div className="description-wrapper">it's a leap year.</div>
        <div className="price-wrapper">
          From $41.62/mo. or $999 before trade-in. <sup>2</sup>
          <br></br>Buy directly from Apple with special carrier offers
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
      </section>
      {/* third section */}
      <section className="third-heghlight-wrapper container-fluid">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={Third} alt="" />
          </div>
        </div>
        <div className="description-wrapper">
          Save 6% on Apple products with anew <br></br> Apple Card__ all March
          long.<sup>*</sup>
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Apply now</a>
            </li>
          </ul>
        </div>
        <div className="exclusions">
          *Exclusions and terms appiy.<sup>5</sup>
        </div>
      </section>
      {/* fourth section */}
      <section className="fourth-heghlight-wrapper container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-md-6">
            <div className="left-side">
              <div className="ipad">ipad Air</div>
              <div className="description-wrapper">
                Powerful.Colorful.Wonderful.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="">Learn more</a>
                  </li>
                  <li>
                    <a href="">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-md-6">
            <div className="right-side">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={Fourth} alt="" />
                </div>
              </div>
              <div className="description-wrapper">
                The future of health is on your wrist.
              </div>
              <div className="links-wrapper small-link">
                <ul>
                  <li>
                    <a href="">Learn more</a>
                  </li>
                  <li>
                    <a href="">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fifth section */}
      <section className="fifth-heghlight-wrapper container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-md-6">
            <div className="left-side">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={Fifthleft} alt="" />
                </div>
              </div>
              <div className="description-wrapper">
                A new fitness experience for everyone. <br></br> Powered by
                Apple Wach.
              </div>
              <div className="links-wrapper small-link try">
                <ul>
                  <li>
                    <a href="">Learn more</a>
                  </li>
                  <li>
                    <a href="">
                      Try it free <sup>4</sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-md-6">
            <div className="right-side">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={FifthRight} />
                </div>
              </div>
              <div className="description-wrapper">
                with Active Noise Cancellation.
              </div>
              <div className="links-wrapper small-link ">
                <ul>
                  <li className="watch">
                    <a href="">Watch the film</a>
                  </li>
                  <li>
                    <a href="">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sixth-heghlight-wrapper container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={SixthLeft} alt="" />
                </div>
              </div>
              <div className="women">
                <img src={SixthSmall} alt="" />
              </div>
              <div className="links-wrapper small-link try">
                <ul>
                  <li>
                    <a href="">
                      Explore now <sup>5</sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper  col-md-6">
            <div className="top-logo-wrapper">
              <div className="tv-logo-wrapper">
                <img src={SixthRight} />
              </div>
            </div>
            <div className="description-wrapper tv">
              9 Immersive calls. 1 connection.
            </div>
            <div className="watch-more-wrapper">
              <a href="#">Watch now</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* <News/> */}
      </section>
      <section>
        <MyYoutube/>
      </section>
    </div>
  );
}

export default Sections;
