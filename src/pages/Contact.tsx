import React from "react";
import { toast } from "sonner";
import { z } from "zod";
import ToastStyles from "../utils/ToastStyles";
import PageAnimation from "../components/Animation";
import TopButtons from "../components/TopButtons";

const schema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email().max(50),
  message: z.string().min(15).max(500),
});

export default function Contact() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errors, setErrors] = React.useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setErrors([]);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const parseData = schema.safeParse(data);

    if (parseData.success) {
      const response = await fetch("https://backboard.lassejlv.dk/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: parseData.data.name,
          lastName: parseData.data.name,
          email: parseData.data.email,
          message: parseData.data.message,
        }),
      });

      setIsLoading(false);

      if (response.ok) {
        toast.success("Message sent successfully!", ToastStyles[0]);
        setIsSuccess(true);
      } else {
        toast.error("An error occurred. Please try again.", ToastStyles[0]);
      }
    } else {
      const errors = parseData.error.errors.map((error) => error.message);
      setErrors(errors);

      toast.error(
        "Invalid details provided. Please try again.",
        ToastStyles[0]
      );
      setIsLoading(false);
    }
  };

  return (
    <PageAnimation>
      <TopButtons href="/" />
      <form
        onSubmit={handleSubmit}
        className="container mx-auto flex flex-col gap-4 p-4 pt-20 md:w-1/2 rounded-md shadow-md text-white"
      >
        <h1 className="text-3xl font-bold text-center">Contact</h1>
        <p className="text-center text-gray-400">
          Need help with a project or something else? Feel free to reach out!
        </p>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name "
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
          />
        </div>

        {isSuccess || isLoading ? (
          <a className="bg-darkLight text-white p-2 rounded-md font-bold opacity-50 cursor-not-allowed text-center">
            {isLoading && !isSuccess && "Sending..."}
            {!isLoading && !isSuccess && "Send"}
            {isSuccess && "Sent! 🚀"}
          </a>
        ) : (
          <button
            type="submit"
            className="bg-darkLight text-white p-2 rounded-md font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || isSuccess}
          >
            {isLoading && !isSuccess && "Sending..."}
            {!isLoading && !isSuccess && "Send"}
            {isSuccess && "Sent! 🚀"}
          </button>
        )}

        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => (
              <li className="text-red-500" key={index}>
                {index + 1}. {error}
              </li>
            ))}
          </ul>
        )}
      </form>
    </PageAnimation>
  );
}
