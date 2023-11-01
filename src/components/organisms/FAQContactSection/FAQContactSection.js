import React from "react";

import Contact from "../Contact/Contact";
import FAQSection from "../FAQSection/FAQSection";

import {
  StyledFAQContactSection,
  StyledCircleWrapper,
} from "./FAQContactSection.styles.js";
import DoubleCircle from "../../atoms/Icons/DoubleCircle";

const FAQContactSection = ({ isContactPage }) => {
  return (
    <StyledFAQContactSection $isContactPage={!isContactPage}>
      <StyledCircleWrapper>
        <DoubleCircle />
      </StyledCircleWrapper>
      <Contact isContactPage={isContactPage} />
      <FAQSection isContactPage={isContactPage} />
    </StyledFAQContactSection>
  );
};

export default FAQContactSection;
