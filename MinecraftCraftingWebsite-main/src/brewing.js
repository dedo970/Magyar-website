/*import {importBlocks, importItems, importCraftingRecipies} from './functions.js'*/
import {importItems, importCraftingRecipies} from './functions.js'
import React, {useState} from 'react';
/*const blockImages = importBlocks(require.context('./assets/textures/block', false, /\.(png|jpe?g|svg)$/));*/
const itemImages = importItems(require.context('./assets/textures/item', false, /\.(png|jpe?g|svg)$/));
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

/*fix*/

export const Brewing = (r) => {
    const [brewing, setBrewing] = useState('');

    function RenderBrewing(){
        return <img className='centerCraftingTableBrewing' src={craftingImages[brewing]} alt=''></img>
      }
  
    return(
        
    <div div className='centerItemsBrewing craftingBGColor'> {/*Brewing*/} 
        <button className='itemSlot pointerCursor'><img src={itemImages['glass_bottle.png']} onClick={() => setBrewing('craft_glassbottle.png')} alt='Glass Bottle' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['cauldron.png']} onClick={() => setBrewing('craft_cauldron.png')} alt='Cauldron' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['brewing_stand.png']} onClick={() => setBrewing('craft_brewingstand.png')} alt='Brewing Stand' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['glistering_melon_slice.png']} onClick={() => setBrewing('craft_glisteringmelon.png')} alt='Glistering Melon' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['blaze_powder.png']} onClick={() => setBrewing('craft_blazepowder.png')} alt='Blaze Powder' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['fermented_spider_eye.png']} onClick={() => setBrewing('craft_fermentedspidereye.png')} alt='Fermented Spider Eye' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['magma_cream.png']} onClick={() => setBrewing('craft_magmacream.png')} alt='Magma Cream' /></button>
        <RenderBrewing>
        </RenderBrewing>
    </div>
    )
}