import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [
        {
            id: 1,
            name: "Model S",
            image: "/images/model-s.jpg",
            description: "Order Online for Touchless Delivery",
            price: 74990,
        },
        {
            id: 2,
            name: "Model 3",
            image: "/images/model-3.jpg",
            description: "Order Online for Touchless Delivery",
            price: 40240,
        },
        {
            id: 3,
            name: "Model X",
            image: "/images/model-x.jpg",
            description: "Order Online for Touchless Delivery",
            price: 79990,
        },
        {
            id: 4,
            name: "Model Y",
            image: "/images/model-y.jpg",
            description: "Order Online for Touchless Delivery",
            price: 47740,
        },
    ],
}

export const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload
        },
        addCar: (state, action) => {
            state.cars.push(action.payload)
        },
    },
})

export const { setCars, addCar } = carSlice.actions

export const selectCars = (state) => state.car.cars

export default carSlice.reducer