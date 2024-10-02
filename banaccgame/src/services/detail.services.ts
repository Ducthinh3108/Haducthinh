import { apiClient } from "../constant/api";

export const getItem = async (
    id: any,
  ): Promise<any> => {
    const res = await apiClient?.get(`/api/AccGame/get-by-id/` + id);  
    return res?.data;
  };

 