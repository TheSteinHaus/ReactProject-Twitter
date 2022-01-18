import express from 'express';
import { Auth } from '../Models/AuthModel.js'

export const UserRouter = express.Router();

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
// UserRouter.get('/:id', (req, res) => {
//     Auth.findOne({ id: req.params.id }, (error, user) => {
//         if (error) { res.send('Пользователь не найден') }

//         else { user != null ? res.send(`<div style="background-color: rgba(25, 220, 128, 0.3); padding: 30px; padding-left: 40px; margin: 10px; width: 450px; border-radius: 215px"><h1>${user.name}</h1><h3>${user.nickname}</h3><h2>${user.description}</h2><p>Дата регистрации: ${user.registration.day} * ${user.registration.month} * ${user.registration.year}</p></div>`) : res.send('Такого ID нет') }
//     })
// })

UserRouter.get('/:email', (req, res) => {
    Auth.findOne({ email: req.params.email }, (error, user) => {
        if (error) { res.send('Пользователь не найден') }

        else {
            console.log(user);
            res.json(user)
        }
    })
})

//TODO: Написать запрос на получение всех пользователей
UserRouter.get('/', (req, res) => {
    Auth.find({}, (error, users) => {
        if (error) { res.send('Пользователи не найдены') }

        else {
            const usersArray = users.map((user) => {
                const text = `<div style="background-color: rgba(25, 220, 128, 0.3); padding: 30px; padding-left: 40px; margin: 10px; width: 450px; border-radius: 215px"><h1>${user.name}</h1><h3>${user.nickname}</h3><h2>${user.description}</h2><p>Дата регистрации: ${user.registration.day} * ${user.registration.month} * ${user.registration.year}</p></div>`
                return text
            })

            let allUsers = ''
            for (let user of usersArray) {
                allUsers += user
            }

            res.send(allUsers)
        }
    })
})