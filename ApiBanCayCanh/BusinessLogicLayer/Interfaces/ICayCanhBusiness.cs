using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer
{
    public partial interface ICayCanhBusiness
    {
        CayCanhModel GetDatabyID(int id);
        List<CayCanhModel> CayCanhTheoTheLoaiCayCanh(int id);
        List<CayCanhModel> CayCanhLienQuan(int id);

        IEnumerable<CayCanhModel> GetAllData();
        public List<CayCanhModel> Search1(int pageIndex, int pageSize, out long total, string MaTheLoaiCayCanh);
        public List<CayCanhModel> Search2(int pageIndex, int pageSize, out long total, string TenCayCanh);

    }
}
