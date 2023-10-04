import styled from "styled-components";

export const StyledFAQElement = styled.details`
  width: 100%;
  cursor: pointer;

  svg {
    transition: transform 0.25s linear;
  }

  &[open] {
    svg {
      transform: rotateZ(-90deg);
    }
  }
`;

export const StyledQuestionWrapper = styled.summary`
  display: flex;
  gap: 10px;
  font-weight: 700;
  font-size: clamp(20px, 2.222vw, 32px);

  &::-webkit-details-marker {
    display: none;
  }
`;

export const StyledAnswerWrapper = styled.div`
  margin-top: 14px;
  font-size: clamp(16px, 1.389vw, 20px);
`;

export const StyledIconWrapper = styled.div`
  color: var(--green);
`;
