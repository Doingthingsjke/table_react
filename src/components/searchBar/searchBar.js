import React, {Component} from "react";
import './searchBar.css'
import AddButton from "../Buttons/addButton";
import SearchButton from './../Buttons/searchButton';
import ClearButton from "../Buttons/clearButton";
import OtchetButton from "../Buttons/otchetButton";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (
            <div>
                <AddButton/>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                Дата подачи заявки с
                &nbsp;
                &nbsp;
                &nbsp;
                <input
                    type='text'
                    placeholder={'20.02.2020'}
                />
                &nbsp;
                &nbsp;
                &nbsp;
                до
                &nbsp;
                &nbsp;
                &nbsp;
                <input
                    type='text'
                    placeholder={'20.02.2020'}
                />
                <SearchButton/>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <input
                    type="text"
                    placeholder="Текст для поиска"
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <ClearButton/>
                &nbsp;
                &nbsp;
                <OtchetButton/>
            </div>
        );
    }
}

export default SearchBar;