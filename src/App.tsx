import React, { FC, useState } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm';
import DisplayPizzas from './components/DisplayPizzas';
import Pizza from './models/Pizza';


const App: FC = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList, newPizza])
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(pizzaList.map((pizza) =>
      (pizza.id === newPizza.id ? newPizza : pizza)));
  }

   return (
    <div className="App">
      <div className = 'wrap'>
        <span className = 'heading'>Наша пиццерия</span>
        <AddPizzaForm
          addPizza = {addPizza} //Будем передавать через пропсы
        />

        <DisplayPizzas
          pizzasList={pizzaList}
          updatePizza={updatePizza}
        />
      </div>
    </div>
  );
}

export default App;
