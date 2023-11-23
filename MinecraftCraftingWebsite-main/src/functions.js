export const importBlocks = (r) => {
    let blockImages = {};
    r.keys().map((item) => ( blockImages[item.replace('./', '')] = r(item) ));
    return blockImages;
  }


  export const importItems = (r) => {
    let itemImages = {};
    r.keys().map((item) => ( itemImages[item.replace('./', '')] = r(item) ));
    return itemImages;
  }

  export const importCraftingRecipies = (r) => {
    let craftingImages = {};
    r.keys().map((item) => ( craftingImages[item.replace('./', '')] = r(item) ));
    return craftingImages;
  }
  