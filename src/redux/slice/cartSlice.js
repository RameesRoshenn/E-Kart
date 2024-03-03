const { createSlice } = require("@reduxjs/toolkit");


const cartSlice =createSlice ({
    name:'cart',
    initialState :[], //holds more than one item
    reducers:{
        //function to add itemss to cart
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        //function remove items from the wishlist
        removeFromCart :(state,action)=>{
            //filter returns a new array satifing the condition  , inorder to add the new array into state we need to return7
        return   state.filter(item=>item.id!=action.payload)
        },
        //function to remove all items from cart

        emptyCart : (state)=>{
            return state =[]
        }

    }
})
export const {addToCart ,removeFromCart , emptyCart} =cartSlice.actions

export default cartSlice.reducer