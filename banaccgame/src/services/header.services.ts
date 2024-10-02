import { apiClient } from "../constant/api";
  export const getMenus = async (): Promise<any> => {
    const res = await apiClient?.get(`/api/TheLoaiAccGame/get-all-data`);
    return res?.data;
  };

