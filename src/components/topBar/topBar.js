import React, {Component} from "react";
import './topBar.css'
import FillTable from "../fillTable/fillTable";


class TopBar extends Component {
        render() {

            let handleClick = () =>{
                return(
                    <FillTable/>
                    )
            }

            let anotherStuff = () => {
                return(
                    console.log('22'),
                    <div>
                        <h1>
                            Hello, WOrld!
                        </h1>
                    </div>
                )
            }
            return (
            <div className={'topbar'}>
                <button>Одобренные</button>
                <button onClick={handleClick}>Ждут одобрения</button>
                <button onClick={anotherStuff}>Не выигранные</button>
                <button>Выигранные/Подписанные</button>
                <button>Отклоненные</button>
                <button>Архив</button>
                <button>Все</button>
            </div>
        )
    }
}
 export default TopBar ;