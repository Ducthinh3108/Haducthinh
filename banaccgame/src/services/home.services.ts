import { apiClient } from "../constant/api";

  export const getItems = async (
    data: any,
  ): Promise<any> => {
    const res = await apiClient?.post(`/api/Item/search`, data);  
    return res?.data.data;
  };



  export const getAccGame = async (): Promise<any> => {
    const res = await apiClient?.get(`/api/AccGame/get-all-data`);
    return res?.data;
  };

  