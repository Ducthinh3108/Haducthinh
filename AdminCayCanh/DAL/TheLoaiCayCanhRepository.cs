using DAL.Helper;
using Model;
using Helper;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System;

namespace DAL
{
    public class TheLoaiCayCanhRepository : ITheLoaiCayCanhRepository
    {
        private IDatabaseHelper _dbHelper;
        public TheLoaiCayCanhRepository(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        public TheLoaiCayCanhModel GetDatabyID(string MaTheLoaiCayCanh)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_theloaiCayCanh_get_by_id",
                     "@MaTheLoaiCayCanh", MaTheLoaiCayCanh);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TheLoaiCayCanhModel>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<TheLoaiCayCanhModel> GetAllData()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_TheLoaiCayCanh_getAll");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TheLoaiCayCanhModel>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool Create(TheLoaiCayCanhModel model)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_theloaiCayCanh_create",
                "@TheLoaiCayCanh", model.TheLoaiCayCanh);
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
        public bool Update(TheLoaiCayCanhModel model)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_theloaiCayCanh_update",
                "@Id", model.MaTheLoaiCayCanh,
                "@TheLoaiCayCanh", model.TheLoaiCayCanh);
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

        public List<TheLoaiCayCanhModel> Search(int pageIndex, int pageSize, out long total, string the_loai_CayCanh)
        {
            string msgError = "";
            total = 0;
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_theloaiCayCanh_search",
                    "@page_index", pageIndex,
                    "@page_size", pageSize,
                    "@the_loai_CayCanh", the_loai_CayCanh);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                if (dt.Rows.Count > 0) total = (long)dt.Rows[0]["RecordCount"];
                return dt.ConvertTo<TheLoaiCayCanhModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<TheLoaiCayCanhModel> Search1(int pageIndex, int pageSize, out long total, string the_loai_CayCanh, string ma_the_loai_CayCanh)
        {
            string msgError = "";
            total = 0;
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_theloaiCayCanh1_search",
                    "@page_index", pageIndex,
                    "@page_size", pageSize,
                    "@the_loai_CayCanh", the_loai_CayCanh,
                    "@ma_the_loai_CayCanh", ma_the_loai_CayCanh);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                if (dt.Rows.Count > 0) total = (long)dt.Rows[0]["RecordCount"];
                return dt.ConvertTo<TheLoaiCayCanhModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool Delete(int MaTheLoaiCayCanh)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "XoaTheLoaiCayCanh",
                "@MaTheLoaiCayCanh", MaTheLoaiCayCanh
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
