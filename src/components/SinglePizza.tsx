import React, { FC, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditPizzaForm from './EditPizzaForm';
import Pizza from '../models/Pizza';

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza }) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className='pizza'>
            <img src = {`/images/${pizza.img}`} alt = {pizza.title}/>
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>

            <div className = 'pizza-controls'>
                <AiFillEdit onClick = {handleToggleEdit} />
                <AiFillDelete />
            </div>

            {edit
                ? <EditPizzaForm 
                    data = {pizza}
                    updatePizza = {updatePizza}
                    handleToggleEdit = {handleToggleEdit}
                    />
                : null}

        </div>
    )
}

export default SinglePizza
