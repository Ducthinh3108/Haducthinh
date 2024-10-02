using DAL.Helper;
using Model;
using Helper;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System;

namespace DAL
{
    public class CayCanhRepository : ICayCanhRepository
    {
        private IDatabaseHelper _dbHelper;
        public CayCanhRepository(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        public CayCanhModel GetDatabyID(int id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_CayCanh_get_by_id_admin",
                     "@MaCayCanh", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<CayCanhModel>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<CayCanhModel> CayCanhTheoTheLoaiCayCanh(int id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_CayCanh_Theo_The_Loai_CayCanh",
                     "@MaTheLoaiCayCanh", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<CayCanhModel>().ToList();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<CayCanhModel> CayCanhLienQuan(int id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "GetCayCanhBySameCategory",
                     "@MaCayCanh", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<CayCanhModel>().ToList();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool Create(CayCanhModel model)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_CayCanh_create",
                "@TenCayCanh", model.TenCayCanh,
                "@MaTheLoaiCayCanh", model.MaTheLoaiCayCanh,
                "@SoLuong", model.SoLuong,
                "@GhiChu", model.GhiChu,
                "@Gia", model.Gia,
                "@Anh", model.Anh);
                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool Update(CayCanhModel model)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_CayCanh_update",
                "@MaCayCanh", model.MaCayCanh,
                "@TenCayCanh", model.TenCayCanh,
                "@MaTheLoaiCayCanh", model.MaTheLoaiCayCanh,
                "@SoLuong", model.SoLuong,
                "@GhiChu", model.GhiChu,
                "@Gia", model.Gia,
                "@Anh", model.Anh);
                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<CayCanhSearchModel> Search(int pageIndex, int pageSize, out long total, string ten_CayCanh)
        {
            string msgError = "";
            total = 0;
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_CayCanh_search",
                   "@page_index", pageIndex,
                    "@page_size", pageSize,

                    "@TenCayCanh", ten_CayCanh);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                if (dt.Rows.Count > 0) total = (long)dt.Rows[0]["RecordCount"];
                return dt.ConvertTo<CayCanhSearchModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<CayCanhModel> Search1(int pageIndex, int pageSize, out long total, string MaTheLoaiCayCanh)
        {
            string msgError = "";
            total = 0;
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_CayCanh1_search",
                    "@page_index", pageIndex,
                    "@page_size", pageSize,
                    "@MaTheLoaiCayCanh", MaTheLoaiCayCanh);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                if (dt.Rows.Count > 0) total = (long)dt.Rows[0]["RecordCount"];
                return dt.ConvertTo<CayCanhModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<CayCanhModel> Search2(int pageIndex, int pageSize, out long total, string TenCayCanh)
        {
            string msgError = "";
            total = 0;
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_CayCanh2_search",
                    "@page_index", pageIndex,
                    "@page_size", pageSize,
                    "@TenCayCanh", TenCayCanh);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                if (dt.Rows.Count > 0) total = (long)dt.Rows[0]["RecordCount"];
                return dt.ConvertTo<CayCanhModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



        public bool Delete(int MaCayCanh)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_CayCanh_delete",
                "@MaCayCanh", MaCayCanh
                );
                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
