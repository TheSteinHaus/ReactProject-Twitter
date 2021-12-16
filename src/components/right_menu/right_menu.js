import React from "react"
import './right_menu.css'
import { ReactComponent as Tick } from "./tick.svg"
import user_logo from '../posts/icon.png'
import dtf from './dtf.jpg'
import igromania from './igromania.jpg'
import kanobu from './kanobu.jpg'
import { Search } from "./Search"

const themes = [
    "#политика",
    "#theinternational",
    "Матвиенко",
]

const accounts = [
    {
        logo: dtf,
        nickname: "DTF",
        search_nickname: "@playdtf",
        tick: false
    },
    {
        logo: kanobu,
        nickname: "Канобу",
        search_nickname: "@kanobu_ru",
        tick: false
    },
    {
        logo: igromania,
        nickname: "Игромания",
        search_nickname: "@igromania",
        tick: true
    },
    {
        logo: user_logo,
        nickname: "GitHub",
        search_nickname: "@github",
        tick: false
    }
]

function RightMenu(props) {
    return (
        <div>
            { window.location.pathname === "/explore" ? <></> : <Search /> }
        <div className="right_menu">
            
            <div className={ window.location.pathname === "/explore" ? "actual actual_first" : "actual" }>
                <div className="head">
                    <p>Актуальные темы для вас</p>
                    <img></img>
                </div>
                { [...Array(themes.length)].map((item, index) => <div className="themes"> <p>Актуальные темы: Россия</p> <p>{themes[index]}</p> </div>) }
            <div className="read">
                <p className="who_read">Показать еще</p>
            </div>
            </div>

            <div className="actual">
                <div className="head">
                    <p>Кого читать</p>
                </div>
                { [...Array(3)].map((item, index) => <div className="accounts">
                    <img src={accounts[index].logo} className="logo_read" />
                    <p>
                        <p>{accounts[index].nickname} {accounts[index].tick === true ? <Tick /> : null}</p>
                        <p>{accounts[index].search_nickname}</p>
                    </p>
                    <button>Читать</button>
                </div>) }
                <div className="read">
                    <p className="who_read">Показать еще</p>
                </div>
            </div>

        </div>
        </div>
    );
}

export default RightMenu;