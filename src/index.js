import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";

const PRODUCTS = [
    {name: 'Ввещенский женский монастырьВ', nomer: '16399',  opisanieRaboti: 'Football', dataZayavki: '12 декабря 2020', dataTorgov: '11 мая 2020', dataOdobreniya: '26 сентября 2020', sostoyanie: 'в ожидании'},
    {name: 'вещенский женский ', nomer: '1234', opisanieRaboti: 'кержт', dataZayavki: '13 декабря 2020', dataTorgov: '2 мая 2020', dataOdobreniya: '22 сентября 2020', sostoyanie: 'в ожидании' },
    {name: 'йцу', nomer: '192183467',  opisanieRaboti: 'йцуке', dataZayavki: '14 декабря 2020', dataTorgov: '30 мая 2020', dataOdobreniya: '9 сентября 2020', sostoyanie: 'в ожидании' },
    {name: '123', nomer: '152',  opisanieRaboti: 'ывап', dataZayavki: '15 декабря 2020', dataTorgov: '55 мая 2020', dataOdobreniya: '8 сентября 2020', sostoyanie: 'в ожидании' },
    {name: 'апор', nomer: '112354',  opisanieRaboti: 'ыварфувко', dataZayavki: '16 декабря 2020', dataTorgov: '123 мая 2020', dataOdobreniya: '2 сентября 2020', sostoyanie: 'в ожидании' },
    {name: 'дфжо', nomer: '199', opisanieRaboti: 'ящывпржэ', dataZayavki: '20 декабря 2020', dataTorgov: '01 мая 2020', dataOdobreniya: '7 сентября 2020', sostoyanie: 'в ожидании' },
    {name: 'fmxfm', nomer: '1913479', opisanieRaboti: 'ящывпржэ', dataZayavki: '20 декабря 2020', dataTorgov: '01 мая 2020', dataOdobreniya: '7 сентября 2020', sostoyanie: 'в ожидании' },
    {name: 'дqwerherhо', nomer: '191239', opisanieRaboti: 'ящывпржэ', dataZayavki: '20 декабря 2020', dataTorgov: '01 мая 2020', dataOdobreniya: '7 сентября 2020', sostoyanie: 'в ожидании' },
    {name: 'дtgu,yu,', nomer: '191269', opisanieRaboti: 'ящывпржэ', dataZayavki: '20 декабря 2020', dataTorgov: '01 мая 2020', dataOdobreniya: '7 сентября 2020', sostoyanie: 'в ожидании' },
];

ReactDOM.render(
    <App products={PRODUCTS}/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
