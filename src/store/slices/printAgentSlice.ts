import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PrintState {
  printerActive: boolean;
}

const INITIALSTATE: PrintState = {
  printerActive: false,
};

const PrintAgentSlice = createSlice({
  name: "printAgent",

  initialState: INITIALSTATE,

  reducers: {
    setPrinterActive: (state, action: PayloadAction<boolean>) => {
      state.printerActive = action.payload;
    },
  },
});

export const { setPrinterActive } = PrintAgentSlice.actions;

export default PrintAgentSlice.reducer;
