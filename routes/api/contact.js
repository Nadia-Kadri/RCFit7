const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


// Nodemailer Route

router.post("/send", (req, res) => {
  const data = req.body;
  console.log(data);
  console.log("Message has been sent");

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d4f7a84c19633c",
      pass: "1f30cb15700b57"
    }
  });

  let mailOptions = {
    from: data.email,
    to: "rcfit7@gmail.com",
    subject: data.subject ? data.subject : "",
    html: `<ul>
            <li style="list-style: none;">Name: ${data.name}</li>
            <li style="list-style: none;">Email: ${data.email}</li>
            </ul>

            <h3>Message:<h3>
            <p>${data.message}</p>`
  };

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.json({ message: "" });
    }
    transporter.close();
  });
});

module.exports = router;
