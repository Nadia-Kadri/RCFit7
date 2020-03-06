const express = require("express");
const router = express.Router();

// Nodemailer Route
router.get("/", (req, res) => {
  res.render("client");
});

router.post("/send", (req, res) => {
  var data = req.body;
  console.log(data);

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "wooffte@gmail.com",
      pass: "4072019975"
    }
  });

  var mailOptions = {
    from: data.email,
    to: "kingffte@gmail.com",
    subject: "ENTER_YOUR_SUBJECT",
    html: `<ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <h3>Message:<h3>
            <p>${data.message}</p>`
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.json({ message: "Message was sent successfully!" });
    }
    smtpTransport.close();
  });
});

module.exports = router;
