import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; // Import the firebase instance
import { useNavigate } from "react-router-dom";



const Myrecipe = () => {
    const [data, setData] = useState([]); // State to hold the fetched data
    const dataCollectionRef = collection(db, 'apetites'); // Reference to the Firestore collection
    const [mounted, setMounted] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        if (mounted) {
            const fetchData = async () => {
                const querySnapshot = await getDocs(dataCollectionRef);
                const data = querySnapshot.docs
                    .filter(doc => doc.data().user.id === auth.currentUser.uid)
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                console.log(data)
                setData(data);
            };
            fetchData();
            console.log(fetchData())
        }
        return () => {
            setMounted(false);
        }
    }, [mounted, dataCollectionRef]);

    // create a function which takes in the recipe and navigate to the recipe component and passing the recipe data as prop
    const handleClick = (id) => {
        navigate(`/therecipe/${id}`)
    }

    return (
        <>
            {data.map((item) => {
                return (
                    <div className='mb-5 pb-5' key={item.id}>
                        <p className='mt-5 pt-5'>{item.recipe.label}</p>
                        <p >{item.user.name}</p>
                        <button onClick={() => handleClick(item.id)}>Customise</button>
                    </div>
                )
            })}
        </>
    );
};

export default Myrecipe;
