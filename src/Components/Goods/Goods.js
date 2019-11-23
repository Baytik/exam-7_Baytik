import React from 'react';
import {Goods as Foods} from '../ImgPrice/ImgPrice';

const Goods = props => {
    return (
    Foods.map((food,index)=>(
        <div key={index} >
            <div>
                <button className='btn'>
                    <h3>{food.name}</h3>
                    <p>{food.price + ' Сом'}</p>
                    <img src={food.image}/>
                </button>
            </div>
        </div>
    ))
    )
};

export default Goods;