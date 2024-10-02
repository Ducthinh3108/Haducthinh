using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public partial interface ICayCanhRepository
    {
        CayCanhModel GetDatabyID(int id);
        List<CayCanhModel> CayCanhTheoTheLoaiCayCanh(int id);
        IEnumerable<CayCanhModel> GetAllData();
        List<CayCanhModel> CayCanhLienQuan(int id);

        public List<CayCanhModel> Search1(int pageIndex, int pageSize, out long total, string MaTheLoaiCayCanh);
        public List<CayCanhModel> Search2(int pageIndex, int pageSize, out long total, string TenCayCanh);

    }
}
