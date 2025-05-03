"use client";
import React, { useState } from "react";
import Image from "next/image";

interface EmailSectionProps {
  programmerContactTitle?: string;
  programmerContactDescription?: string;
  programmerGithubLink?: string;
  programmerLinkedinLink?: string;
  programmerContactEmailLabel?: string;
  programmerContactSubjectLabel?: string;
  programmerContactMessageLabel?: string;
  programmerContactEmailPlaceholder?: string;
  programmerContactSubjectPlaceholder?: string;
  programmerContactMessagePlaceholder?: string;
  programmerContactSubmitButtonText?: string;
}

const EmailSection: React.FC<EmailSectionProps> = ({
  programmerContactTitle = "Let's Connect",
  programmerContactDescription = "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  programmerGithubLink = "github.com",
  programmerLinkedinLink = "linkedin.com",
  programmerContactEmailLabel = "Your email",
  programmerContactSubjectLabel = "Subject",
  programmerContactMessageLabel = "Message",
  programmerContactEmailPlaceholder = "jacob@google.com",
  programmerContactSubjectPlaceholder = "Just saying hi",
  programmerContactMessagePlaceholder = "Let's talk about...",
  programmerContactSubmitButtonText = "Send Message",
}) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  interface FormData {
    email: string;
    subject: string;
    message: string;
  }

  interface FetchOptions {
    method: string;
    headers: {
      "Content-Type": string;
    };
    body: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const data: FormData = {
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options: FetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2 font-roboto">
          {programmerContactTitle}
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-2xl">
          {programmerContactDescription}
        </p>
        <div className="socials flex flex-row gap-2">
          {programmerGithubLink && (
            <a
              href={programmerGithubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-icon.svg"
                alt="Github Icon"
                width={60}
                height={60}
              />
            </a>
          )}
          {programmerLinkedinLink && (
            <a
              href={programmerLinkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="Linkedin Icon"
                width={60}
                height={60}
              />
            </a>
          )}
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-2xl font-medium"
              >
                {programmerContactEmailLabel}
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={programmerContactEmailPlaceholder}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-2xl mb-2 font-medium"
              >
                {programmerContactSubjectLabel}
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={programmerContactSubjectPlaceholder}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-2xl mb-2 font-medium"
              >
                {programmerContactMessageLabel}
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={programmerContactMessagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="text-white font-medium py-2.5 px-5 rounded-lg w-full bg-gradient-to-r from-[#497D74] to-[#2F4F4F]"
            >
              {programmerContactSubmitButtonText}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;