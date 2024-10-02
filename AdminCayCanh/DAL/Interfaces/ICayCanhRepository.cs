using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface ICayCanhRepository
    {
        CayCanhModel GetDatabyID(int id);
        List<CayCanhModel> CayCanhTheoTheLoaiCayCanh(int id);
        bool Create(CayCanhModel model);
        bool Update(CayCanhModel model);
        List<CayCanhModel> CayCanhLienQuan(int id);
        public List<CayCanhSearchModel> Search(int pageIndex, int pageSize, out long total, string ten_CayCanh);
        public List<CayCanhModel> Search1(int pageIndex, int pageSize, out long total, string MaTheLoaiCayCanh);
        public List<CayCanhModel> Search2(int pageIndex, int pageSize, out long total, string TenCayCanh);


        bool Delete(int MaCayCanh);
    }
}
