'use client'
import { title } from "@/components/primitives";
import React from "react";
import {Form, Button, Card, Input, CardBody, Select, SelectItem, Textarea} from '@heroui/react';

export const reasons = [
  {key: "source-docs", label: "Source or Documentation"},
  {key: "well-wishes", label: "Well Wishes"},
  {key: "unwell-wishes", label: "Unwell Wishes"},
  {key: "death-threats", label: "Death Threats"},
  {key: "life-threats", label: "Life Threats"},
  {key: "other", label: "Other"},
];
export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };
  return (
    <div>
      <h1 className={title()}>Contact Me</h1>
      <h2 className="text-default-400 m-4">Here's where you can get in contact!</h2>
      <Card className="">
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
            items={reasons}
            label="Reason for Communicating"
            placeholder="Include Subject"
          >
          {(reason) => <SelectItem>{reason.label}</SelectItem>}
          </Select>
          <Textarea className="max-w-xs" isRequired label="Message" placeholder="What would you like to say?" />
          <Button type="submit">Send</Button>
        </Form>
        </CardBody>

      </Card>
    </div>
  );
}
