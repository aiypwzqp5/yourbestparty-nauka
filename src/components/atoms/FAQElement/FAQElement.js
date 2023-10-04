import React, { useState } from "react";

import Arrow from "../Icons/Arrow";

import {
  StyledFAQElement,
  StyledQuestionWrapper,
  StyledAnswerWrapper,
  StyledIconWrapper,
} from "./FAQElement.styles";

const FAQElement = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFAQElement
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      onClick={handleToggle}
      open={isOpen}
    >
      <StyledQuestionWrapper>
        <StyledIconWrapper>
          <Arrow />
        </StyledIconWrapper>
        {question}
      </StyledQuestionWrapper>
      <StyledAnswerWrapper
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        {answer}
      </StyledAnswerWrapper>
    </StyledFAQElement>
  );
};

export default FAQElement;
