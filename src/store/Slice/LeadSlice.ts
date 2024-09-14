import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IInitialState {
  leadTestList: any[];
  leadFaqList: any[];
  selectedLeadTest: any;
  bookTestLead: any;
}
const initialState: IInitialState = {
    leadTestList: [],
    leadFaqList: {} as any,
    selectedLeadTest: {} as any,
    bookTestLead: {} as any
};

const LeadSlice = createSlice({
  name: "Lead",
  initialState,
  reducers: {
    saveSelectedLeadTest(state, action: PayloadAction<any>) {
      state.selectedLeadTest = action.payload;
    },
    setLeadTestList(state, action: PayloadAction<any>) {
      state.leadTestList = action.payload;
    },
    setLeadFaqList(state, action: PayloadAction<any>) {
      state.leadFaqList = action.payload;
    },
    setBookTestLead(state, action: PayloadAction<any>) {
      state.bookTestLead = action.payload;
    },
  },
});

export const { saveSelectedLeadTest,setLeadTestList,setLeadFaqList, setBookTestLead} = LeadSlice.actions;

export default LeadSlice.reducer;
