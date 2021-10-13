import React from 'react';
import ButtonNavbar from '../Components/ButtonNavBar';
import UpperNavbar from '../Components/UpperNavbar';
import MainDishCard from '../Components/MainDishCard';
import ItemList from '../ItemList';

export default function HomePage(){
    return (
        <div>
            <div className="itemList"></div>
           
            <UpperNavbar></UpperNavbar>
            <MainDishCard></MainDishCard>
            <ItemList></ItemList>
            <ButtonNavbar></ButtonNavbar>
        </div>
    )
}