import React from "react";

export const Input = (props) => {

    return (
            <div className="row">
                <div className="input-field col s12 grey lighten-3 black-text">
                <i className="material-icons prefix">search</i>
                <input onChange={props.onChangeInputValue} value={props.searchValue} id="first_name2" type="text" className="validate" />
                <label htmlFor="icon_prefix2">Search people</label>
                </div>
            </div>
        );
}
