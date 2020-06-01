import addProduit from "../views/components/addProduit";

export const basketService = {
    add,
}


function add(product, quantity) {

    //console.log(product)
    //console.log(quantity)




    updateLocalStorage(product, quantity);



}



function updateLocalStorage(product, quantity) {

    let basket = getCurrentBasket()



    //verifier si builkey product exite ds basket 
    if (_.hasIn(basket, buildKey(product))) {
        console.log('update')
        basket[buildKey(product)].quantity += parseInt(quantity);
    } else {
        console.log('create')

        basket[buildKey(product)] = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: parseInt(quantity),

        }
    }




    //sauvegarde ds le composnat du local storage
    //localStorage.setItem("currentBasket", JSON.stringify(basket))
    storeBasket(basket)



}

function buildKey(product) {
    return 'product_' + product.id;
}




//get basket recup le current basket
function getCurrentBasket() {
    let basket = localStorage.getItem("currentBasket");

    if (!basket) {
        basket = {}
    } else {
        basket = JSON.parse(basket);
    }

    console.log(basket)
    return basket
}


//save basket set current basket
function storeBasket(basket) {
    localStorage.setItem("currentBasket", JSON.stringify(basket))
}




















// function buildKey(product) {
//     return 'product_' + product.id
// }


// function storeBasket(basket) {
//     localStorage.setItem("currentBasket", JSON.stringify(basket))
// }

// function getBasket() {
//     let basket = localStorage.getItem("currentBasket");

//     if (!basket) {
//         basket = {}
//     } else {
//         basket = JSON.parse(basket)
//     }
// }