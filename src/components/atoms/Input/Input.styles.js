import styled, { css } from "styled-components";
import { focusVisibleStyles } from "../../../styles/sharedStyles";

const inputStyle = css`
  border: 2px solid var(--black);
  width: 100%;
  border-radius: 21px;

  ${focusVisibleStyles};
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

export const StyledInput = styled.input`
  height: 50px;
  padding: 0 22px;
  ${inputStyle}
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  color: var(--black);
  cursor: pointer;
`;

export const StyledError = styled.p`
  color: var(--red);
  text-align: center;
  width: 100%;
  font-size: 20px;
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  height: 296px;
  padding: 22px;
  ${inputStyle}
`;
