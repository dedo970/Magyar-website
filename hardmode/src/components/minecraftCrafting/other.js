import {importBlocks, importItems, importCraftingRecipies} from './functions.jsx'
import React, {useState} from 'react';
const blockImages = importBlocks(require.context('./assets/textures/block', false, /\.(png|jpe?g|svg)$/));
const itemImages = importItems(require.context('./assets/textures/item', false, /\.(png|jpe?g|svg)$/));
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

export const Other = (r) => {
    const [other, setOther] = useState('');

        function RenderOther(){
            return <img className='centerCraftingTableOther' src={craftingImages[other]} alt=''></img>
          }
  
    return(
    <div className='centerItemsOther craftingBGColor'> {/*Other*/}
        <button className='itemSlot pointerCursor'><img src={itemImages['paper.png']} onClick={() => setOther('craft_paper.png')} alt='Paper' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['book.png']} onClick={() => setOther('craft_book.png')} alt='Book' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['writable_book.png']} onClick={() => setOther('craft_bookandquill.png')} alt='Book and Quill' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['iron_bars.png']} onClick={() => setOther('craft_ironbars.png')} alt='Iron Bars' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['nether_brick_fence.png']} onClick={() => setOther('craft_netherbrickfence.png')} alt='Nether Brick Fence' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['gold_ingot.png']} onClick={() => setOther('craft_goldingot.png')} alt='Gold Ingot' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['ender_eye.png']} onClick={() => setOther('craft_eyeofender.png')} alt='Eye of Ender' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['enchanting_table_side.png']} onClick={() => setOther('craft_enchantmenttable.png')} alt='Enchanting Table' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['fire_charge.png']} onClick={() => setOther('craft_firecharge.png')} alt='Fire Charge' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['ender_chest.png']} onClick={() => setOther('craft_enderchest.png')} alt='Ender Chest' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['beacon.png']} onClick={() => setOther('craft_beacon.png')} alt='Beacon' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['anvil_side.png']} onClick={() => setOther('craft_anvil.png')} alt='Anvil' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['flower_pot.png']} onClick={() => setOther('craft_flowerpot.png')} alt='Flower Pot' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['item_frame.png']} onClick={() => setOther('craft_itemframe.png')} alt='Item Frame' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['carrot_on_a_stick.png']} onClick={() => setOther('craft_carrotonastick.png')} alt='Carrot on a Stick' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['warped_fungus_on_a_stick.png']} onClick={() => setOther('craft_warpedfungusonastick.png')} alt='Warped Fungus on a Stick' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['firework_rocket.png']} onClick={() => setOther('craft_fireworkrocket.gif')} alt='Firework Rocket' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['firework_star.png']} onClick={() => setOther('craft_fireworkstar.gif')} alt='Firework Star' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['lead.png']} onClick={() => setOther('craft_lead.png')} alt='Lead' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['carpet.png']} onClick={() => setOther('craft_carpets.gif')} alt='Carpet' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['glass.png']} onClick={() => setOther('craft_glasspanes.gif')} alt='Glass' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['leather.png']} onClick={() => setOther('craft_leather.png')} alt='Leather' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['banner.png']} onClick={() => setOther('craft_banner.png')} alt='Banner' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['armor_stand.png']} onClick={() => setOther('craft_armorstand.png')} alt='Armor Stand' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['end_rod.png']} onClick={() => setOther('craft_endrod.png')} alt='End Rod' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['end_crystal.png']} onClick={() => setOther('craft_endcrystal.png')} alt='End Crystal' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['iron_nugget.png']} onClick={() => setOther('craft_ironnugget.png')} alt='Iron Nugget' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['white_concrete_powder.png']} onClick={() => setOther('craft_concretepowder.png')} alt='White Concrete Powder' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['campfire.png']} onClick={() => setOther('craft_campfire.png')} alt='Campfire' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['soul_campfire.png']} onClick={() => setOther('craft_soulcampfire.gif')} alt='Soul Campfire' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['scaffolding_side.png']} onClick={() => setOther('craft_scaffolding.png')} alt='Scaffolding' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['barrel_side.png']} onClick={() => setOther('craft_barrel.png')} alt='Barrel' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['blast_furnace_front.png']} onClick={() => setOther('craft_blastfurnace.png')} alt='Blast Furnace' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['smoker_front.png']} onClick={() => setOther('craft_smoker.png')} alt='Smoker' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['cartography_table_side2.png']} onClick={() => setOther('craft_cartographytable.png')} alt='Cartography Table' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['composter_side.png']} onClick={() => setOther('craft_composter.png')} alt='Composter' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['fletching_table_front.png']} onClick={() => setOther('craft_fletchingtable.png')} alt='Fletching Table' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['smithing_table_front.png']} onClick={() => setOther('craft_smithingtable.png')} alt='Smithing Table' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['stonecutter_side.png']} onClick={() => setOther('craft_stonecutter.png')} alt='Stonecutter' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['grindstone.png']} onClick={() => setOther('craft_grindstone.png')} alt='Grindstone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['lantern.png']} onClick={() => setOther('craft_lanterns.gif')} alt='Lantern' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['lectern.png']} onClick={() => setOther('craft_lectern.png')} alt='Lectern' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['loom_front.png']} onClick={() => setOther('craft_loom.png')} alt='Loom' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['beehive_front_honey.png']} onClick={() => setOther('craft_beehive.png')} alt='Beehive' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['chain.png']} onClick={() => setOther('craft_chain.png')} alt='Chain' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['netherite_ingot.png']} onClick={() => setOther('craft_netheriteingot.png')} alt='Netherite Ingot' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['soul_torch.png']} onClick={() => setOther('craft_soultorch.gif')} alt='Soul Torch' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['respawn_anchor_side0.png']} onClick={() => setOther('craft_respawnanchor.png')} alt='Respawn Anchor' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['lodestone_side.png']} onClick={() => setOther('craft_lodestone.png')} alt='Lodestone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['candle.png']} onClick={() => setOther('craft_candle.png')} alt='Candle' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['white_candle.png']} onClick={() => setOther('craft_dyedcandle.gif')} alt='Dyed Candle' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['glow_item_frame.png']} onClick={() => setOther('craft_glowitemframe.png')} alt='Glow Item Frame' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['lightning_rod.png']} onClick={() => setOther('craft_lightningrod.png')} alt='Lightning Rod' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['moss_carpet.png']} onClick={() => setOther('craft_mosscarpet.png')} alt='Moss Carpet' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['tinted_glass.png']} onClick={() => setOther('craft_tintedglass.png')} alt='Tinted Glass' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['music_disc_5.png']} onClick={() => setOther('craft_musicdisc5.png')} alt='Music Disc 5' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['oak_chest_boat.png']} onClick={() => setOther('craft_boatwithchest.png')} alt='Oak Chest Boat' /></button>
        <RenderOther>
        </RenderOther>
    </div>
    )
}