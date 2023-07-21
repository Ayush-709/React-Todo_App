import React, { useState } from "react";
import './App.css'
import DataItem from "./DataItem";

export default function App(){
  
  const [inputValue, setInputValue] = useState('');
  const [dataItems, setDataItems] = useState([]);

  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  const handleAppItem = (e) =>{
    if(inputValue.trim()!== ""){
      setDataItems([...dataItems, inputValue]);
      setInputValue("")
    }
  }

  const handleDeleteItem = (title) => {
    const updateitems = dataItems.filter((item) => item !==title);
    setDataItems(updateitems);
  }
  

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAppItem();
    }
  };

  return <>
    <div className="App">
      <div className="all_container">

        <div className="input_and_button_container">
          <input 
          type="text" 
          placeholder="Add items"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          />
          <button id="add_items" onClick={handleAppItem}>+</button>
        </div>

        <div className="data_container">
          <h2>TODO</h2>
          <hr/>
          <div className="data_items_container">
            {dataItems.map((title, index) => (
              <DataItem 
              key = {index} 
              title = {title}
              onDelete = {handleDeleteItem}
              />
            ))}
          </div>
          
        </div>

      </div>
    </div>
    </>
}