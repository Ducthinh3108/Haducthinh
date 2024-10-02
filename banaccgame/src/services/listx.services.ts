import { apiClient } from "../constant/api";

export const getList = async (
    data: any,
  ): Promise<any> => {
    const res = await apiClient?.post(`/api/AccGame/search2`, data);  
    return res?.data;
  };

  

 