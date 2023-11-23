import {importBlocks, importCraftingRecipies} from './functions.js'
import React, {useState} from 'react';
const blockImages = importBlocks(require.context('./assets/textures/block', false, /\.(png|jpe?g|svg)$/));
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

export const Wool = (r) => {
    const [wool, setWool] = useState('');

    function RenderWool(){
        return <img className='centerCraftingTableWool' src={craftingImages[wool]} alt=''></img>
      }
    return(
    <div className='centerItemsWool craftingBGColor'> {/*Wool*/} 
        <button className='itemSlot pointerCursor'><img src={blockImages['light_gray_wool.png']} onClick={() => setWool('craft_lightgraywool.png')} alt='Light Gray Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['pink_wool.png']} onClick={() => setWool('craft_pinkwool.png')} alt='Pink Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['lime_wool.png']} onClick={() => setWool('craft_limewool.png')} alt='Lime Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['red_wool.png']} onClick={() => setWool('craft_redwool.png')} alt='Red Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['green_wool.png']} onClick={() => setWool('craft_greenwool.png')} alt='Green Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['black_wool.png']} onClick={() => setWool('craft_blackwool.png')} alt='Black Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['purple_wool.png']} onClick={() => setWool('craft_purplewool.png')} alt='Purple Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['blue_wool.png']} onClick={() => setWool('craft_bluewool.png')} alt='Blue Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['orange_wool.png']} onClick={() => setWool('craft_orangewool.png')} alt='Orange Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['brown_wool.png']} onClick={() => setWool('craft_brownwool.png')} alt='Brown Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['yellow_wool.png']} onClick={() => setWool('craft_yellowwool.png')} alt='Yellow Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['cyan_wool.png']} onClick={() => setWool('craft_cyanwool.png')} alt='Cyan Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['light_blue_wool.png']} onClick={() => setWool('craft_lightbluewool.png')} alt='Light Blue Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['magenta_wool.png']} onClick={() => setWool('craft_lightbluewool.png')} alt='Magenta Wool' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['gray_wool.png']} onClick={() => setWool('craft_graywool.png')} alt='Gray Wool' /></button>
        <RenderWool>
        </RenderWool>

    </div>
    )
}