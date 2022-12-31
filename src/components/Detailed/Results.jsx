import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Results = ({ recipes }) => {

    const navigate = useNavigate();

    // console.log(recipes)

    return (
        <div className='row d-flex menu'>
            {recipes?.map(({ recipe }) => (
                <div className="col-md-3 m-1">
                    <Card style={{ borderRadius: '15px', width: '300px', height: '36rem' }}>
                        <Card.Img style={{ borderRadius: '15px 15px 0 0' }} variant="" src={recipe.image} />
                        <Card.Body>
                            <Card.Title className='capitalize'><h5>{recipe.label}</h5></Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='capitalize'>{recipe.cuisineType} cuisine</ListGroup.Item>
                            <ListGroup.Item className='capitalize'>{recipe.dishType}</ListGroup.Item>
                            <ListGroup.Item className='capitalize'>{Math.round(recipe.calories)} calories</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Save Recipe</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default Results