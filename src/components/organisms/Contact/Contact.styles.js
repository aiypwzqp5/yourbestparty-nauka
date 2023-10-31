import styled from "styled-components";

export const StyledContact = styled.section`
  width: 100%;
  padding: clamp(34px, 4.444vw, 64px) clamp(22px, 4.722vw, 68px)
    clamp(34px, 4.444vw, 64px) clamp(22px, 2.639px, 38px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (min-width: 590px) {
    align-items: center;
  }

  @media only screen and (min-width: 954px) {
    width: 50%;
    align-items: flex-end;
  }

  @media only screen and (min-width: 1440px) {
    width: 45%;
  }
`;

export const StyledForm = styled.form`
  margin-top: clamp(34px, 5.903vw, 85px);
  width: 100%;
  max-width: 438px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 22px;
`;
