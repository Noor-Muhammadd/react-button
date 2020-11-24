import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Learn from './components/learn-onl;ine/learn-online/components/Learn/Learn';
import Team from './components/team-builder/team/Team';
import Population from './components/UltraNation/Country/Population';


function App() {
  const products = [
    {name : 'photoshop', price : '33$'},
    {name : 'Illustrator', price : '34$'},
    {name : 'adobe', price : '334$'},
    {name : 'figma', price : '333$'},
    {name : 'protopie', price : '373$'}
  ]

  return (
    <div className="App">


          <Team></Team>
          <Learn></Learn>
          <Population></Population>



          {/* <Random></Random> */}
          {/* <Social></Social> */}
          {/* {products.map((item) => (
            <Mal product={item}/>
          ))}

          {products.map((item) => <Mal product={item}/>)} */}

        {/* <h1>Noor Muhammad</h1>
          <Peron></Peron>
          <Noor></Noor>
          <Noor name="mishu chawdhury"></Noor>
          <Noor name="MS Khadija" roll="34"></Noor>
          <Products 
              name={products[0].name}
              price={products[0].price}>
          </Products>

          <Products 
              name={products[1].name}
              price={products[1].price}>
          </Products>

          <Products 
              name={products[3].name}
              price={products[3].price}>
          </Products>

          <Counter></Counter> */}

          {/* <Users></Users> */}
          {/* <Cart></Cart> */}



    </div>
  );
}


// function Random(props) {
//   const [users, setUsers] = useState([]);
//   const [cart, setCart] = useState([]);

//   const handleAdd = (user) => {
//     const newCart = [...cart, user];
//     setCart(newCart);
//   };

//   useEffect(() => {
//     fetch('https://randomuser.me/api/?results=15')
//       .then((res) => res.json())
//       .then((data) => setUsers(data.results))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <Header></Header>
//       <div className='app-container'>
//         <div className='user-list'>
//           {users.map((user) => (
//             <Users user={user} handleAdd={handleAdd}></Users>
//           ))}
//         </div>
//         <div className='cart-area'>
//           <h2>Total Users: {users.length}</h2>
//           <h3>Users Added: {cart.length}</h3>
//           <Cart cart={cart}></Cart>
//         </div>
//       </div>
//     </div>
//   );
// }



// function Social() {
// 	return (
// 		<div className="social-buddy">
// 			<Router>
// 				<Header></Header>
// 				<Switch>
// 					<Route exact path="/" component={Body} />
// 					<Route exact path="/post" component={Body} />
// 					<Route path="/post/:postId" component={PostDetails} />
// 					<Route path="*" component={NotFound} />
// 				</Switch>
// 			</Router>
// 		</div>
// 	);
// }

// Create Multiple Components Dynamically

// function Mal(props){
//   const style = {
//     color : 'red',
//     border : '3px solid blue',
//     margin : '10px',
//     textAlign : 'center',
//   }

//   return(
//     <div style={style}>
//       <h2>Name : {props.product.name}</h2>
//       <h2>Price : {props.product.price}</h2>
//     </div>
//   )
// }

// // Pass Object to a  Component & Access it

// function Products(props){
//   const style = {
//     color : 'red',
//     border : '3px solid blue',
//     margin : '10px'
//   }

//   return(
//     <div style={style}>
//       <h2>Name : {props.name}</h2>
//       <h2>Price : {props.price}</h2>
//     </div>
//   )
// }

// function Peron(){
//   return (
//     <div>
//       <h1>Component er modhdha function</h1>
//     </div>
//   )
// }

// function Noor(props){
//   return (
//     <div>
//       <h1>Nur Muhammad {props.name} {props.roll}</h1>
//       <h2>My {props.name} & my roll is {props.roll}</h2>
//     </div>
//   )
// }

// // Event Play

// function Counter() {
//   const [count, setCount] = useState(0)
//   const incrrease = () => setCount(count + 1)
//   const decrrease = () => setCount(count - 1)

//   return (
//     <div>
//       <button onClick={incrrease}>+</button>
//         <h1>{count}</h1>
//       <button onMouseOver={decrrease}>-</button>
//     </div>
//   )
// }


// // Load Data from API useEffect

// function Users() {
//   const [user, setUser] = useState([])

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => setUser(data))
//   })

//   const style = {
//     color : 'red',
//     border : '3px solid blue',
//     margin : '15px',
//     textAlign : 'center',
//   }

//   return (
//     <div style={style}>
//       <h1>Users length : {user.length}</h1>
//       <ol>
//           {user.map((u) =>(
//               <li>
//                   {u.id}<br/>
//                   {u.name}<br/>
//                   {u.phone}<br/>
//                   {u.email}<br/><br/>
//               </li>
//           ))}
//       </ol>
//     </div>
//   )
// }



export default App;
