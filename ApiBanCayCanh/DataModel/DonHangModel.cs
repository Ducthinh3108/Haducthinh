using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class DonHangModel
    {
        public int MaDonHang { get; set; }
        public string TenKhachHang { get; set; }
        public string Email { get; set; }
        public string SoDienThoai { get; set; }
        public string DiaChi { get; set; }

        public List<ChiTietDonHangModel> list_json_chitietdonhang { get; set; }
    }
    public class ChiTietDonHangModel
    {

        public int MaChiTietDonHang { get; set; }
        public int MaDonHang { get; set; }
        public int MaCayCanh { get; set; }
        public int SoLuong { get; set; }
        public float TongTien { get; set; }
        public float GiaCayCanh { get; set; }
    }
}
