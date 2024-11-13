'use client'
import React from "react";
import { useState, useEffect } from "react";

const fetchMealIdeas = async(ingredient) => {
    try{
        const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)

        const data = await response.json()
        return data.Meals || [];
    } catch(error){
        console.error("Error Fetching Meal Idea", error.Message);
        return[];
    }
};

export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    },[ingredient]);

    return(
        <main>
            <h1>
                Meal ideas
            </h1>
            <h2>
                Here are some meal ideas using {ingredient}:
            </h2>
            <ul>
                {meals.map((meals) => (
                    <li key={meals.idMeal}>
                        {meals.strMeal}
                    </li>
                ))}
            </ul>
        </main>
    )
};
