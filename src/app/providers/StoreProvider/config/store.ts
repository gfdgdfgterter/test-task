import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import {squaresReducer} from "../../../../entries/Square/model/slice/squareSlice.ts";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            squares: squaresReducer,
        },
        devTools: true,
    });
}
