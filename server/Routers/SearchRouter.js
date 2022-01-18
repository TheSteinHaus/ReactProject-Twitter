import express from 'express';
import { Posts } from '../Models/PostsModel.js';


//TODO: Роут для поиска
export const SearchRouter = express.Router();

const postStyle = '<body style="display: flex; flex-direction: column; align-items: center;"><div style="background-color: rgba(25, 220, 128, 0.3); padding: 50px; padding-left: 70px; margin: 10px; width: 700px; border-radius: 215px">'

//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)
SearchRouter.get('/', (req, res) => {
    Posts.find({text: {$regex: req.query.text}}, (error, posts) => {
        if (error) { res.status(404); res.send('Посты не найдены') }

        else {
                res.json(posts)
            }
        }
    )
})