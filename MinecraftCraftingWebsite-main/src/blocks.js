/*import {importBlocks, importItems, importCraftingRecipies} from './functions.js'*/
import {importBlocks, importCraftingRecipies} from './functions.js'
import React, {useState} from 'react';
const blockImages = importBlocks(require.context('./assets/textures/block', false, /\.(png|jpe?g|svg)$/));
/*const itemImages = importItems(require.context('./assets/textures/item', false, /\.(png|jpe?g|svg)$/));*/
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

/*fix*/

export const Blocks = (r) => {
    const [block, setBlock] = useState('');
        
        function RenderBlocks(){
            return <img className='centerCraftingTableBlocks' src={craftingImages[block]} alt=''></img>
          }
  
    return(
    <div className='centerItemsBlocks craftingBGColor'> {/*Blocks*/}
        <button className='itemSlot pointerCursor'><img src={blockImages['glowstone.png']} onClick={() => setBlock('craft_glowstone.png')} alt='Snow' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['snow.png']} onClick={() => setBlock('craft_snowblock.png')} alt='Snow' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['stone_bricks.png']} onClick={() => setBlock('craft_stonebrick.png')} alt='Stone Bricks' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['bricks.png']} onClick={() => setBlock('craft_brick.png')} alt='Bricks' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['sandstone.png']} onClick={() => setBlock('craft_sandstone.png')} alt='Sandstone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['smooth_sandstone.png']} onClick={() => setBlock('craft_smoothsandstone.png')} alt='Smooth Sandstone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['chiseled_sandstone.png']} onClick={() => setBlock('craft_decorativesandstone.png')} alt='Chiseled Sandstone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['gold_block.png']} onClick={() => setBlock('craft_goldblock.png')} alt='Gold Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['diamond_block.png']} onClick={() => setBlock('craft_diamondblock.png')} alt='Diamond Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['iron_block.png']} onClick={() => setBlock('craft_ironblock.png')} alt='Iron Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['lapis_block.png']} onClick={() => setBlock('craft_lapislazuliblock.png')} alt='Lapis Lazuli Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['emerald_block.png']} onClick={() => setBlock('craft_emeraldblock.png')} alt='Emerald Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['coal_block.png']} onClick={() => setBlock('craft_coalblock.png')} alt='Coal Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['white_wool.png']} onClick={() => setBlock('craft_woolblock.png')} alt='Wool Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['bookshelf.png']} onClick={() => setBlock('craft_bookshelf.png')} alt='Book Shelf' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['note_block.png']} onClick={() => setBlock('craft_noteblock.png')} alt='Note Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['clay.png']} onClick={() => setBlock('craft_clayblock.png')} alt='Clay Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['jack_o_lantern.png']} onClick={() => setBlock('craft_jack-o-lantern.png')} alt='Jack-O-Lantern' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['tnt_side.png']} onClick={() => setBlock('craft_tnt.png')} alt='TNT' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['oak_stairs.png']} onClick={() => setBlock('craft_woodenstairs.gif')} alt='Wooden Stairs' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['cobblestone_stairs.png']} onClick={() => setBlock('craft_stonestairs.gif')} alt='Cobblestone Stairs' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['cobblestone_wall.png']} onClick={() => setBlock('craft_cobblestonewalls.gif')} alt='Cobblestone Wall' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['redstone_block.png']} onClick={() => setBlock('craft_blockofredstone.png')} alt='Redstone Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['nether_bricks.png']} onClick={() => setBlock('craft_netherbrick.png')} alt='Nether Brick' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['red_nether_bricks.png']} onClick={() => setBlock('craft_rednetherbrick.png')} alt='Red Nether Brick' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['chiseled_nether_bricks.png']} onClick={() => setBlock('craft_chiselednetherbricks.png')} alt='Chiseled Nether Brick' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['nether_wart_block.png']} onClick={() => setBlock('craft_netherwartblock.png')} alt='Nether Wart Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['quartz_block_side.png']} onClick={() => setBlock('craft_blockofquartz.png')} alt='Quartz Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['chiseled_quartz_block.png']} onClick={() => setBlock('craft_chiseledquartzblock.png')} alt='Chiseled Quartz Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['pillar_quartz_block.png']} onClick={() => setBlock('craft_pillarquartzblock.png')} alt='Pillar Quartz Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['quartz_bricks.png']} onClick={() => setBlock('craft_quartzbricks.png')} alt='Quartz Bricks' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['hay_block_side.png']} onClick={() => setBlock('craft_haybale.png')} alt='Hay Bale' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['stained_clay.png']} onClick={() => setBlock('craft_stainedclay.gif')} alt='Stained Clay' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['white_stained_glass.png']} onClick={() => setBlock('craft_stainedglass.gif')} alt='Stained Glass' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['granite.png']} onClick={() => setBlock('craft_granite.png')} alt='Granite' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['andesite.png']} onClick={() => setBlock('craft_andesite.png')} alt='Andesite' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['diorite.png']} onClick={() => setBlock('craft_diorite.png')} alt='Diorite' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['polished_granite.png']} onClick={() => setBlock('craft_polishedgranite.png')} alt='Polished Granite' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['polished_andesite.png']} onClick={() => setBlock('craft_polishedandesite.png')} alt='Polished Andesite' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['polished_diorite.png']} onClick={() => setBlock('craft_polisheddiorite.png')} alt='Polished Diorite' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['prismarine.png']} onClick={() => setBlock('craft_prismarine.png')} alt='Prismarine' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['prismarine_bricks.png']} onClick={() => setBlock('craft_prismarinebricks.png')} alt='Prismarine Bricks' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['dark_prismarine.png']} onClick={() => setBlock('craft_darkprismarine.png')} alt='Dark Prismarine' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['sea_lantern.png']} onClick={() => setBlock('craft_sealantern.png')} alt='Sea Lantern' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['coarse_dirt.png']} onClick={() => setBlock('craft_coarsedirt.png')} alt='Coarse Dirt' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['slime_block.png']} onClick={() => setBlock('craft_slimeblock.png')} alt='Slime Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['mossy_cobblestone.png']} onClick={() => setBlock('craft_mossstone.gif')} alt='Mossy Cobblestone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['mossy_stone_bricks.png']} onClick={() => setBlock('craft_mossystonebrick.gif')} alt='Mossy Stone Bricks' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['chiseled_stone_bricks.png']} onClick={() => setBlock('craft_chiseledstonebrick.png')} alt='Chiseled Stone Bricks' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['red_sandstone.png']} onClick={() => setBlock('craft_redsandstone.png')} alt='Red Sandstone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['smooth_red_sandstone.png']} onClick={() => setBlock('craft_smoothredsandstone.png')} alt='Smooth Red Sandstone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['chiseled_red_sandstone.png']} onClick={() => setBlock('craft_chiseledredsandstone.png')} alt='Chiseled Red Sandstone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['purpur_block.png']} onClick={() => setBlock('craft_purpurblock.png')} alt='Purpur Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['purpur_pillar.png']} onClick={() => setBlock('craft_purpurpillar.png')} alt='Purpur Pillar' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['magma.png']} onClick={() => setBlock('craft_magmablock.png')} alt='Magma Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['bone_block_side.png']} onClick={() => setBlock('craft_boneblock.png')} alt='Bone Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['dried_kelp_side.png']} onClick={() => setBlock('craft_driedkelpblock.png')} alt='Dried Kelp Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['packed_ice.png']} onClick={() => setBlock('craft_packedice.png')} alt='Packed Ice' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['blue_ice.png']} onClick={() => setBlock('craft_blueice.png')} alt='Blue Ice' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['honey_block_side.png']} onClick={() => setBlock('craft_honeyblock.png')} alt='Honey Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['honeycomb_block.png']} onClick={() => setBlock('craft_honeycombblock.png')} alt='Honeycomb Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['stripped_oak_log.png']} onClick={() => setBlock('craft_strippedwood.png')} alt='Stripped Log' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['polished_basalt_side.png']} onClick={() => setBlock('craft_polishedbasalt.png')} alt='Polished Basalt' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['polished_blackstone.png']} onClick={() => setBlock('craft_polishedblackstone.png')} alt='Polished Blackstone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['chiseled_polished_blackstone.png']} onClick={() => setBlock('craft_chiseledpolishedblackstone.png')} alt='Chiseled Polished Blackstone' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['polished_blackstone_bricks.png']} onClick={() => setBlock('craft_polishedblackstonebricks.png')} alt='Polished Blackstone Bricks' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['netherite_block.png']} onClick={() => setBlock('craft_blockofnetherite.png')} alt='Netherite Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['amethyst_block.png']} onClick={() => setBlock('craft_blockofamethyst.png')} alt='Amethyst Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['copper_block.png']} onClick={() => setBlock('craft_blockofcopper.png')} alt='Copper Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['cut_copper.png']} onClick={() => setBlock('craft_cutcopper.png')} alt='Cut Copper' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['waxed_copper_block.png']} onClick={() => setBlock('craft_waxedblockofcopper.png')} alt='Waxed Copper Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['dripstone_block.png']} onClick={() => setBlock('craft_dripstoneblock.png')} alt='Dripstone Block' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['muddy_mangrove_roots_side.png']} onClick={() => setBlock('craft_muddymangroveroots.png')} alt='Muddy Mangrove Roots' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['packed_mud.png']} onClick={() => setBlock('craft_packedmud.png')} alt='Packed Mud' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['mud_bricks.png']} onClick={() => setBlock('craft_mudbricks.png')} alt='Mud Bricks' /></button>
        <RenderBlocks>
        </RenderBlocks>
    </div>
    )
}