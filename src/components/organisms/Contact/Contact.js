import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledContact, StyledForm } from "./Contact.styles";
import Input from "../../atoms/Input/Input";

import { formValidaiton } from "./Contact.data";
import Button from "../../atoms/Button/Button";
import { StyledSectionTitle } from "../../../styles/sharedStyles";

const Contact = () => {
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);

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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidaiton),
  });

  const onSubmit = (values) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => {
        setIsSend(true);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => console.log("finally: "));
  };

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
        name="contact"
        data-netlify="true"
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
