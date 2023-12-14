"use client";
import Section from "@/components/Common/Section";
import SectionHeader from "@/components/Common/SectionHeader";

import { getInputs } from "@/lib/form/getInput";
import { FormComponent } from "@/components/Common/form/FormComponent";
import SocialLinks from "@/components/Common/SocialLinks";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface contactFormType {
  name: string;
  email: string;
  phone: string;
  subject: string;
  hearUs: string;
  message: string;
}

const contactForm = getInputs<contactFormType>("contact");

const Contact = () => {
 
  const initialValues: contactFormType = {
    ...contactForm.initialValues,
  };

  return (
    <Section id="contact" className="px-5 py-5   rounded-2xl mt-20 bg-primary-foreground dark:bg-[#1a1a1a] shadow-border">
      <div className="flex justify-between items-center ">
        <SocialLinks />
        <FormComponent
          {...contactForm}
          initialValues={initialValues}
          titleForm="Contact"
          descriptionForm="Please fill this form to get in touch with me"
          labelButtonSubmit="Send"
        />
      </div>
    </Section>
  );
};

export default Contact;
