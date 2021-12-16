import React from 'react';
import './explore.css'
import { ReactComponent as SearchIcon } from "../right_menu/search.svg"
import PostsComponent from '../posts/postsComponent';

function Search(props) {
    return (
        <div className="search_bar search_explore">
                <SearchIcon className="search" />
                <input placeholder="Поиск в Твиттере" />
        </div>
    );
}

const themes = [
    "#политика",
    "#theinternational",
    "Матвиенко",
]

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
                <PostsComponent />
            </div>
        </>
    );
}

export default Explore;