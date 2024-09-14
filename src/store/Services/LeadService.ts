import EndPoint from "@config/EndPoint";
import { Api,LiveUrl } from "./Agent";
import { toast } from "react-toastify";
import { errorHandling } from "@Utils/RepoUtil";
import { Dispatch } from "@store/store";
import { saveSelectedLeadTest, setLeadFaqList, setLeadTestList , setBookTestLead} from "@store/Slice/LeadSlice";
import router from "next/router";

const LeadRepo = {
  getOverview: async (payload: any) => {
    try {
      const { data } = await Api.post(EndPoint.TEST_OVERVIEW, payload);
      Dispatch(saveSelectedLeadTest(data?.Data));
      return data;
    } catch (error: any) {
      Dispatch(saveSelectedLeadTest({}));
      const _error = errorHandling(error);
      toast.error(_error || "");
      return error;
    }
  },
  sendOtp: async (Phoneno: any) => {
    try {
      const { data } = await LiveUrl.get(EndPoint.TEST_OVERVIEW,  {params: {Phoneno}});
      return data;
    } catch (error: any) {
      const _error = errorHandling(error);
      toast.error(_error || "");
      return error;
    }
  },
  getLeadTestList: async (testApiPay: any) => {
    try {
      const { data } = await Api.get(EndPoint.TEST_OVERVIEW,{params:testApiPay});
      Dispatch(setLeadTestList(data?.Data?.data?.result));
      // console.log(data?.Data?.data?.result)
      return data;
    } catch (error: any) {
      const _error = errorHandling(error);
      toast.error(_error || "");
      return error;
    }
  },
  getLeadFaqList: async (payload: any) => {
    try {
      const { data } = await Api.post(EndPoint.TEST_OVERVIEW,payload);
      Dispatch(setLeadFaqList(data?.Data));
      // console.log(data?.Data?.data?.result)
      return data;
    } catch (error: any) {
      const _error = errorHandling(error);
      toast.error(_error || "");
      return error;
    }
  },
  bookTestLead: async (payload: any) => {
    try {
      const { data } = await LiveUrl.post(EndPoint.TEST_OVERVIEW, payload);
      Dispatch(setBookTestLead(data));
      router.push("/thank-you")
       return data;
    } catch (error: any) {
      const _error = errorHandling(error);
      toast.error(_error || "Whoops! Looks like there is a mismatch. Please try again");
      return error;
    }
  },
};
export default LeadRepo;
