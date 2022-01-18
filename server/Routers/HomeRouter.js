import express from 'express';

//Для чтения тела POST запроса
const urlencodedParser = express.urlencoded({ extended: false });

export const HomeRouter = express.Router();

HomeRouter.get('/', (req, res) => {
    res.send(`<h1 style="background-color: rgba(25, 220, 128, 0.3); padding: 30px; padding-left: 40px; margin: 10px; width: 150px; border-radius: 215px">Hello World!</h1>`);
})

HomeRouter.post('/', urlencodedParser, (req, res) => {
    const name = req.body.name;
    const responseMessage = "Hello " + name + "!";
    
    res.send(responseMessage);
})