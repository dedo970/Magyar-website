import {importBlocks, importItems, importCraftingRecipies} from './functions.js'
import React, {useState} from 'react';
const blockImages = importBlocks(require.context('./assets/textures/block', false, /\.(png|jpe?g|svg)$/));
const itemImages = importItems(require.context('./assets/textures/item', false, /\.(png|jpe?g|svg)$/));
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

export const Basic = (r) => {
    const [basic, setBasic] = useState('');
        
    function RenderBasic(){
        return <img className='centerCraftingTableBasic' src={craftingImages[basic]} alt=''></img>
      }
        return(
                <div className='centerItemsBasic craftingBGColor'> {/*Basic Blocks*/} 
                    <button className='itemSlot pointerCursor'><img src={blockImages['oak_planks.png']} onClick={() => setBasic('craft_planks.gif')} alt='Wooden Planks' /></button>
                    <button className='itemSlot pointerCursor'><img src={itemImages['stick.png']} onClick={() => setBasic('craft_stick.png')} alt='Stick' /></button>
                    <button className='itemSlot pointerCursor'><img src={blockImages['torch.png']} onClick={() => setBasic('craft_torch.png')} alt='Torch' /></button>
                    <button className='itemSlot pointerCursor'><img src={blockImages['crafting_table_front.png']} onClick={() => setBasic('craft_workbench.png')} alt='Crafting Table' /></button>
                    <button className='itemSlot pointerCursor'><img src={itemImages['chest.png']} onClick={() => setBasic('craft_chest.png')} alt='Chest' /></button>
                    <button className='itemSlot pointerCursor'><img src={blockImages['furnace_front.png']} onClick={() => setBasic('craft_furnace.gif')} alt='Furnace' /></button>
                    <button className='itemSlot pointerCursor'><img src={blockImages['ladder.png']} onClick={() => setBasic('craft_ladder.png')} alt='Ladder' /></button>
                    <button className='itemSlot pointerCursor'><img src={blockImages['fence.png']} onClick={() => setBasic('craft_fence.gif')} alt='Fence' /></button>
                    <button className='itemSlot pointerCursor'><img src={itemImages['oak_boat.png']} onClick={() => setBasic('craft_boat.png')} alt='Boat' /></button>
                    <button className='itemSlot pointerCursor'><img src={blockImages['oak_slab.png']} onClick={() => setBasic('craft_woodenslabs.gif')} alt='Wooden Slab' /></button>
                    <button className='itemSlot pointerCursor'><img src={blockImages['smooth_stone_slab.png']} onClick={() => setBasic('craft_stoneslabs.gif')} alt='Stone Slab' /></button>
                    <button className='itemSlot pointerCursor'><img src={itemImages['oak_sign.png']} onClick={() => setBasic('craft_sign.png')} alt='Sign' /></button>
                    <button className='itemSlot pointerCursor'><img src={itemImages['oak_door.png']} onClick={() => setBasic('craft_doors.gif')} alt='Door' /></button>
                    <button className='itemSlot pointerCursor'><img src={itemImages['painting.png']} onClick={() => setBasic('craft_painting.png')} alt='Painting' /></button>
                    <button className='itemSlot pointerCursor'><img src={itemImages['bed.png']} onClick={() => setBasic('craft_bed.png')} alt='Bed' /></button>
                    <button className='itemSlot pointerCursor'><img src={blockImages['oak_log.png']} onClick={() => setBasic('craft_wood.png')} alt='Log' /></button>
                    <RenderBasic>
                    </RenderBasic>
            </div>
        )
}