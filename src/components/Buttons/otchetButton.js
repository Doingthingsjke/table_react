import React, {Component} from "react";


export default class OtchetButton extends Component {
    render() {
        let handleClick = () =>{
            console.log('121245')
        }
        return (
            <button onClick={handleClick}>
                Отчет
            </button>
        )
    }
}