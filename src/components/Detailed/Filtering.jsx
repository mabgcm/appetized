import React, { useState } from 'react';
import { FormCheck, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Results from './Results';
import Collapse from 'react-bootstrap/Collapse';

const Filtering = ({ setQuery, setSelectedMeal, setHealthy, health, mealType, getData }) => {

    const [open, setOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        getData();
    };

    return (
        <>
            <Form>
                <h5>Ingredient:</h5>
                <InputGroup style={{ 'width': '85%' }} className='border filter-search' >
                    <Form.Control
                        type='text'
                        className='border'
                        style={{ 'height': '35px' }}
                        placeholder='Search ingredient'
                        onChange={(e) => setQuery(e.target.value)} />
                    <button className='btn filter-search-btn' size='sm' style={{ 'height': '35px', 'marginRight': '1px', 'marginTop': '2px' }} onClick={handleSubmit}>Search</button>
                </InputGroup>

                <div className='mt-3 inpt-group'>
                    <div className='col-12'><h5>Meal Type:</h5></div>
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <div
                                name="mealType"
                                id='mealType'
                                onChange={(e) => setSelectedMeal(e.target.value)}>
                                {mealType.map((meal, index) => (
                                    <Form.Check
                                        key={index}
                                        value={meal.toLowerCase()}
                                        type={type}
                                        label={meal.charAt(0).toUpperCase()
                                            + meal.slice(1)} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-3 inpt-group'>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls='health'
                        aria-expanded={open}>Health Choice</Button>

                    <Collapse in={open}>
                        <div
                            name="healthy"
                            id='healthy'
                            onChange={(e) => setHealthy(e.target.value)}>
                            {health.map((food, index) => (
                                <Form.Check
                                    key={index}
                                    value={food.toLowerCase()}
                                    label={food.charAt(0).toUpperCase()
                                        + food.slice(1)} />
                            ))}
                        </div>
                    </Collapse>

                    {/* <div className='col-12'><h5>Meal Type:</h5></div>
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <div
                                name="healthy"
                                id='healthy'
                                onChange={(e) => setHealthy(e.target.value)}>
                                {health.map((food, index) => (
                                    <Form.Check
                                        key={index}
                                        value={food.toLowerCase()}
                                        type={type}
                                        label={food.charAt(0).toUpperCase()
                                            + food.slice(1)} />
                                ))}
                            </div>
                        </div>
                    ))} */}
                </div>

            </Form >
            <Results />
        </>
    )
}

export default Filtering