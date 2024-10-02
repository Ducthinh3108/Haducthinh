using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public partial interface ITheLoaiCayCanhBusiness
    {
        TheLoaiCayCanhModel GetDatabyID(string MaTheLoaiCayCanh);
        IEnumerable<TheLoaiCayCanhModel> GetAllData();
        bool Create(TheLoaiCayCanhModel model);
        bool Update(TheLoaiCayCanhModel model);
        public List<TheLoaiCayCanhModel> Search(int pageIndex, int pageSize, out long total, string the_loai_CayCanh);
        public List<TheLoaiCayCanhModel> Search1(int pageIndex, int pageSize, out long total, string the_loai_CayCanh, string ma_the_loai_CayCanh);
        bool Delete(int MaTheLoaiCayCanh);
    }
}
