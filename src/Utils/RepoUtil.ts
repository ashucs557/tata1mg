import { AxiosError } from "axios";

export const errorHandling = (error: AxiosError) => {
    if (error.response) {
      //@ts-ignore
      return error.response.data.Message || error.response.data.Message;
    } else {
      return error.message;
    }
  };