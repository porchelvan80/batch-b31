import { configureStore } from '@reduxjs/toolkit'
import CustomerReducer from './slices/customerSlices';
export const store=configureStore({
    devTools:true,
    reducer:{
        customers:CustomerReducer
        
    }
})