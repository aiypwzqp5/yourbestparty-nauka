import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledContact, StyledForm } from "./Contact.styles";
import Input from "../../atoms/Input/Input";

import { formValidaiton } from "./Contact.data";
import Button from "../../atoms/Button/Button";
import { StyledSectionTitle } from "../../../styles/sharedStyles";

const Contact = () => {
  const { datoCmsSekcjaKontakt } = useStaticQuery(graphql`
    query ContactQuery {
      datoCmsSekcjaKontakt {
        labelEmail
        labelImie
        labelWiadomo
        tekstWPrzycisku
        tytu
      }
    }
  `);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidaiton),
  });

  const onSubmit = (data) => console.log(data);

  const fields = [
    {
      type: "text",
      name: "name",
      label: datoCmsSekcjaKontakt.labelImie,
    },
    {
      type: "email",
      name: "email",
      label: datoCmsSekcjaKontakt.labelEmail,
    },
    {
      type: "textarea",
      name: "message",
      label: datoCmsSekcjaKontakt.labelWiadomo,
    },
  ];

  return (
    <StyledContact>
      <StyledSectionTitle>{datoCmsSekcjaKontakt.tytu}</StyledSectionTitle>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {fields.map(({ name, type, label }) => (
          <Input
            key={name}
            name={name}
            type={type}
            error={errors?.[name]?.message}
            label={label}
            register={register(name)}
          />
        ))}
        <Button type="submit" text={datoCmsSekcjaKontakt.tekstWPrzycisku} />
      </StyledForm>
    </StyledContact>
  );
};

export default Contact;
