import React, { useState } from 'react';
import "./App.css";
import Counter from './components/Counter';
import SingleLight from "./components/SingleLight";
import Text from './components/Text';
import {Grid} from './components/Grid';

function App() {

  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const totalLights = rows * columns;

  const lightsArray = Array.from({ length: totalLights });

  const handleDecrementRows = () => {
    if( rows <= 0) {
        return;
    }
    setRows(rows - 1);
  }

  const handleIncrementRows = () => {
    setRows(rows + 1);
  }

  const handleDecrementColumns = () => {
    if( columns <= 0) {
        return;
    }
    setColumns(columns - 1);
  }

  const handleIncrementColumns = () => {
    if (columns >= 9) {
      return;
    }
    setColumns(columns + 1);
  }

  
  return (
    <div className = {'content'}>
      <nav className = {'nav'}>
        <Text> {totalLights} bulbs</Text>
        <div className= {'counter'}>
            <Counter count = {rows} item = {'rows'} onIncrement = {handleIncrementRows} onDecrement = {handleDecrementRows}/>
            <Counter count = {columns} item = {'columns'} onIncrement = {handleIncrementColumns} onDecrement = {handleDecrementColumns}/>
        </div>
      </nav>
      <Grid columns={columns}>
        {lightsArray.map((value, index) => {
          return <SingleLight key={index}/>;
        })}
      </Grid>
    </div>
  )
};

export default App;
