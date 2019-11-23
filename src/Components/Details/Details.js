import React from 'react';
import nanoid from 'nanoid';

const Details = props => {
    const generateIngredietns = () => {
        let arrIngr = [];
        for (let i = 0; i < props.GoodsApp.length;i++) {
            for (let k = 0; k < props.GoodsApp[i].count; k++) {
                arrIngr.push(<div key={nanoid()} className="text-1">{props.GoodsApp[i].name}
                <span className="text-2">x {props.GoodsApp[i].count}</span> <span>{props.GoodsApp[i].price} Сом</span>
                    <button className="btn-2" onClick={() => props.removeFood(props.GoodsApp[i])}>X</button>
                </div>)
            }
        }
        return arrIngr;
    };

    return (
        <div className="Order">
            <h4>Order Details</h4>
            <div className="Price">Price: {props.totalPrice} Сом</div>
            <p>Order is empty!</p>
            <p>Please add some items</p>
            {generateIngredietns()}
        </div>
    );
};

export default Details;