import React, {Component} from "react";
import './productTable.css'


class NewString extends Component {
    render() {
        const product = this.props.product;

        return (
            <tr>
                <td className='td-1'>{product.sostoyanie}</td>
                <td className='td-2'>{product.nomer}</td>
                <td className='td-3'>{product.name}</td>
                <td className='td-4'>{product.opisanieRaboti}</td>
                <td className='td-5'>{product.dataZayavki}</td>
                <td className='td-6'>{product.dataTorgov}</td>
                <td className='td-7'>{product.dataOdobreniya}</td>
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
            <table className='table table-striped table-borderless table-hover'>
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

