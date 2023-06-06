import { testimonials } from "../../data";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import SectionHead from "../SectionHead/SectionHead";
import Card from "../Card/Card";
import { useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  //   const {name, quote, avatar, job  } = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);
    console.log("Initial", index);
    if (index <= 0) {
      console.log("last", index);
      setIndex(testimonials?.length - 1);
      //   console.log("after decre", testimonials?.length - 1);
    }
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials?.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials_head"
        />
        <Card className="testimonial">
          <div className="testimonial_avatar">
            <img
              src={testimonials[index]?.avatar}
              alt={testimonials[index]?.name}
            />
          </div>
          <p className="testimonial_quote">{`${testimonials[index]?.quote}`}</p>
          <h5>{testimonials[index]?.name}</h5>
          <small className="testimonial_title">
            {testimonials[index]?.job}
          </small>
        </Card>
        <div className="testimonials_btn-container">
          <button className="testimonials_btn" onClick={prevTestimonialHandler}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="testimonials_btn" onClick={nextTestimonialHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
