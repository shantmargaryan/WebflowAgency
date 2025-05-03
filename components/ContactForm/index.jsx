"use client";
import { useTranslations } from "next-intl";
import { ContactSection, ContactContainer, Content, ContactTitle, ContactParagraph, Wrapper, SmallTitle, Form, Input, Textarea, Button, Link } from "./styled";


export default function ContactForm() {
  const t = useTranslations("HomeSendInquery");
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9d8b7267-8669-4d02-b1b6-5b0c899451b4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      alert("Form submitted successfully!");
      event.target.reset();
    }
  }

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Content style={{
          background: "url(/imgs/SendInquiryImg.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <ContactTitle>
            {t("title")}
          </ContactTitle>
          <ContactParagraph>
            {t("description")}
          </ContactParagraph>
        </Content>
        <Wrapper>
          <SmallTitle>
            {t("secoundTitle")}
          </SmallTitle>
          <ContactParagraph>
            {t("secoundDescription")}
          </ContactParagraph>
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Name" required />
            <Input type="email" name="email" placeholder="Email" required />
            <Textarea name="message" placeholder="Message"></Textarea>
            <Button type="submit">
              {t("button")}
            </Button>
          </Form>
        </Wrapper>
      </ContactContainer>
    </ContactSection>
  );
}