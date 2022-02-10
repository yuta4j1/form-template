import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type FormdataType = {
  firstName: string
  lastName: string
  age: number
  phoneNumber: string
  havePet: boolean
  pets: string[]
}

const initialState: FormdataType = {
  firstName: "",
  lastName: "",
  age: 0,
  phoneNumber: "",
  havePet: false,
  pets: [],
}

export const formdataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    form1Update: (
      state,
      action: PayloadAction<Pick<FormdataType, "firstName" | "lastName">>
    ) => {
      return {
        ...state,
        ...action.payload,
      }
    },
    form2Update: (
      state,
      action: PayloadAction<
        Pick<FormdataType, "age" | "phoneNumber" | "havePet" | "pets">
      >
    ) => {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { form1Update, form2Update } = formdataSlice.actions

export default formdataSlice.reducer
