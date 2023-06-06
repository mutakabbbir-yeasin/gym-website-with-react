import CommonHeader from "../CommonHeader/CommonHeader";
import HeaderImage from "../../assets/images/header_bg_1.jpg";
import StoryImage from "../../assets/images/about1.jpg";
import VisionImage from "../../assets/images/about2.jpg";
import MissionImage from "../../assets/images/about3.jpg";

import "./About.css";

const About = () => {
  return (
    <>
      <CommonHeader title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere
        quam repudiandae cumque culpa dolores minima aspernatur esse laboriosam.
      </CommonHeader>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our story image" />
          </div>

          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dignissimos ullam totam ratione, laboriosam officiis commodi
              temporibus possimus tempore dolor quos excepturi accusantium et
              modi obcaecati veniam delectus atque nam soluta quis molestias
              deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dignissimos ullam totam ratione, laboriosam officiis commodi
              temporibus possimus tempore dolor quos excepturi accusantium et
              modi obcaecati veniam delectus atque nam soluta quis molestias
              deleniti.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              alias, blanditiis autem consectetur nesciunt praesentium
              laudantium ut quos mollitia.
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dignissimos ullam totam ratione, laboriosam officiis commodi
              temporibus possimus tempore dolor quos excepturi accusantium et
              modi obcaecati veniam delectus atque nam soluta quis molestias
              deleniti. Eveniet quae magnam eum non quisquam totam minus,
              consequuntur facere minima provident ab animi hic perferendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dignissimos ullam totam ratione, laboriosam officiis commodi
              temporibus possimus tempore dolor quos excepturi accusantium et
              modi obcaecati veniam delectus atque nam soluta quis molestias
              deleniti.
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our story image" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our mission image" />
          </div>

          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dignissimos ullam totam ratione, laboriosam officiis commodi
              temporibus possimus tempore dolor quos excepturi accusantium et
              modi obcaecati veniam delectus atque nam soluta quis molestias
              deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dignissimos ullam totam ratione, laboriosam officiis commodi
              temporibus possimus tempore dolor quos excepturi accusantium et
              modi obcaecati veniam delectus atque nam soluta quis molestias
              deleniti.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              alias, blanditiis autem consectetur nesciunt praesentium
              laudantium ut quos mollitia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
