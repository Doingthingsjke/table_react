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
            <form className={'form'}>
                <AddButton />
                Дата подачи заявки с
                <input
                    type={'date'}
                    placeholder={'21'}
                />
                до
                <input type={'date'}
                         placeholder={'1231245'}
                />
                <SearchButton/>
                <input
                    type="text"
                    placeholder="Текст для поиска"
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <ClearButton/>
                <OtchetButton/>
            </form>
        );
    }
}

export default SearchBar;