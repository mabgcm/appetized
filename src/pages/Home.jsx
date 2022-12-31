import React, { useState } from 'react';
import hero from '../assets/img/hero.png';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Cards from '../components/Cards';
import Numbers from '../components/Numbers';
import { Link } from 'react-router-dom';

const Home = () => {

    const mealType = ['breakfast', 'lunch', 'dinner', 'snack', 'teatime'];
    const [query, setQuery] = useState('');
    // const [selectedMeal, setSelectedMeal] = useState(mealType);
    const [recipes, setRecipes] = useState(null);

    const APP_ID = '382c2e2f';
    const APP_KEY = '2094d192ed1aab3ec3e09751a58787e3';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

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

    const handleSubmit = (e) => {
        e.preventDefault();
        getData();
    };

    return (
        <div>
            <section id="hero" className="hero d-flex align-items-center section-bg">
                <div className="container">
                    <div className="row justify-content-between gy-5">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <h2 data-aos="fade-up">Enjoy Your Healthy Delicious Food</h2>
                            <p data-aos="fade-up" data-aos-delay="100">Mouth watering, finger licking, tongue dancing, time saving healthy food from all over the world!</p>
                            <Form className="form-search d-flex align-items-center mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Type any ingredient"
                                    onChange={(e) => setQuery(e.target.value)} />
                                <button type="submit" className="btn btn-danger" onClick={handleSubmit}>Search</button>
                            </Form>
                            <Link to='detail' className='detailed-search mx-auto'>detailed search</Link>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                            <img src={hero} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
                        </div>
                    </div>
                    <Numbers />
                </div>
            </section>
            {recipes?.length > 0 && <Cards recipes={recipes} />}
        </div>
    )
}

export default Home