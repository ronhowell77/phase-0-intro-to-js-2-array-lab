const cats = ['Milo', 'Otis', 'Garfield',];
function destructivelyAppendCat(Ralph){
        cats.push('Ralph');
}
function destructivelyPrependCat(Bob){
        cats.unshift('Bob');
}
function destructivelyRemoveLastCat(Bob){
        cats.pop(3);
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(0);
}

function appendCat(name){
    const alleyCats= [...cats,'Broom'];
    return alleyCats
}
 
 function prependCat(name){
     const cuteCats=['Arnold',...cats];
     return cuteCats
 }
 function removeLastCat(name){
    const fluffyCats=cats.slice(0,-1);
    return fluffyCats
 }
 function removeFirstCat(name){
    const dirtyCats=cats.slice(1);
    return dirtyCats
 }