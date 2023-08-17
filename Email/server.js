const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const sgMail = require("@sendgrid/mail");

const API_KEY = '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';
sgMail.setApiKey(API_KEY);

app.use(bodyParser.urlencoded({extended:true}));
const { urlencoded } = require("body-parser");

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Email.html");
});

const testEmail = async (msg) => {
    try {
        await sgMail.send(msg);
        console.log("Message sent successfully");
    } catch (error) {
        console.error(error);
    }
};




app.post('/', (req, res) =>{
    const email = req.body.email;

    res.send("Email submitted");

    testEmail({
        to: email,
        from: "ubaid.a218@gmail.com",
        subject: "Subscribed.",
        text: "Thanks for Subscribing!",
    });

});

app.listen(1000, function (request, response){
    console.log("server is running on port 1000")
})
