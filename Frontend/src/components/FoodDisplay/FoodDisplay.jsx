import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [filterList, setFilterList] = useState('');

  const onChangeHandler = (e) => {
    setFilterList(e.target.value.toLowerCase());
  };

  const filteredFoods = food_list.filter((item) => {
    const isInCategory = category === 'All' || category === item.category.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(filterList);
    return isInCategory && matchesSearch;
  });

  return (
    <div className='food-display' id='food-display'>
      <div className='head'>
        <h2>Top Dishes Near You</h2>
        <input
          className='search-food' id='search-bar'
          type="text"
          placeholder='Search for a food'
          onChange={onChangeHandler}
        />
      </div>
      <div className="food-display-list">
        {filteredFoods.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
