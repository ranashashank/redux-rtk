##

API => Products(Dummy) => Add To Cart
Cart

REACT REACT_REDUX REDUX TOOLKIT

REDUX

action-creator =>
const PRODUCT_ADDED = "PRODUCT_ADDED"

action =>

switch(action.type){
case PRODUCT_ADDED => setProducts([]),
case PRODUCT_DELETED => deletePRODUCTS
}

dispatch({
type: PRODUCT_ADDED,
payload : products
})

dispatch(
setProducts(products)
)

## Assignment (Extended)

1. Product page
2. Cart Page (Seperate)
3. Quantity with addToCart Functionality - Change, update quantity from products, cart
4. Filter based on price - min of price - max of price
5. Search funationality
6. Create place order button on Cart Page and after success remove element from cart and show them in order section.

## HOST ON Netlify

<!-- npm install -g create-react-app
create-react-app hello-world
cd hello-world -->

## https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/

## https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/

npm run build
npm install netlify-cli -g
netlify deploy
