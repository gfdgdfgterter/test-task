import { createSlice } from '@reduxjs/toolkit';
import {SquareItem, SquareSchema} from "../types/squareSchema.ts";
import {getRandomColor} from "../../../../helpers/getRandomColor.ts";

const initialState: SquareSchema = {
    anim: null,
    items: [],
}


export const squaresSlice = createSlice({
    name: 'squares',
    initialState,
    reducers: {
        add: (state) => {
            if (state.items.length >= 20) return

            state.anim = 'add';
            state.items.unshift({color: getRandomColor()});
        },
        delete: (state) => {
            if (state.count === 0 ) return;

            state.anim = 'delete';
            state.items.pop()
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: squaresActions } = squaresSlice;
export const { reducer: squaresReducer } = squaresSlice;
