import React from 'react'

const Numbers = () => {
    return (
        <div className="row gy-4">

            <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                    <span className="purecounter">2.3M</span>
                    <p>RECIPES</p>
                </div>
            </div>

            <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                    <span className="purecounter">900K</span>
                    <p>FOOD ITEMS</p>
                </div>
            </div>

            <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                    <span className="purecounter">40+</span>
                    <p>DIETS/ALLERGENS</p>
                </div>
            </div>

            <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                    <span className="purecounter">150+</span>
                    <p>NUTRIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default Numbers