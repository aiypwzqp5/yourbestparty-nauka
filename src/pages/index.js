import * as React from "react";
import GlobalStyle from "../styles/GlobalStyles";
import Input from "../components/atoms/Input/Input";

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
    </main>
  );
};

export default IndexPage;
