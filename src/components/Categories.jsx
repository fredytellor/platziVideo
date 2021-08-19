import React from "react";
import "../assets/styles/components/Categories.scss"

const Categories = ({children}) => (
    <div className="categories__title">
        <h3>Mi lista</h3>
        {children}
    </div>
);

export default Categories;