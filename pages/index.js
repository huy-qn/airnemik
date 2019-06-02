import React, { useState } from "react";
import Head from "next/head";
import { Flex, Box, Text } from "rebass";
import { space, width } from "styled-system";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "YOUR API KEY" }).base(
  "YOUR AIRTABLE BASE ID"
);

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  zipCode: Yup.number()
    .integer("Invalid")
    .required("Required")
});

const Wrapper = styled(Box)({
  fontFamily: `'Inconsolata', monospace`,
  fontSize: `18px`,
  lineHeight: "180%",
  color: "#333"
});

const Tagline = styled(Text)({
  fontFamily: `'Anton', sans-serif`,
  fontWeight: `normal`,
  fontSize: "60px",
  lineHeight: "160%",
  color: "#111",
  margin: "0"
});

const FormWrapper = styled(Box)({
  borderRadius: "4px"
});

const Paragraph = styled(Text)({
  fontSize: "20px"
});

const FormInput = styled(Field)(
  {
    fontFamily: `'Inconsolata', monospace`,
    display: "block",
    border: "solid 2px gray",
    fontSize: "20px",
    borderRadius: "4px",
    outline: "none"
  },
  space,
  width
);

const Button = styled(Box)({
  backgroundColor: "blue",
  fontFamily: `'Inconsolata', monospace`,
  fontSize: "22px",
  borderRadius: "100px",
  border: "none",
  color: "white",
  fontWeight: "bold"
});

const IndexPage = props => {
  const [recordCreated, setRecordCreationStatus] = useState(null);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Anton|Inconsolata&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <Flex>
          <Box width={[1 / 2]} p={5}>
            <Tagline as="h2">Airnemik = Airtable + NextJS + Formik</Tagline>
            <Paragraph as="p">
              Quickly build a landing-page with save data to Airtable
              <br />
            </Paragraph>
          </Box>
          <Box width={1 / 2} p={5}>
            <FormWrapper p={3} bg="">
              <Formik
                initialValues={{
                  zipCode: "",
                  email: ""
                }}
                validationSchema={FormSchema}
                onSubmit={values => {
                  base("Table 1").create(
                    {
                      email: values.email,
                      "ZIP code": values.zipCode
                    },
                    function(err, record) {
                      if (err) {
                        console.error(err);
                        return;
                      }

                      setRecordCreationStatus(true);
                    }
                  );
                }}
              >
                {() => (
                  <Form>
                    <Box>
                      <label htmlFor="zip-code">ZIP code</label>
                      <FormInput
                        name="zipCode"
                        type="number"
                        width={2 / 3}
                        p={3}
                        placeholder="zip code"
                      />
                      <ErrorMessage name="zipCode">
                        {msg => <Text color="red">{msg}</Text>}
                      </ErrorMessage>
                    </Box>
                    <Box mt={3}>
                      <label htmlFor="email">Email</label>
                      <FormInput
                        width={2 / 3}
                        name="email"
                        type="email"
                        p={3}
                        placeholder="email"
                      />
                      <ErrorMessage name="email">
                        {msg => <Text color="red">{msg}</Text>}
                      </ErrorMessage>
                    </Box>
                    <Button
                      width={3 / 4}
                      p={3}
                      mt={4}
                      as="button"
                      type="submit"
                    >
                      Submit
                    </Button>
                    {recordCreated === true ? (
                      <Text color="green">
                        Success
                      </Text>
                    ) : null}
                  </Form>
                )}
              </Formik>
            </FormWrapper>
          </Box>
        </Flex>
      </Wrapper>
    </>
  );
};

export default IndexPage;
