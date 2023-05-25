import React from 'react';
import '../styles/Starproduct.css';

const Starproduct = ({ starProduct }) => {
  return (
    <div className="starProduct">
      <div>
        <a href={starProduct[0].url}></a>
        <img src={starProduct[0].image} alt="product image"></img>
      </div>
      <div>
        <a href={starProduct[1].url}></a>
        <img src={starProduct[1].image} alt="product image"></img>
        <a href={starProduct[2].url}></a>
        <img src={starProduct[2].image} alt="product image"></img>
        <a href={starProduct[3].url}></a>
        <img src={starProduct[3].image} alt="product image"></img>
      </div>
    </div>
  );
};

export default Starproduct;
