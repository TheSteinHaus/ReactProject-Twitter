import React from 'react';
import axios from 'axios';
import './explore.css'
import { ReactComponent as SearchIcon } from "../right_menu/search.svg"
import PostsComponent from '../posts/postsComponent';
import { useState } from 'react/cjs/react.development';

const themes = [
    "#политика",
    "#theinternational",
    "Матвиенко",
]

const api = axios.create({
    baseURL: `http://localhost:5000/search`
  })

function Search(props) {
    const [text, setText] = useState('')

    return (
        <div className="search_bar search_explore">
                <SearchIcon className="search" />
                <input onChange={e => setText(e.target.value)} value={text} onKeyPress={async event => {
                    if (event.key === "Enter") {
                        let data = await api.get(`/?text=${text}`)
                        data.data.length != 0 ? localStorage.setItem('searchPosts', JSON.stringify(data.data)) : localStorage.setItem('searchPosts', null)
                        window.location.reload()
                    }
                }} placeholder="Поиск в Твиттере" />
        </div>
    );
}

function Explore(props) {
    return (
        <>
            <Search />
            <div className="explore">
                <div className="actual_explore">
                    <div className="head">
                        <p>Актуальные темы для вас</p>
                        <img></img>
                    </div>
                    { themes.map((item, index) => <div className="themes"> <p>Актуальные темы: Россия</p> <p>{themes[index]}</p> </div>) }
                <div className="read">
                    <p className="who_read">Показать еще</p>
                </div>
                </div>
                {JSON.parse(localStorage.getItem('searchPosts')) != null ? <PostsComponent searchPosts={JSON.parse(localStorage.getItem('searchPosts'))} /> 
                : <h1>Посты не найдены</h1> }
            </div>
        </>
    );
}

export default Explore;