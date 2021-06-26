const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbURL = "mongodb+srv://admin:admin@tut.tkhyy.mongodb.net/SocialMedia?retryWrites=true&w=majority";
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>app.listen(5000, console.log(`Server is running in on port 5000`)))
    .catch((err)=>console.log(err));

app.set('view engine','ejs');

app.use(express.json());


app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});