import React, {Component, Fragment} from 'react';
import './App.css';
import Goods from "./Components/Goods/Goods";
import Details from "./Components/Details/Details";

class App extends Component {
    state = {
        Goods: [
            {name: 'Hamburger', count: 0, price: 80,},
            {name: 'Cheeseburger', count: 0, price: 90,},
            {name: 'Fries', count: 0, price: 45,},
            {name: 'Coffee', count: 0, price: 70,},
            {name: 'Tea', count: 0, price: 50,},
            {name: 'Cola', count: 0, price: 40,},
        ],
        totalPrice: 0,
    };

    addFood = name => {
        let goods = [...this.state.Goods];
        const goodsIndex = goods.findIndex(t => t.name === name.name);
        goods[goodsIndex].count++;
        let totalPrice = this.state.totalPrice;
        totalPrice += name.price;
        this.setState({goods, totalPrice});
    };

    removeFood = name => {
        let goods = [...this.state.Goods];
        const goodsIndex = goods.findIndex(r => r.name === name.name);
        goods[goodsIndex].count--;
        let totalPrice = this.state.totalPrice;
        totalPrice -= name.price;
        this.setState({goods, totalPrice});
    };

    render() {
        return (
            <Fragment>
                <div className="App">
                    <Details GoodsApp={this.state.Goods} removeFood={this.removeFood} totalPrice={this.state.totalPrice}/>
                    <p className="txt">Add items:</p>
                    <div className="block">
                        <Goods addFood={this.addFood} />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
