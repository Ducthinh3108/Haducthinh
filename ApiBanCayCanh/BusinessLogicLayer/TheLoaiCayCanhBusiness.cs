using BusinessLogicLayer;
using DataAccessLayer;
using DataModel;

namespace BusinessLogicLayer
{
    public class TheLoaiCayCanhBusiness : ITheLoaiCayCanhBusiness
    {
        private ITheLoaiCayCanhRepository _res;
        public TheLoaiCayCanhBusiness(ITheLoaiCayCanhRepository res)
        {
            _res = res;
        }

        public IEnumerable<TheLoaiCayCanhModel> GetAllData()
        {
            return _res.GetAllData();
        }

    }
}