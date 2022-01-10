import React from "react";
import { Link } from "react-router-dom";
const Menu = ({ item }) => {
    return (
        <div>
            <ul>
                {
                    item.map((category) => {
                        return (
                            <li className="menu-item"><Link to={`/category-${category._id}`}>{category.title}</Link></li>
                        )
                    })
                }
            </ul>
            </div>
    )
}
export default Menu;