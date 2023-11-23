import {importItems, importCraftingRecipies} from './functions.jsx'
import React, {useState} from 'react';
const itemImages = importItems(require.context('./assets/textures/item', false, /\.(png|jpe?g|svg)$/));
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

export const Dyes = (r) => {
    const [dyes, setDyes] = useState('');

    function RenderDyes(){
        return <img className='centerCraftingTableDyes' src={craftingImages[dyes]} alt=''></img>
      }
    return(
    <div className='centerItemsDyes craftingBGColor'> {/*Dyes*/} 
        <button className='itemSlot pointerCursor'><img src={itemImages['red_dye.png']} onClick={() => setDyes('craft_reddye.gif')} alt='Red Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['yellow_dye.png']} onClick={() => setDyes('craft_yellowdye.gif')} alt='Yellow Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['cyan_dye.png']} onClick={() => setDyes('craft_cyandye.png')} alt='Cyan Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['pink_dye.png']} onClick={() => setDyes('craft_pinkdye.gif')} alt='Pink Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['purple_dye.png']} onClick={() => setDyes('craft_purpledye.png')} alt='Purple Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['magenta_dye.png']} onClick={() => setDyes('craft_magentadye.gif')} alt='Magenta Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['lime_dye.png']} onClick={() => setDyes('craft_limedye.png')} alt='Lime Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['light_blue_dye.png']} onClick={() => setDyes('craft_lightbluedye.gif')} alt='Light Blue Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['orange_dye.png']} onClick={() => setDyes('craft_orangedye.gif')} alt='Orange Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['light_gray_dye.png']} onClick={() => setDyes('craft_lightgraydye.gif')} alt='Light Gray Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['gray_dye.png']} onClick={() => setDyes('craft_graydye.png')} alt='Gray Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['bone_meal.png']} onClick={() => setDyes('craft_bonemeal.png')} alt='Bone Meal' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['white_dye.png']} onClick={() => setDyes('craft_whitedye.gif')} alt='White Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['blue_dye.png']} onClick={() => setDyes('craft_bluedye.gif')} alt='Blue Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['brown_dye.png']} onClick={() => setDyes('craft_browndye.png')} alt='Brown Dye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['black_dye.png']} onClick={() => setDyes('craft_blackdye.gif')} alt='Black Dye' /></button>
        <RenderDyes>
        </RenderDyes>

    </div>
    )
}