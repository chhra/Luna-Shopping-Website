import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOrder = async (req, res) => {
  const { first, last, email, phone, address, items } = req.body;

  const itemsList = items
    .map((item) => `- ${item.name} (DA${item.price})`)
    .join("\n");
  const total = items.reduce((sum, item) => sum + item.price, 0);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // Resend's test sender — works immediately
      to: process.env.EMAIL_USER, // your email (where orders go)
      subject: `New Order from ${first} ${last}`,
      text: `New order!\n\nName: ${first} ${last}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\n\nItems:\n${itemsList}\n\nTotal: DA${total}`,
    });

    res.status(200).json({ message: "Order sent successfully" });
  } catch (error) {
    console.log("ORDER ERROR:", error);
    res
      .status(500)
      .json({ message: "Failed to send order", error: error.message });
  }
};
