import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = ({ recipes }) => {

    const navigate = useNavigate();
    // console.log(recipes)
    return (
        <section id='menu' className='menu'>
            <div className='container'>
                <div className="section-header">
                    {/* <h4>Our Recipes</h4> */}
                    <p>Check Our <span>Yummy recipe</span></p>
                </div>
                <div className="row gy-5">
                    {recipes.map(({ recipe }, index) => (
                        <div className="col-lg-4 menu-item mb-5" key={index}>
                            <img src={recipe.image} className="menu-img rounded img-fluid" alt="" />
                            <h4 className='text-center'>{recipe.label}</h4>
                            {/* <p className="ingredients"><strong>Mealtype: </strong>
                                {recipe.mealType[0]}
                            </p> */}
                            <p className="ingredients"><strong>Cuisine: </strong>
                                {recipe.cuisineType[0]}
                            </p>
                            {/* <p className="ingredients"><strong>Calories: </strong>
                                {Math.round(recipe.calories)}
                            </p> */}
                            <div className='detailbtn'>
                                <button className='btn btn-book-a-table'
                                    onClick={() =>
                                        navigate('recipe', { state: recipe, replace: false })
                                    }
                                >
                                    See Recipe
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards