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

  if (!body.name || !body.email || !body.message) {
    c.status(400);
    return c.json({ error: "Missing required fields" });
  }

  // Send email stuff
  const { data, error } = await resend.emails.send({
    from: "Contact submission <transport@mail.hypll.org>",
    to: [process.env.EMAIL_TO as string],
    subject: "New contact form submission",
    html: `
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Message:</strong> ${body.message}</p>
    `,
  });

  if (error) {
    c.status(500);
    return c.json({ success: false });
  }

  c.status(200);
  return c.json({ success: true  });
});

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
