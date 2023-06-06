/* eslint-disable no-undef */
import CommonHeader from "../CommonHeader/CommonHeader";
import HeaderImage from "../../assets/images/header_bg_3.jpg";
import { gallery } from "../../gallary";
import "./Gallery.css";

const Gallery = () => {
  //
  return (
    <>
      <CommonHeader title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure
        eveniet iste consequatur quam eligendi rem optio blanditiis sunt ullam.
      </CommonHeader>

      <section className="gallery">
        <div className="container gallery_container">
          {gallery?.map(({ id, avatar }) => {
            return (
              <article className="gallery_card" key={id}>
                <img src={avatar} alt="Our gallery photo" />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
