import { Hono } from "hono";
import { cors } from "hono/cors";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const app = new Hono();
app.use("*", cors());

app.get("/", (c) => {
  return c.redirect("https://lassejlv.dk")
});

app.notFound((c) => {
  return c.redirect("https://lassejlv.dk")
})

app.post("/resend", async (c) => {
  const body = await c.req.json();

  if (!body.firstName || !body.lastName || !body.email || !body.message) {
    c.status(400);
    return c.json({ error: "Missing required fields" });
  }

  // Send email stuff
  const { data, error } = await resend.emails.send({
    from: "Hypll Mail-Service <transport@mail.hypll.org>",
    to: [process.env.EMAIL_TO as string],
    subject: "New contact form submission",
    html: `
      <h1>New contact form submission</h1>
      <p>First name: ${body.firstName}</p>
      <p>Last name: ${body.lastName}</p>
      <p>Email: ${body.email}</p>
      <p>Message: ${body.message}</p>
    `,
  });

  if (error) {
    c.status(500);
    return c.json({ error: "Failed to send email" });
  }

  c.status(200);
  return c.json({ data });
});

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
