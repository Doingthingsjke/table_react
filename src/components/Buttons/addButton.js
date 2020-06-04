import React, {Component} from "react";
import './addButton.css'


export default class AddButton extends Component{
    render() {
        let addInfo = () => {
            alert('kakoi-to text')
        }
        return (
            <button
                className='btn btn-outline-primary btn-lg button1'
                onClick={addInfo}
            >
                Добавить
            </button>
        )
    }
}