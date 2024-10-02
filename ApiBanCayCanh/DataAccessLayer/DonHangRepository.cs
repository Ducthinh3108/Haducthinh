using DataModel;

namespace DataAccessLayer
{
    public class DonHangRepository : IDonHangRepository
    {
        private IDatabaseHelper _dbHelper;
        public DonHangRepository(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }


        public bool Create(DonHangModel model)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_donhang_create",
                "@TenKhachHang", model.TenKhachHang,
           "@Email", model.Email,
            "@SoDienThoai", model.SoDienThoai,
            "@DiaChi", model.DiaChi,
                "@list_json_chitietdonhang", model.list_json_chitietdonhang != null ? MessageConvert.SerializeObject(model.list_json_chitietdonhang) : null);
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
