import React, {Component} from 'react';
import FillTable from './components/fillTable/fillTable'
import './App.css';
import TopBar from "./components/topBar/topBar";

class App extends Component {
        render()
        {
            return (
                    <div className={'container'}>
                        <div className='topbar'>
                            <TopBar/>
                        </div>
                        <div>
                            <FillTable
                                products={this.props.products}/>
                        </div>
                    </div>
            );
        }
    }


export default App;
