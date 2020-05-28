import React, {Component} from "react";


export default class ClearButton extends Component{
    render() {
        let handleClick = () =>{
            console.log('12')
        }
        return (
            <button onClick={handleClick}>
                Очистить
            </button>
        )
    }
}