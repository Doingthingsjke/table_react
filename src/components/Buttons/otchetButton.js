import React, {Component} from "react";


export default class OtchetButton extends Component {
    render() {
        let handleClick = () =>{
            console.log('121245')
        }
        return (
            <button
                onClick={handleClick}
                className='btn btn-light'
            >
                Отчет
            </button>
        )
    }
}