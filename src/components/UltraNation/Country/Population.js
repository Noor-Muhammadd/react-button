import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import Country from './Country';

const Population = () => {
  const [ultra, setUltra] = useState([])
  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        setUltra(data)
        const names = data.map(country => country.name)
        console.log(names)
      })
      .catch(err => console.log(err))
  },[])

  const addCountry = (country) => {
    console.log('added', country)
    const newCart = [...cart, country];
    setCart(newCart);
  }

    return (
    <div>
      <h1>Population : {ultra.length}</h1>
      <Cart cart={cart}></Cart>
      {
        ultra.map(country => <Country country={country} addCountry={addCountry} key={country.alpha3Code}></Country>)
      }





{/* 
      <ul>
        {
          ultra.map(country => <li>{country.name}</li>)
        }
      </ul>

      {
        ultra.map(country => <h2>{country.name}</h2>)
      } 
      {
        ultra.map(country => <Country name={country.name}></Country>)
      }       */}
    </div>
    );
};

export default Population;



