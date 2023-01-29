import React, { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase';

const Myrecipes = () => {
    const [recipesList, setRecipesList] = useState([]);
    const apetitesCollectionRef = collection(db, 'apetites');

    // useEffect(() => {
    //     if (auth.currentUser) {
    //         getDocs(apetitesCollectionRef)
    //             .then((snapshot) => {
    //                 let recs = [];
    //                 snapshot.forEach((doc) => {
    //                     recs.push({ id: doc.id, ...doc.data() });
    //                 });
    //                 setRecipesList(recs);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }
    // }, []);


    useEffect(() => {
        if (auth.currentUser) {
            const unsubscribe = onSnapshot(apetitesCollectionRef, (snapshot) => {
                const recipes = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setRecipesList(recipes);
            });

            return () => unsubscribe();
        }
    });

    return (
        <>
            {recipesList.map((recipe) => {
                return (
                    <div className='mb-5 p-5' key={recipe.id}>
                        <div className='mt-5'>
                            {recipe.recipe.label && <h1 className='mb-5'>{recipe.recipe.label}</h1>}
                        </div>
                    </div>
                )
            })
            }
        </>
    );
};

export default Myrecipes;
