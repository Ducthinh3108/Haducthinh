using DAL;
using Microsoft.IdentityModel.Tokens;
using Model;
using System;
using Helper;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace BLL
{
    public class TheLoaiCayCanhBusiness : ITheLoaiCayCanhBusiness
    {
        private ITheLoaiCayCanhRepository _res;
        public TheLoaiCayCanhBusiness(ITheLoaiCayCanhRepository res)
        {
            _res = res;
        }
        public TheLoaiCayCanhModel GetDatabyID(string MaTheLoaiCayCanh)
        {
            return _res.GetDatabyID(MaTheLoaiCayCanh);
        }
        public IEnumerable<TheLoaiCayCanhModel> GetAllData()
        {
            return _res.GetAllData();
        }
        public bool Create(TheLoaiCayCanhModel model)
        {
            return _res.Create(model);
        }
        public bool Update(TheLoaiCayCanhModel model)
        {
            return _res.Update(model);
        }
        public List<TheLoaiCayCanhModel> Search(int pageIndex, int pageSize, out long total, string the_loai_CayCanh)
        {
            return _res.Search(pageIndex, pageSize, out total, the_loai_CayCanh);
        }
        public List<TheLoaiCayCanhModel> Search1(int pageIndex, int pageSize, out long total, string the_loai_CayCanh, string ma_the_loai_CayCanh)
        {
            return _res.Search1(pageIndex, pageSize, out total, the_loai_CayCanh, ma_the_loai_CayCanh);
        }
        public bool Delete(int MaTheLoaiCayCanh)
        {
            return _res.Delete(MaTheLoaiCayCanh);
        }
    }

}
