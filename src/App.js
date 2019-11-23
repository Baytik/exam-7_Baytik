import React, {Component,Fragment} from 'react';
import './App.css';
import Goods from "./Components/Goods/Goods";


class App extends Component {

    state = {

};

    render() {
        return (
            <Fragment>
                <div className="App">
                    <div className="Order">
                        <h4>Order details:</h4>
                        <p>Order is empty!</p>
                        <p>Please add some items</p>
                    </div>
                    <p className="txt">Add items:</p>
                    <div className="block">
                        <Goods/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
