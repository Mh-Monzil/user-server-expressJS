const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const users = [
    {id:1, name: 'monzil', email: 'monzil@gmail.com'},
    {id:2, name: 'ozil', email: 'ozil@gmail.com'},
    {id:3, name: 'fahim', email: 'fahim@gmail.com'}
]

app.get('/', (req, res) => {
    res.send("user management server is running");
})


app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log("hitting");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port);