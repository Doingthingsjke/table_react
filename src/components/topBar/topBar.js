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
                    <div>
                        <h1>Hello World!</h1>
                    </div>
                )
            }
            return (
            <div className={'topbar'}>
                <button type="button" className="btn btn-outline-light">Одобренные</button>
                <button type="button" className="btn btn-outline-light" onClick={handleClick}>Ждут одобрения</button>
                <button type="button" className="btn btn-outline-light" onClick={anotherStuff}>Не выигранные</button>
                <button type="button" className="btn btn-outline-light">Выигранные/Подписанные</button>
                <button type="button" className="btn btn-outline-light">Отклоненные</button>
                <button type="button" className="btn btn-outline-light">Архив</button>
                <button type="button" className="btn btn-outline-light">Все</button>
            </div>
        )
    }
}
 export default TopBar ;