import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Item>

      {faqsData.map((faqs) => (
        <Accordion.Item key={faqs.id}>
          <Accordion.Header key={faqs.id}>{faqs.header}</Accordion.Header>
          <Accordion.Body key={faqs.id}>{faqs.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      </Accordion.Item>
      <OptForm>
       <OptForm.Input placeholder ='Email address'/>
       <OptForm.Button placeholder ='Email address'>Try it now </OptForm.Button>
       <OptForm.Break/>
       <OptForm.Text >Ready to watch? Enter your email to create or restart membership</OptForm.Text>
     </OptForm>
    </Accordion>
  );
}
