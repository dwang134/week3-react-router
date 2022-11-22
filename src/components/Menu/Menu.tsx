import React,{useState} from 'react';
import Card from '../Card/Card'
import {getMenu, getFoodItemByType, FoodType} from'../../data/foodDataHelper';
import './Menu.scss';

const Menu:React.FC = () => {

    const [allFood, setAllFood]= useState(getMenu());

    const getFoodType = (type: FoodType):void => {
        const result = getFoodItemByType(type);
        if (!result){
            setAllFood([]);
        }else{
            setAllFood(result);
        }
    }

    return(
        <div className= "menu">
        <div className="menu-container">
            <h2>Filter Items</h2>
            <div className= "categories-group">
                <button onClick= {()=> setAllFood(getMenu())}>All</button>
                <button onClick= {()=> getFoodType("Drink")}>Drink</button>
                <button onClick= {()=> getFoodType("Main")}>Main</button>
                <button onClick= {()=> getFoodType("Side")}>Side</button>
            </div>
            {allFood ?
             allFood.map((food)=> (
                <Card key={food.id} id= {food.id} name={food.name} />
            )) :
            (
                <h2>No food found</h2>
            )}
        </div>
        </div>
    )
}

export default Menu;