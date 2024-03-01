"use client";
import { useState } from "react";
import FormAction from "../components/formAction/page";
import Header from "../components/header/page";
import Input from "../components/input/page";
import { contactUsFields } from "../components/formAction/formField";

const fields = contactUsFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Page() {
  const [contactUsFieldsState, setContactUsFieldsState] = useState(fieldsState);

  const handleChange = (e) =>
    setContactUsFieldsState({
      ...contactUsFieldsState,
      [e.target.id]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "save-contact-info",
      JSON.stringify(contactUsFieldsState)
    );
    console.log(contactUsFieldsState);
  };

  return (
    <div className="container mx-auto mb-8 px-8">
      <Header />
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={contactUsFieldsState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
            <FormAction handleSubmit={handleSubmit} text="Contact Us" />
          </div>
        </div>
      </form>
    </div>
  );
}
