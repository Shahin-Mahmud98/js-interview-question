function addToCart() {
    let addCart = 0;
    
    return function () {
        addCart = addCart + 1;
        // return addCartAdd;
    }
   
}
const allCart = addToCart();
allCart();