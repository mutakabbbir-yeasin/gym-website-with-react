import { faqs } from "../../data";
import { FaQuestion } from "react-icons/fa";
import SectionHead from "../SectionHead/SectionHead";
import FAQ from "../FAQ/FAQ";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <SectionHead icon={<FaQuestion />} title="FAQs" />
        <div className="faqs_wrapper">
          {faqs?.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
