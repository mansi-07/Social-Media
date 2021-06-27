const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')

const app = express();

const dbURL = "mongodb://admin:admin@tut-shard-00-00.tkhyy.mongodb.net:27017,tut-shard-00-01.tkhyy.mongodb.net:27017,tut-shard-00-02.tkhyy.mongodb.net:27017/SocialMedia?ssl=true&replicaSet=atlas-9lle6j-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(5000, console.log(`Server is running in on port 5000`)))
    .catch((err)=>console.log(err));

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.redirect('/auth');
});

app.use('/auth', userRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});