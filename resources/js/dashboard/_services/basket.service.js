import { EventBus } from "../_helpers/event.bus";
import { apiServices } from './api.services'


export const basketService = {
    add,
    basketSizeRecup,
    getCurrentBasket,
    replaceQuantity,
    pushBasket,
    paiement
}


function add(product, quantity, quantityMax) {
    updateLocalStorage(product, quantity, quantityMax);
}



function updateLocalStorage(product, quantity, quantityMax) {

    let basket = getCurrentBasket()

    let qt = 0

    if (!_.hasIn(basket, buildKey(product))) {
        basket[buildKey(product)] = {
                id: product.id,
                name: product.name,
                price: product.price,
            }
            //quantite que l on veut rajouter en creant
        qt = parseInt(quantity)
    } else {
        //qt en localstorage +  //quantite que l on veut rajouter en update
        qt = basket[buildKey(product)].quantity + parseInt(quantity)
    }




    //produit en localstorage plus qrand que celui en bdd
    if (qt > product.quantity) {
        console.log('stock insuffisant')
        qt = product.quantity
    }

    //si qt plus petit que 10 ça saute le prochain if sinon ça set le quantity a 10
    //quantite que l on veut rajouter plus grand que 10
    if (qt > 10) {
        console.log('pas plus de 10 produits')
        qt = 10
    }
    basket[buildKey(product)].quantity = qt

    let text = 'le bus marche'
    let snackBar = true
    EventBus.$emit('toto', snackBar, text);



    //   //verifier si builkey product exite ds basket 
    //   if (_.hasIn(basket, buildKey(product))) {
    //     console.log('update')
    //         // console.log(basket[buildKey(product)].quantity)
    //     console.log(quantityMax)
    //     if (basket[buildKey(product)].quantity <= quantityMax) {
    //         basket[buildKey(product)].quantity += parseInt(quantity);
    //     }

    //     if (basket[buildKey(product)].quantity > quantityMax) {
    //         basket[buildKey(product)].quantity = quantityMax;
    //         //attention pas plus de 10 produit du mm type
    //         console.log("pas plus de" + quantityMax + "produits ")
    //     }

    //     console.log(basket[buildKey(product)].quantity)

    // } else {
    //     console.log('create')

    //     basket[buildKey(product)] = {
    //         id: product.id,
    //         name: product.name,
    //         price: product.price,
    //         quantity: parseInt(quantity),

    //     }
    // }



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
    return basket
}


//save basket set current basket
function storeBasket(basket) {

    localStorage.setItem("currentBasket", JSON.stringify(basket))
    basketLen(basket)
        //console.log(basket)

}



//recupere la longuer de basket
function basketLen(basket) {
    let basketSize = _.toPairs(basket).length;
    //nom du bus  + variable va vers composant panier
    EventBus.$emit('basketSize', basketSize);
}

//recupere la quantite de basket size
function basketSizeRecup() {
    let basketSize = _.toPairs(getCurrentBasket()).length;
    return basketSize
}


function replaceQuantity(product) {

    let basket = getCurrentBasket();

    if (_.hasIn(basket, buildKey(product))) {
        console.log(product)

        console.log(basket[buildKey(product)])


        basket[buildKey(product)] = product;

        if ((basket[buildKey(product)].quantity) == 0) {
            _.unset(basket, buildKey(product))
        }
    } else {
        throw 'err'
    }

    storeBasket(basket)

}




// function pushBasket() {
//     //panierpas encore mis a jour

//     let item = getCurrentBasket();
//     // console.log(item)

//     let tabIdQuantite = [];

//     for (let i in item) {
//         // console.log(item[i].id)
//         //console.log(item[i].quantity)

//         let objProduit = {}

//         objProduit['id'] = item[i].id;
//         objProduit['quantity'] = item[i].quantity;

//         tabIdQuantite.push(objProduit);
//     }

//     return apiServices.post('/api/basket/', {
//         order: tabIdQuantite,
//     })




// }



function pushBasket(order) {
    //panierpas encore mis a jour

    let item = getCurrentBasket();
    let tabIdQuantite = [];

    for (let i in item) {
        let objProduit = {}
        objProduit['id'] = item[i].id;
        objProduit['quantity'] = item[i].quantity;
        tabIdQuantite.push(objProduit);
    }

    return apiServices.post('/api/basket/', {
        order: tabIdQuantite,
        livraison: order.livraison,
        facturation: order.facturation,
        // paiement: order.paiement
    })


}

function paiement(order) {

    console.log(order)
    return apiServices.post('/api/basket/pay', {

        paiement: order.paiement

    })
}