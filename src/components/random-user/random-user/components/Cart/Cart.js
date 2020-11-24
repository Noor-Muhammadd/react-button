import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const salary = cart.map(element=>(element.dob.age+13)*1000);
    
    // const salary = cart.dob.age+30;
    // const salary = (cart.user.dob.age + 13) * 1000;
    // console.log(cart);
    const totalSalary = salary.reduce((total,salary)=>total+salary,0);
    
    return (
        <div>
            <h3>Cumulative Salary: ${totalSalary}/yr</h3>
        </div>
    );
};

export default Cart;