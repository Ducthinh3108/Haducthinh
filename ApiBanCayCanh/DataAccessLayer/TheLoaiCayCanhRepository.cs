using DataModel;

namespace DataAccessLayer
{
    public class TheLoaiCayCanhRepository : ITheLoaiCayCanhRepository
    {
        private IDatabaseHelper _dbHelper;
        public TheLoaiCayCanhRepository(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }

        public IEnumerable<TheLoaiCayCanhModel> GetAllData()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_theloaiCayCanh_GetAll");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TheLoaiCayCanhModel>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
