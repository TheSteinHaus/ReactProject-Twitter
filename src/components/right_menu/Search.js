import React from 'react';
import { ReactComponent as SearchIcon } from "./search.svg"

export function Search(props) {
    return (
        <div className="search_bar">
                <SearchIcon className="search" />
                <input placeholder="Поиск в Твиттере" />
        </div>
    );
}