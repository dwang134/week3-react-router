import React from 'react'
import {Link} from 'react-router-dom';
import './Card.scss';

interface Props{
    id: string,
    name: string
}
const Card:React.FC<Props> = ({id, name}) => {
  return (
    <div className= "card">
        <Link to= {`/food/${id}`}>
        <h2>ID: {id}</h2>
        <h2>Name: {name}</h2>
        </Link>
    </div>
  )
}

export default Card