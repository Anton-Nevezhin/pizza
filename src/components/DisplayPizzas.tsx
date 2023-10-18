import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from '../components/SinglePizza';

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void; //сохраняем редактирование
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza }) => {
    return (
        <div className='container'>
            {pizzasList.map((pizza) => {
                return <SinglePizza
                    key={pizza.id}
                    updatePizza = {updatePizza}//сохраняем редактирование
                    pizza={pizza} />
            })}
        </div>
    )
}

export default DisplayPizzas