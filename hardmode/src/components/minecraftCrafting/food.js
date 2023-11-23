import {importBlocks, importItems, importCraftingRecipies} from './functions.jsx'
import React, {useState} from 'react';
const blockImages = importBlocks(require.context('./assets/textures/block', false, /\.(png|jpe?g|svg)$/));
const itemImages = importItems(require.context('./assets/textures/item', false, /\.(png|jpe?g|svg)$/));
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

export const Food = (r) => {
    const [food, setFood] = useState('');

    function RenderFood(){
        return <img className='centerCraftingTableFood' src={craftingImages[food]} alt=''></img>
      }
    return(
    <div className='centerItemsFood craftingBGColor'> {/*Food*/} 
        <button className='itemSlot pointerCursor'><img src={itemImages['cake.png']} onClick={() => setFood('craft_cake.png')} alt='Cake' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['bread.png']} onClick={() => setFood('craft_bread.png')} alt='Bread' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['cookie.png']} onClick={() => setFood('craft_cookie.png')} alt='Cookie' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['bowl.png']} onClick={() => setFood('craft_bowl.png')} alt='Bowl' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['mushroom_stew.png']} onClick={() => setFood('craft_mushroomstew.png')} alt='Mushroom Stew' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['golden_apple.png']} onClick={() => setFood('craft_goldenapple.png')} alt='Golden Apple' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['pumpkin_seeds.png']} onClick={() => setFood('craft_pumpkinseeds.png')} alt='Pumpkin Seeds' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['melon_seeds.png']} onClick={() => setFood('craft_melonseeds.png')} alt='Melon Seeds' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['melon_side.png']} onClick={() => setFood('craft_melonblock.png')} alt='Melon Block' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['sugar.png']} onClick={() => setFood('craft_sugar.png')} alt='Sugar' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['golden_carrot.png']} onClick={() => setFood('craft_goldencarrot.png')} alt='Golden Carrot' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['pumpkin_pie.png']} onClick={() => setFood('craft_pumpkinpie.png')} alt='Pumpkin Pie' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['rabbit_stew.png']} onClick={() => setFood('craft_rabbitstew.png')} alt='Rabbit Stew' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['suspicious_stew.png']} onClick={() => setFood('craft_suspiciousstew.png')} alt='Suspicious Stew' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['honey_bottle.png']} onClick={() => setFood('craft_honeybottle.png')} alt='Honey Bottle' /></button>
        <RenderFood>
        </RenderFood>

    </div>
    )
}