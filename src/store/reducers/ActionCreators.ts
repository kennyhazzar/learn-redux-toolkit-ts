import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUsers";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
//         dispatch(userSlice.actions.userFetchingSuccess(response.data))
//     } catch (error) {
//         dispatch(userSlice.actions.userFetchingError("Ошибка при загрузке пользователей"))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }

    }
)