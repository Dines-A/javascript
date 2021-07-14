
        /* 
        this operations are happen on premitive values here
        1.combain array 
        2.Extract array     
        */
    let moneyheish=["professor","tokyo","neirobi","helsinki","osclo","denver"];

    let familyman =["hero","girl","boy","boisops"];

    //combain two array

    let moneyheist_familyman = moneyheish.concat(familyman);

    console.log(moneyheist_familyman);

    // Extract array   just slice the array
  
    let onlymoneyheist = moneyheist_familyman.slice(0,6);

    console.log(onlymoneyheist);

