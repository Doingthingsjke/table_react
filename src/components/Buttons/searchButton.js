import React, {Component} from "react";


export default class SearchButton extends Component {
    render() {
        let handleClick = () => {
            console.log('1223')
        }
        return (
            <button onClick={handleClick}>
                Поиск
            </button>
        )
    }
}