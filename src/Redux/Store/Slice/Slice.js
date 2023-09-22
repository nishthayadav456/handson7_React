import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {name : 'Nishtha', age : 22, course : "MERN", batch : "EA24"},
    {name : 'Lyra', age : 23, course : "MERN", batch : "EA23"},
    {name : 'preeti', age : 24, course : "MEAN", batch : "EA22"},
    {name : 'Riya', age : 25, course : "MERN", batch : "EA21"},
    {name : 'John', age : 26, course : "MERN", batch : "EA24"},
]
const StudentSlice = createSlice({
    name : "Stu_Data",
    initialState,
    reducers : {
               editStudent : (state, action) => {
                state[action.payload.index] = action.payload.info;
                // console.log(action.payload.index)
                // console.log(action.payload.info)
               },
               addStudent : (state, action) => {
                 state.push(action.payload)
               }
    }
})
export const {editStudent,  addStudent} = StudentSlice.actions;
export default StudentSlice.reducer