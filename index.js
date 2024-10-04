
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'public')));

app.get("/service", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'service.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.get("/Contact", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Contact.html'));
});


app.use((req, res, next) => {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();


    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.status(403).send('L\'application est disponible uniquement pendant les heures de travail (lundi à vendredi, de 9h à 17h).');
    }
});


app.listen(port, () => {
    console.log(`Applistening on port ${port}!`);
});