import React from 'react'
import { Input } from './Input'

export const Search = (props) => {
    return (
        <nav>
            <div className="searchBar">
                <Input onChangeInputValue={props.onChangeInputValue} searchValue={props.searchValue} />
            </div>
        </nav>
    )
}