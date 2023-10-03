import * as React from "react";
import GlobalStyle from "../styles/GlobalStyles";
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";
import HamburgerButton from "../components/atoms/HamburgerButton/HamburgerButton";

const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <Input name="example" label="Example" type="text" error="error text" />
      <Input
        name="example"
        label="Example"
        type="textarea"
        error="error text"
      />
      <Button text="KONTAKT" />
      <HamburgerButton />
    </main>
  );
};

export default IndexPage;
