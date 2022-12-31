import React, { useState } from 'react';
import axios from 'axios';
import { InputGroup } from 'react-bootstrap';
import Filtering from './Filtering';
import Results from './Results';
import { Form } from 'react-router-dom';

const Detail = () => {

    const mealType = ['breakfast', 'brunch', 'lunch', 'dinner', 'snack', 'teatime'];
    const health = ['alcohol-free', 'dairy-free', 'gluten-free', 'keto-friendly', 'kosher', 'no-oil-added', 'pork-free', 'vegan', 'vegetarian']
    const [query, setQuery] = useState('');
    const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
    const [healthy, setHealthy] = useState(health[5])
    const [recipes, setRecipes] = useState(null);

    const APP_ID = '382c2e2f';
    const APP_KEY = '2094d192ed1aab3ec3e09751a58787e3';
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthy}&mealType=${selectedMeal}`;

    const getData = async () => {
        if (query) {
            try {
                const { data } = await axios.get(url);
                setRecipes(data.hits);
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Please Enter your meal');
        }
    };



    return (
        <div className='row filtering'>
            <div className="col-md-12 m-auto text-center title-head">
                <h5>Headline Comes Here</h5>
            </div>

            <div className="col-md-3 filter-head">

                <Filtering
                    setQuery={setQuery}
                    setSelectedMeal={setSelectedMeal}
                    setHealthy={setHealthy}
                    health={health}
                    mealType={mealType}
                    getData={getData}
                />
            </div>
            <div className="col-md-9 filter-head">
                {recipes?.length > 0 && <Results recipes={recipes} />}
            </div>
        </div>
    )
}

export default Detail