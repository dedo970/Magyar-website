import {importBlocks, importItems, importCraftingRecipies} from './functions.jsx'
import React, {useState} from 'react';
const blockImages = importBlocks(require.context('./assets/textures/block', false, /\.(png|jpe?g|svg)$/));
const itemImages = importItems(require.context('./assets/textures/item', false, /\.(png|jpe?g|svg)$/));
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

export const Mechanism = (r) => {
    const [mechanism, setMechanism] = useState('');

        function RenderMechanism(){
            return <img className='centerCraftingTableMechanism' src={craftingImages[mechanism]} alt=''></img>
          }


    return(
    <div className='centerItemsMechanism craftingBGColor'> {/*Mechanism*/} 
        <button className='itemSlot pointerCursor'><img src={blockImages['wooden_pressure_plate.png']} onClick={() => setMechanism('craft_pressureplates.gif')} alt='Wooden Pressure Plate' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['weighted_pressure_plate.png']} onClick={() => setMechanism('craft_weightedpressureplates.gif')} alt='Weighted Pressure Plate' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['lever.png']} onClick={() => setMechanism('craft_lever.png')} alt='Lever' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['button.png']} onClick={() => setMechanism('craft_buttons.gif')} alt='Button' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['trapdoor.png']} onClick={() => setMechanism('craft_trapdoor.png')} alt='Trapdoor' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['piston_side.png']} onClick={() => setMechanism('craft_piston.png')} alt='Piston' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['piston_side.png']} onClick={() => setMechanism('craft_stickypiston.png')} alt='Sticky Piston' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['fence_gate.png']} onClick={() => setMechanism('craft_fencegate.gif')} alt='Fence Gate' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['repeater.png']} onClick={() => setMechanism('craft_redstonerepeater.png')} alt='Redstone Repeater' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['dispenser_front.png']} onClick={() => setMechanism('craft_dispenser.png')} alt='Dispenser' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['jukebox_side.png']} onClick={() => setMechanism('craft_jukebox.png')} alt='Jukebox' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['minecart.png']} onClick={() => setMechanism('craft_minecart.png')} alt='Minecart' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['powered_minecart.png']} onClick={() => setMechanism('craft_poweredminecart.png')} alt='Powered Minecart' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['storage_minecart.png']} onClick={() => setMechanism('craft_storageminecart.png')} alt='Storage Minecart' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['rail.png']} onClick={() => setMechanism('craft_track.png')} alt='Rail' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['powered_rail.png']} onClick={() => setMechanism('craft_poweredrail.png')} alt='Powered Rail' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['detector_rail.png']} onClick={() => setMechanism('craft_detectorrail.png')} alt='Detector Rail' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['activator_rail.png']} onClick={() => setMechanism('craft_activatorrail.png')} alt='Activator Rail' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['redstone_torch.png']} onClick={() => setMechanism('craft_redstonetorch.png')} alt='Redstone Torch' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['redstone_lamp.png']} onClick={() => setMechanism('craft_redstonelamp.png')} alt='Redstone Lamp' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['tripwire_hook.png']} onClick={() => setMechanism('craft_tripwirehook.png')} alt='Tripwire Hook' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['daylight_detector_top.png']} onClick={() => setMechanism('craft_daylightsensor.png')} alt='Daylight Sensor' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['dropper_front.png']} onClick={() => setMechanism('craft_dropper.png')} alt='Dropper' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['hopper.png']} onClick={() => setMechanism('craft_hopper.png')} alt='Hopper' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['minecart_with_hopper.png']} onClick={() => setMechanism('craft_minecartwithhopper.png')} alt='Minecart with Hopper' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['minecart_with_tnt.png']} onClick={() => setMechanism('craft_minecartwithtnt.png')} alt='Minecart with TNT' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['comparator.png']} onClick={() => setMechanism('craft_redstonecomparator.png')} alt='Redstone Comparator' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['chest.png']} onClick={() => setMechanism('craft_trappedchest.png')} alt='Trapped Chest' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['iron_trapdoor.png']} onClick={() => setMechanism('craft_irontrapdoor.png')} alt='Iron Trapdoor' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['observer_front.png']} onClick={() => setMechanism('craft_observer.png')} alt='Observer' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['target_side.png']} onClick={() => setMechanism('craft_target.png')} alt='Target' /></button>
        <RenderMechanism>
        </RenderMechanism>
    </div>
    )
}