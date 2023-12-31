import { createSlice } from "@reduxjs/toolkit";

interface Product {
    _id: string;
    img: string,
    title: string,
    desc: string,
    categories: [],
    size: [],
    color: [],
    price: number,
    producer: string,
    inStock: boolean
  }
  

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [] as Product[],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getProductSuccess: (state, action) => {
            state.isFetching =  false
            state.products = action.payload
        },
        getProductFailure: (state) => {
            state.isFetching =  false
            state.error = true
        },
        //DELETE
        
        deleteProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching =  false
            state.products.splice(state.products.findIndex((item: any) => item._id === action.payload), 1)
        },
        deleteProductFailure: (state) => {
            state.isFetching =  false
            state.error = true
        },

        //ADD NEW

        addProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        addProductSuccess: (state, action) => {
            state.isFetching =  false
            state.products.push(action.payload)
        },
        addProductFailure: (state) => {
            state.isFetching =  false
            state.error = true
        }
    },
})

export const {
    getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure,
    addProductStart, addProductSuccess, addProductFailure
} = productSlice.actions

export default productSlice.reducer