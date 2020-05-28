import React, {Component} from "react";
import './productTable.css'


class NewString extends Component {
    render() {
        const product = this.props.product;

        return (
            <tr>
                <td>{product.sostoyanie}</td>
                <td>{product.nomer}</td>
                <td>{product.name}</td>
                <td>{product.opisanieRaboti}</td>
                <td>{product.dataZayavki}</td>
                <td>{product.dataTorgov}</td>
                <td>{product.dataOdobreniya}</td>
            </tr>
        );
    }
}

class ProductTable extends Component{
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }

            rows.push(
                <NewString
                    product={product}
                    key={product.name}
                />
            );
        });

        return (
            <table className={'table'}>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Название организации заказчика</th>
                    <th>Описание работ</th>
                    <th>Дата подачи заявки</th>
                    <th>Дата проведения торгов</th>
                    <th>Дата одобрения</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}


export default ProductTable;

