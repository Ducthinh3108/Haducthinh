using DataModel;
using System.Text.RegularExpressions;

namespace DataAccessLayer
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
        public IEnumerable<CayCanhModel> GetAllData()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "GetAllCayCanhs");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<CayCanhModel>();
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
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "GetCaysBySameGenreWithImages",
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


    }
}
