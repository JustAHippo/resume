"use client";
import React from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  Form,
  Button,
  Card,
  CardHeader,
  Input,
  CardBody,
  Select,
  SelectItem,
  Alert,
  Textarea,
} from "@heroui/react";

import { title } from "@/components/primitives";

const SITE_KEY = "6Ldi6UMrAAAAADbM8i4Ie9IXJYWeIFLrnYotci3D";

const reasons = [
  { key: "source-docs", label: "Source or Documentation" },
  { key: "well-wishes", label: "Well Wishes" },
  { key: "unwell-wishes", label: "Unwell Wishes" },
  { key: "death-threats", label: "Death Threats" },
  { key: "life-threats", label: "Life Threats" },
  { key: "other", label: "Other" },
];

// 👉 Wrapped in GoogleReCaptchaProvider here
export default function ContactPage() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(null);
  const [topAlert, setTopAlert] = React.useState(<div></div>);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: any = Object.fromEntries(new FormData(e.currentTarget));
    console.log(formData);

    if (!executeRecaptcha) {
      setTopAlert(
        <div>
          <Alert className="text-wrap" color="danger">
            ReCaptcha has not loaded!
          </Alert>
        </div>
      );
      return;
    }

    const token = await executeRecaptcha("submit");
    formData.recaptchaToken = token;

    try {
      const response = await fetch("/api/v1/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      setTopAlert(
        <div>
          <Alert className="text-wrap" color="success">
            Received! Check your email to verify. Your ticket will expire in 1 hour.
          </Alert>
        </div>
      );
    } catch (error: any) {
      setTopAlert(
        <div>
          <Alert className="text-wrap" color="danger">{error.toString()}</Alert>
        </div>
      );
      console.error("Error:", error);
    }

    setSubmitted(formData);
  };

  return (
    <div>
      <h1 className={title()}>Contact Me</h1>
      <h2 className="text-default-400 m-4">
        Here's where you can get in contact!
      </h2>

      <Card>
        <CardHeader className="w-full max-w-xs">{topAlert}</CardHeader>
        <CardBody>
          <Form className="w-full max-w-xs" onSubmit={onSubmit}>
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            <Select
              isRequired
              className="max-w-xs"
              name="subject"
              items={reasons}
              label="Reason for Communicating"
              placeholder="Include Subject"
            >
              {(reason) => <SelectItem>{reason.label}</SelectItem>}
            </Select>
            <Textarea
              isRequired
              className="max-w-xs"
              name="message"
              label="Message"
              placeholder="What would you like to say?"
            />
            <Button type="submit">Send</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
