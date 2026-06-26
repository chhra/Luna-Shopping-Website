import nodemailer from "nodemailer";
import dns from "dns";
export const sendOrder = async (req, res) => {
  console.log("EMAIL_USER:", process.env.EMAIL_USER); // check this
  console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS); // true/false
  const { first, last, email, phone, address, items } = req.body;

  try {
    // set up the email sender (using Gmail as an example)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // force IPv4 resolution for the connection
      lookup: (hostname, options, callback) => {
        dns.lookup(hostname, { family: 4 }, callback);
      },
    });

    // compose and send the email to yourself (the owner)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // sending to yourself, the owner
      subject: `New Order from ${first} ${last}`,
      text: `
        Name: ${first} ${last}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
      `,
    });

    res.status(200).json({ message: "Order sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to send order", error: error.message });
  }
};
