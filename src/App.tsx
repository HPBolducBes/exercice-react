import React, { useEffect, useState } from 'react';
import './App.css';

import items from './samples/sample-items';
import customers from './samples/sample-customers';
import trans from './samples/sample-transactions';

function App() {
  const [keyCustomer, setKeyCustomer] = useState(null); 
  const [keyTrans, setKeyTrans] = useState(null);  
  const [customerList, setCustomerList] = useState(customers);
  const [itemList, setItemList] = useState(items);
  const [cart, setCart] = useState(null);
  const [transaction, setTransaction] = useState(trans);
 
  function showCustomer(key) {
    return (
      <React.Fragment>
        <label key={key} htmlFor={key}>
          <input type="radio" id={"customer" + key} name="customer" value={key} onChange={e => handleCustomerChange(key)}/>
          {customerList[key].firstname} {customerList[key].lastname} 
        </label>
        <br />
      </React.Fragment>
    )
  }
  
  function showItem() {
    return (
      Object.keys(itemList).map(key =>
        <React.Fragment>
          <tr>
            <td>{key}</td>
            <td>{itemList[key].name}</td>
            <td><input id={"itemprice"+ key} className="input-price" type="number" name={"price" + key} defaultValue={itemList[key].price} onChange={e => handlePriceChange(key, e.currentTarget.value)}/></td>
            <td><input id={"itemqty" + key} className="input-qty" type="number" name={"qty" + key} defaultValue={itemList[key].qty} onChange={e => handleItemQtyChange(key, e.currentTarget.value)}/></td>
            <td><button onClick={() => addItem(key)}>Add</button></td>
          </tr>
        </React.Fragment>
      )
    )
  }

  function showCart() {
    if (cart == null || Object.keys(cart).length == 1) {
      return (
        <tr>
          <td colSpan={5}>Start shopping!</td>
        </tr>
      )
    } else {      
      if ( cart["status"] != 'pending') {
        Object.keys(cart).map(keyC =>
          {if (keyC != "status") {
            return (cart[keyC].price = itemList[keyC].price)  
            }
          })
      }

      return (        
        Object.keys(cart).map(key =>
          {if (key != "status") {
            return (
              <React.Fragment>
              <tr>
                <td>{key}</td>
                <td>{cart[key].name}</td>
                <td>{cart[key].price}</td>
                <td><input id={"cart" + key} className="cart-qty" type="number" name={"cartqty" + key} defaultValue={cart[key].qty}/></td>
                <td><button>Delete</button></td>
              </tr>
              </React.Fragment>
            )}
          }
        )
      )
    }
  }

  function handleCustomerChange(key) {
    setKeyCustomer(key);
    setCart(customerList[key].cart);

    console.log("Customer Changed")
    console.log(cart)
  }

  function handlePriceChange(key, value) { 
    console.log("Price Changed")  

    itemList[key].price = value;
    setItemList(itemList)

    try { 
      cart[key].price = value;
      setCart(cart)
    } catch(e) { }

    console.log(itemList);
    console.log(cart);
  }

  function handleItemQtyChange(key, value) { 
    console.log("Item Qty changed")
    
    itemList[key].qty = value;
    console.log(itemList);
  }

  function addItem(key) {
    console.log("Add item")
    
    if (cart != null) {
      try {
        
        customerList[keyCustomer].cart[key].qty += itemList[key].qty
      } catch {
        console.log("Catch")
        customerList[keyCustomer].cart += itemList[key]
        
      }
      setCart(customerList[keyCustomer].cart)
    }

    console.log(cart)
  }


  function deleteItem(key) {
    console.log("Delete item")
    cart.filter(item => item[key] !== key);
    console.log(cart)
  }

  return ( 
    <div className="App">
      <header className="App-header">
        <div>
          <p>Normal Customer</p>
          {Object.keys(customerList).map(key => {
              if (customerList[key].total < 1000000)
                return (
                  showCustomer(key)
                )})}
          <p>High Spenders</p>
            {Object.keys(customerList).map(key => {
              if (customerList[key].total >= 1000000)
                return (
                  showCustomer(key)
                )})}
        </div>
        <div>
          <p>Shopping List:</p>      
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Add</th>
              </tr>
            </thead>
            <tbody>
              {showItem()}
            </tbody>
          </table>
        </div>
        <div>
          <p>Cart: {cart != null ? cart.status : "current"}</p>          
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {showCart()}
            </tbody>
          </table>
        </div>
        <div>          
          <p>Transaction List</p>
          <select name="transaction" id="transaction">
            {Object.keys(transaction).map(key =>
              <option value="key">{key}</option>
              )}
          </select>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Item</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(itemList).map(key =>
                <React.Fragment>
                  <tr>
                    <td>{key}</td>
                    <td>{itemList[key].name}</td>
                    <td><input className="input-price" type="number" name={"price" + key} defaultValue={itemList[key].price}/></td>
                    <td><input className="input-qty" type="number" name={"qty" + key} defaultValue={itemList[key].qty}/><button>Add</button></td>
                  </tr>
                </React.Fragment>
                )}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  )
}

export default App
