"use server";

import { validateString } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    // Here you can implement your own email handling logic
    // For example, you could:
    // 1. Log the messages to a database
    // 2. Use a different email service
    // 3. Store messages for later processing
    
    // For now, we'll just return a success response
    return {
      data: {
        message: "Message received successfully",
        senderEmail: senderEmail as string,
        messageContent: message as string
      }
    };
  } catch (error: unknown) {
    return {
      error: "Failed to send message. Please try again later."
    };
  }
};
