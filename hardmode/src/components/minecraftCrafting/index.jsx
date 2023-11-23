import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import {importCraftingRecipies} from './functions.jsx'
import {Tools} from './tools.js'
import {Basic} from './basic.jsx'
import {Blocks} from './blocks.js'
import {Other} from './other.js'
import {Defense} from './defense.js'
import {Brewing} from './brewing.js';
import { Food } from './food.js';
import {Mechanism} from './mechanism.js';
import { Dyes } from './dyes.js';
import { Wool } from './wool.js';

// @ts-ignore
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

function MinecraftCrafting(){

    function NavBar(){
        return(   
            <div>
                <h1 className='mainHeader'>Minecraft Crafting Recipies</h1>
                <div className="craftingBGColor"> 
                    <img className='emptyCraftingTable' src={craftingImages['craft_empty.png']} alt='Minecraft Crafting Table'/>
                </div>
            </div>
        )
    }
    
    function RenderComponents(){
        const [category, setCategory] = useState('');
        
        function RenderCategory(){
            switch(category){
                case 'tools' : 
                    return <Tools />;
                case 'blocks' : 
                    return <Blocks />;
                case 'other' :
                    return <Other />;
                case 'defense' :
                    return <Defense />;
                case 'brewing' :
                    return <Brewing />;
                case 'food' :
                    return <Food />;
                case 'mechanism' :
                        return <Mechanism />;
                case 'dyes' :
                        return <Dyes />;
                case 'wool' :
                            return <Wool />;
                default: 
                    return <Basic />;
            }
          }

        return(
            <main >
                <nav className='buttons'>
                    <button className='pointerCursor header' onClick={() => setCategory('basic')}> Basic | </button>
                    <button className='pointerCursor header' onClick={() => setCategory('tools')}> Tools | </button>
                    <button className='pointerCursor header' onClick={() => setCategory('blocks')}> Blocks | </button>
                    <button className='pointerCursor header' onClick={() => setCategory('other')}> Other | </button>
                    <button className='pointerCursor header' onClick={() => setCategory('defense')}> Defense | </button>
                    <button className='pointerCursor header' onClick={() => setCategory('brewing')}> Brewing | </button>
                    <button className='pointerCursor header' onClick={() => setCategory('food')}> Food | </button>
                    <button className='pointerCursor header' onClick={() => setCategory('mechanism')}> Mechanism | </button>
                    <button className='pointerCursor header' onClick={() => setCategory('dyes')}> Dyes | </button>
                    <button className='pointerCursor header' onClick={() => setCategory('wool')}>Wool</button>
                </nav>
                <div>
                    <RenderCategory>
                        {
                        (category === 'basic') ? <Basic /> : null}
                        {
                        (category === 'tools') ? <Tools /> : null}
                        {
                        (category === 'blocks') ? <Blocks /> : null}
                        {
                        (category === 'other') ? <Other /> : null}
                        {
                        (category === 'defense') ? <Defense /> : null}
                        {
                        (category === 'brewing') ? <Brewing /> : null}
                        {
                        (category === 'mechanism') ? <Mechanism /> : null}
                        {
                        (category === 'dyes') ? <Dyes /> : null}
                        {
                        (category === 'wool') ? <Dyes /> : null}
                    </RenderCategory>
                </div>
            </main>
        )

    }



    return(
        <div className='background'>
            <style>@import url('http://fonts.cdnfonts.com/css/minecraft-4');</style>
            <NavBar/>
            <RenderComponents />
        </div>
    )
}

export default MinecraftCrafting;