import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../firebase';


const Recipe = ({ recipe, user }) => {
    const { state } = useLocation();
    const navigate = useNavigate();
    // const userId = user?.uid;
    const [rcp, setRcp] = useState('');
    const apetitesCollectionRef = collection(db, 'apetites');
    // const { label, img } = rcp

    const createRecipe = async (e) => {
        e.preventDefault();
        if (auth.currentUser) {
            await addDoc(apetitesCollectionRef, {
                recipe: {
                    image: state.image,
                    label: state.label,
                    cuisineType: state.cuisineType,
                    calories: state.calories,
                },
                user: {
                    name: auth.currentUser.displayName,
                    id: auth.currentUser.uid
                },
            });
            navigate('/myrecipes', { replace: true });
        } else {
            alert('You need to be logged in to create a recipe');
        }
    };

    return (
        <>
            <form className='recipe-page' onSubmit={createRecipe}>
                <ul className='d-flex'>
                    <li className='d-block col' style={{ 'width': '500px' }}>
                        <div><img src={state.image} alt="" /></div>
                        <div>
                            <h4>{state.label}</h4>
                        </div>
                        <p>Cuisine: {state.cuisineType}</p>
                        <p>Total Calories: {Math.round(state.calories)}</p>
                        <button type='submit'>Save to MyRecipes</button>
                    </li>
                </ul>
            </form >
        </>
    );
};

export default Recipe