import { plans } from "../../data";
import CommonHeader from "../CommonHeader/CommonHeader";
import HeaderImage from "../../assets/images/header_bg_4.jpg";
import "./Plans.css";
import Card from "../Card/Card";

const Plans = () => {
  return (
    <>
      <CommonHeader title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi
        reprehenderit explicabo animi? Nihil est voluptatum, officia delectus
        esse ullam.
      </CommonHeader>

      <section className="plans">
        <div className="container plans_container">
          {plans?.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>

                <h4>Features</h4>
                {features?.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
