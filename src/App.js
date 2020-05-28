import React, {Component} from 'react';
import FillTable from './components/fillTable/fillTable'
import './App.css';
import TopBar from "./components/topBar/topBar";

class App extends Component {
        render()
        {
            return (
                <div className={'container'}>
                    <TopBar/>
                    <FillTable
                    products={this.props.products}/>
                </div>
            );
        }
    }


export default App;
