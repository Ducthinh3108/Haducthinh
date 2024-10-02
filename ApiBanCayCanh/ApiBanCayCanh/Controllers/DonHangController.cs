using BusinessLogicLayer;
using DataModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.BanHang.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DonHangController : ControllerBase
    {
        private IDonHangBusiness _donhangBusiness;
        public DonHangController(IDonHangBusiness donhangBusiness)
        {
            _donhangBusiness = donhangBusiness;
        }

        [Route("create-donhang")]
        [HttpPost]
        public DonHangModel CreateItem([FromBody] DonHangModel model)
        {
            _donhangBusiness.Create(model);
            return model;
        }

    }
}
