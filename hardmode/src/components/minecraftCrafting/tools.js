import {importBlocks, importItems, importCraftingRecipies} from './functions.jsx'
import React, {useState} from 'react';
const blockImages = importBlocks(require.context('./assets/textures/block', false, /\.(png|jpe?g|svg)$/));
const itemImages = importItems(require.context('./assets/textures/item', false, /\.(png|jpe?g|svg)$/));
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

export const Tools = (r) => {
    const [tool, setTool] = useState('');
        
        function RenderTools(){
            return <img className='centerCraftingTableTools' src={craftingImages[tool]} alt=''></img>
          }


    return(
    <div className='centerItemsTools craftingBGColor'> {/*Tools*/} 
        <button className='itemSlot pointerCursor'><img src={itemImages['diamond_pickaxe.png']} onClick={() => setTool('craft_pickaxes.gif')} alt='Pickaxe' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['diamond_shovel.png']} onClick={() => setTool('craft_shovels.gif')} alt='Shovel' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['diamond_axe.png']} onClick={() => setTool('craft_axes.gif')} alt='Axe' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['fishing_rod.png']} onClick={() => setTool('craft_fishingrod.png')} alt='Fishing Rod' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['flint_and_steel.png']} onClick={() => setTool('craft_flintandsteel.png')} alt='Flint and Steel' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['shears.png']} onClick={() => setTool('craft_shears.png')} alt='Shears' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['bucket.png']} onClick={() => setTool('craft_bucket.png')} alt='Bucket' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['clock_00.png']} onClick={() => setTool('craft_clock.png')} alt='Clock' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['compass_18.png']} onClick={() => setTool('craft_compass.png')} alt='Compass' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['map.png']} onClick={() => setTool('craft_map.png')} alt='Map' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['shulker_box.png']} onClick={() => setTool('craft_shulkerbox.png')} alt='Shulker Box' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['spyglass.png']} onClick={() => setTool('craft_spyglass.png')} alt='Spyglass' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['recovery_compass_18.png']} onClick={() => setTool('craft_recoverycompass.png')} alt='Recovery Compass' /></button>
        <RenderTools>
        </RenderTools>
    </div>
    )
}