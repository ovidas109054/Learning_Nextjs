import React from 'react';
import FoodCard from './Cards2';

const Homepage = async() => {

    const res = await fetch(' https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await  res.json();
    const foods = data.data;
    return (

       
        <div>
            <h1 className="text-red-600 font-bold text-2xl text-center mt-10 mb-10">Eat Healthy, Live Better</h1>
             
             <div className = 'grid grid-cols-3 gap-4'>
                 {
                    foods.map((food)=> <FoodCard key = {food.id} food={food}></FoodCard>)
                 }
             </div>
        </div>
    );
};

export default Homepage;