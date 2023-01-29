import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'; // Import the firebase instance

const TheRecipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const dataCollectionRef = doc(db, 'apetites', id); // Reference to the Firestore collection
    const [mounted, setMounted] = useState(true);


    useEffect(() => {
        if (mounted) {
            const fetchData = async () => {
                try {
                    const doc = await getDoc(dataCollectionRef);
                    setRecipe(doc.data());
                } catch (error) {
                    console.log(error);
                }
            };
            fetchData();
        }
        return () => {
            setMounted(false);
        }
    }, [id, dataCollectionRef, mounted]);


    // console.log(recipe)

    return (
        <div className="deneme">
            <h1 className="capit">{recipe?.recipe?.label}</h1>
            <h4>Cuisine Type: <span className="capit">{recipe?.recipe?.cuisineType}</span></h4>
        </div>
    );
};

export default TheRecipe;
