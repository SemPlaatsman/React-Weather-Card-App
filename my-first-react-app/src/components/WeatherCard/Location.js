import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputReference = useRef("");

  useEffect(() => {
    if (inputMode) {
      inputReference.current.focus();
    }
  }, [inputMode]);

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              //getWeather(query + ",");
              getWeather(query);
            }}
          >
            <InputField
              ref={inputReference}
              required
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
          </Form>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  position: relative;
  background: #46618b;
  border-radius: 5px;
`;

const InputField = styled.input`
  padding: 5px;
  background: transparent;
  color: white;
  border: none;
  width: 80px;
  &:focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  padding: 5px;
  background: #394e70;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled.span`
  font-size: 0.9rem;
  position: absolute;
  background: #557fc2;
  cursor: pointer;
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: -10px;
  right: -10px;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
`;

const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6rem;
  position: relative;
  transform: translateX(0) translateY(0);
  transition: transform 75ms ease-in-out;
  //text-shadow: 1px 1px 4px #000000;
  cursor: pointer;
  &:hover {
    transform: translate(1px, -2px);
    text-shadow: 1px 1px 4px #000000;
  }
`;

const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;
