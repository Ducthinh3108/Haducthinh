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
        public bool Create(CayCanhModel model)
        {
            return _res.Create(model);
        }
        public bool Update(CayCanhModel model)
        {
            return _res.Update(model);
        }
        public List<CayCanhSearchModel> Search(int pageIndex, int pageSize, out long total, string ten_CayCanh)
        {
            return _res.Search(pageIndex, pageSize, out total, ten_CayCanh);
        }
        public List<CayCanhModel> Search1(int pageIndex, int pageSize, out long total, string MaTheLoaiCayCanh)
        {
            return _res.Search1(pageIndex, pageSize, out total, MaTheLoaiCayCanh);
        }
        public List<CayCanhModel> Search2(int pageIndex, int pageSize, out long total, string TenCayCanh)
        {
            return _res.Search2(pageIndex, pageSize, out total, TenCayCanh);
        }

        public bool Delete(int MaCayCanh)
        {
            return _res.Delete(MaCayCanh);
        }
    }

}
