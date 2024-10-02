import { apiClient } from "../constant/api";

  export const createOrder = async (
    data: any,
  ): Promise<any> => {
   console.log(data);
    const res = await apiClient?.post(`/api/DonHang/create-donhang`, data);  
    return res?.data;
  };