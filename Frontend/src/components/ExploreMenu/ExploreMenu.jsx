import React, { useContext } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const ExploreMenu = ({category,setCategory}) => {

  const{url}=useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>explore our menu</h1>
      <p className='explore-menu-text'>Join us and embark on a delicious journey!</p>
      <div className='explore-menu-list'>
                                                  
      {menu_list.map((item,index)=>{
        return (
           <div  key={index} onClick={()=>setCategory(prev=>prev===item.menu_name.toLowerCase()?"All":item.menu_name.toLowerCase())}    className='explore-menu-list-item'> 
          <img className={category===item.menu_name.toLowerCase()?"active":""} src={item.menu_image} alt="" />
          <p>{item.menu_name}</p>
         

          </div>


        )
      })}


      </div>

      <hr />


    </div>
  )
}

export default ExploreMenu
