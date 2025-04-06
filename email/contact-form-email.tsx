import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

const ContactFormEmail = ({
  message,
  senderEmail,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body style={{ backgroundColor: "#f3f4f6" }}>
        <Container>
          <Section style={{ 
            backgroundColor: "#fff",
            padding: "20px",
            margin: "40px auto",
            borderRadius: "6px",
          }}>
            <Heading>You received the following message from the contact form</Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender's email is: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactFormEmail;
