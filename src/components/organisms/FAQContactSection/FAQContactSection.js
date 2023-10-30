import React from "react";

import Contact from "../Contact/Contact";
import FAQSection from "../FAQSection/FAQSection";

import { StyledFAQContactSection } from "./FAQContactSection.styles.js";

const FAQContactSection = () => {
  return (
    <StyledFAQContactSection>
      <Contact />
      <FAQSection />
    </StyledFAQContactSection>
  );
};

export default FAQContactSection;
