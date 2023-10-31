import React from "react";

import Contact from "../Contact/Contact";
import FAQSection from "../FAQSection/FAQSection";

import {
  StyledFAQContactSection,
  StyledCircleWrapper,
} from "./FAQContactSection.styles.js";
import DoubleCircle from "../../atoms/Icons/DoubleCircle";

const FAQContactSection = () => {
  return (
    <StyledFAQContactSection>
      <StyledCircleWrapper>
        <DoubleCircle />
      </StyledCircleWrapper>
      <Contact />
      <FAQSection />
    </StyledFAQContactSection>
  );
};

export default FAQContactSection;
