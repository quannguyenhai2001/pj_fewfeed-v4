

const { createSlice, } = require("@reduxjs/toolkit");

const initialState = {

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteUser: (state, action) => {

            state.userInfo = {}
            state.accessToken = ""
        },
    },
    extraReducers: builder => {

    }
})

const { reducer: userReducer, actions } = userSlice
export const { deleteUser } = actions

export default userReducer
