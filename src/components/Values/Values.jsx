/* eslint-disable react/jsx-key */
import Image from "../../assets/images/values.jpg";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../../data";
import SectionHead from "../SectionHead/SectionHead";
import Card from "../Card/Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="values_left">
          <div className="values_image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values_right">
          <SectionHead icon={<GiCutDiamond />} title="values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sit culpa tenetur voluptates repudiandae.
          </p>
          <div className="values_wrapper">
            {values.map(({ id, Icon, title, desc }) => {
              return (
                <Card className="values_value" key={id}>
                  <span>
                    <Icon />
                  </span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
