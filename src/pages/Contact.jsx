import React from "react";
import PageAnimation from "../animation";
import TopButtons from "../topButtons";
import Spinner from "../Spinner.jsx";

export default function Contact() {
  const [error, setError] = React.useState(null);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    console.group("Contact Form");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);
    console.groupEnd();

    setLoading(true);

    const res = await fetch("https://backboard.lassejlv.dk/resend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      }),
    })

    if (!res.ok) return alert("Something went wrong, please try again later");
    if (res.ok) {
      alert("Message sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }

    setLoading(false);
  }

  return (
    <PageAnimation>
      <TopButtons href={"/"} />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center mt-4">
          Contact Me
        </h1>
        <p className="text-lg text-gray-300 italic text-center mt-2">
          Need help with a website? Or something else? Feel free to contact me
          by filling out the form below.
        </p>

        <div className="flex flex-col items-center justify-center mt-4 m-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firtName" className="text-white">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                onBlur={(e) => {
                  const { value } = e.target;

                  if (value.length < 3) {
                    setError({
                      type: "firstName",
                      message: "Must be at least 3 characters long",
                    });
                  } else if (value.length > 20) {
                    setError({
                      type: "firstName",
                      message: "Must be less than 20 characters long",
                    });
                  } else {
                    setError(null);
                    setFirstName(value);
                  }
                }}
              />

              {error && error.type === "firstName" && (
                <p className="text-red-500 text-sm mt-1">{error.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                onBlur={(e) => {
                  const { value } = e.target;

                  if (value.length < 3) {
                    setError({
                      type: "lastName",
                      message: "Must be at least 3 characters long",
                    });
                  } else if (value.length > 20) {
                    setError({
                      type: "lastName",
                      message: "Must be less than 20 characters long",
                    });
                  } else {
                    setError(null);
                    setLastName(value);
                  }
                }}
              />

              {error && error.type === "lastName" && (
                <p className="text-red-500 text-sm mt-1">{error.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 w-full">
            <label htmlFor="email" className="text-white w-full">
              Email
            </label>
            <input
              type="email"
              id="email"
              onBlur={(e) => {
                const { value } = e.target;
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!regex.test(value)) {
                  setError({
                    type: "email",
                    message: "Must be a valid email address",
                  });
                } else {
                  setError(null);
                  setEmail(value);
                }
              }}
            />

            {error && error.type === "email" && (
              <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
          </div>
          <div className="flex flex-col items-center justify-center mt-4 w-full">
            <label htmlFor="message" className="text-white w-full">
              Message
            </label>
            <textarea className="w-full" rows="10" placeholder="Message" maxLength={600} minLength={15} onBlur={(e) => {
              const { value } = e.target;

              if (value.length < 15) {
                setError({
                  type: "message",
                  message: "Must be at least 15 characters long",
                });
              } else if (value.length > 600) {
                setError({
                  type: "message",
                  message: "Must be less than 600 characters long",
                });
              } else {
                setError(null);
                setMessage(value);
              }
            }} />

            {error && error.type === "message" && (
              <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
          </div>
          <div className="flex flex-col items-center justify-center mt-4 w-full">
            <button
              className="w-full bg-darkLight p-2 rounded-md text-white font-bold hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={error || !firstName || !lastName || !email || !message || loading}
              onClick={handleSubmit}
            >
              {loading ? <Spinner />: "Submit"}
            </button>
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}
