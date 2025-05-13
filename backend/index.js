import express from 'express';
import  bodyParser from 'body-parser';
import nodemailer from "nodemailer";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express();


// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const route = express.Router();
const port = process.env.PORT || 5000;

app.use('/v1', route);
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

route.post("/send-email", async (req, res) => {
    console.log("request body:", req.body);
    const { name, email, message } = req.body;
    try {
        const mailOptions = {
          to: 'sanippanday@gmail.com, pandeypra055@gmail.com', 
          subject: `New message from ${name} (${email})`,
          text: message,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully', success: true });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
      }
    });




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
