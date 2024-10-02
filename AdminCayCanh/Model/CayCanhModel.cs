using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class CayCanhModel
    {
        public string MaCayCanh { get; set; }
        public string TenCayCanh { get; set; }
        public string MaTheLoaiCayCanh { get; set; }
        public int SoLuong { get; set; }
        public string GhiChu { get; set; }
        public float Gia { get; set; }
        public string Anh { get; set; }
    }
    public class CayCanhSearchModel
    {
        public int MaCayCanh { get; set; }
        public string TenCayCanh { get; set; }
        public string TenTheLoai { get; set; }
        public int SoLuong { get; set; }
        public string GhiChu { get; set; }
        public float Gia { get; set; }
        public string Anh { get; set; }
    }
}
