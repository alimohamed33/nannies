import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./accordion.css";

const Accordion = ({ children, name, image }) => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div className="accordion-section">
      <div
        className="accordion-header"
        onClick={() => setShowAccordion(!showAccordion)}
      >
        <article className="info">
          <img src={image} alt="image" />
          <p className="info-name">category</p>
        </article>

        <button className={`toggle-accordion ${showAccordion ? "active" : ""}`}>
          {showAccordion ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>

      <div
        className={
          showAccordion ? "accordion-children" : "accordion-children hide"
        }
      >
        {children}
      </div>
    </div>
  );
};
export default Accordion;
