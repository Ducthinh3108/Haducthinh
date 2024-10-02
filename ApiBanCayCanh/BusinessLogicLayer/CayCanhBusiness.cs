using BusinessLogicLayer;
using DataAccessLayer;
using DataModel;

namespace BusinessLogicLayer
{
    public class CayCanhBusiness : ICayCanhBusiness
    {
        private ICayCanhRepository _res;
        public CayCanhBusiness(ICayCanhRepository res)
        {
            _res = res;
        }
        public CayCanhModel GetDatabyID(int id)
        {
            return _res.GetDatabyID(id);
        }
        public List<CayCanhModel> CayCanhTheoTheLoaiCayCanh(int id)
        {
            return _res.CayCanhTheoTheLoaiCayCanh(id);
        }
        public List<CayCanhModel> CayCanhLienQuan(int id)
        {
            return _res.CayCanhLienQuan(id);
        }

        public List<CayCanhModel> Search1(int pageIndex, int pageSize, out long total, string MaTheLoaiCayCanh)
        {
            return _res.Search1(pageIndex, pageSize, out total, MaTheLoaiCayCanh);
        }
        public List<CayCanhModel> Search2(int pageIndex, int pageSize, out long total, string TenCayCanh)
        {
            return _res.Search2(pageIndex, pageSize, out total, TenCayCanh);
        }
        public IEnumerable<CayCanhModel> GetAllData()
        {
            return _res.GetAllData();
        }

    }
}