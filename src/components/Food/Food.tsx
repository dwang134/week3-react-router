import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {getFoodItemByID, FoodItem} from'../../data/foodDataHelper';
import './Food.scss'

const Food = () => {

    const [foodItem, setFoodItem] = useState<FoodItem>();
    const {foodItemID} = useParams();

    useEffect(() => {

    //check if foodItem ID exists
    if (foodItemID){

        //get food by id using function in food data helper
        const foodById= getFoodItemByID(foodItemID);

        //if food by id is found set foodItem 
        if(foodById){
            setFoodItem(foodById); 
        }
    }
    }, [foodItemID]); 

  return (
    
    foodItem ? (
        <div className= "food">
            <div className= "food-container">
                <h2>ID: {foodItem.id}</h2>
                <h2>Name: {foodItem.name}</h2>
                <h2>Type: {foodItem.type}</h2>
                <h2>Ingredients: {foodItem.ingredients}</h2>
            </div>
            <Link to= "/" className= "link">Go back to main page</Link>
        </div>
    ): (
        //if food item dont exist either from missing ID or ID not found
        <div>No Food Item found</div>
    )
  )
}

export default Food