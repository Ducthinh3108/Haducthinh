using BusinessLogicLayer;
using DataModel;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Api.BanHang.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CayCanhController : ControllerBase
    {
        private ICayCanhBusiness _CayCanhBusiness;
        private string _path;
        private IWebHostEnvironment _env;
        public CayCanhController(ICayCanhBusiness CayCanhBusiness, IConfiguration configuration, IWebHostEnvironment env)
        {
            _CayCanhBusiness = CayCanhBusiness;
            _path = configuration["AppSettings:PATH"];
            _env = env;
        }
        [NonAction]
        public string CreatePathFile(string RelativePathFileName)
        {
            try
            {
                string serverRootPathFolder = _path;
                string fullPathFile = $@"{serverRootPathFolder}\{RelativePathFileName}";
                string fullPathFolder = System.IO.Path.GetDirectoryName(fullPathFile);
                if (!Directory.Exists(fullPathFolder))
                    Directory.CreateDirectory(fullPathFolder);
                return fullPathFile;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [Route("upload")]
        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            try
            {
                if (file.Length > 0)
                {
                    string filePath = $"upload/{file.FileName}";
                    var fullPath = CreatePathFile(filePath);
                    using (var fileStream = new FileStream(fullPath, FileMode.Create))
                    {
                        await file.CopyToAsync(fileStream);
                    }
                    return Ok(new { filePath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Không tìm thây");
            }
        }

        [Route("download")]
        [HttpPost]
        public IActionResult DownloadData([FromBody] Dictionary<string, object> formData)
        {
            try
            {
                var webRoot = _env.ContentRootPath;
                string exportPath = Path.Combine(webRoot + @"\Export\DM.xlsx");
                var stream = new FileStream(exportPath, FileMode.Open, FileAccess.Read);
                return File(stream, "application/octet-stream");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("get-all-data")]
        [HttpGet]
        public IEnumerable<CayCanhModel> GetAllData()
        {
            return _CayCanhBusiness.GetAllData();
        }
        //[AllowAnonymous]
        [Route("get-by-id/{id}")]
        [HttpGet]
        public CayCanhModel GetDatabyID(int id)
        {
            return _CayCanhBusiness.GetDatabyID(id);
        }
        [Route("CayCanh-theo-the-loai-CayCanh/{id}")]
        [HttpGet]
        public List<CayCanhModel> CayCanhTheoTheLoaiCayCanh(int id)
        {
            return _CayCanhBusiness.CayCanhTheoTheLoaiCayCanh(id);
        }
        [Route("CayCanh-lien-quan/{id}")]
        [HttpGet]
        public List<CayCanhModel> CayCanhLienQuan(int id)
        {
            return _CayCanhBusiness.CayCanhLienQuan(id);
        }


        [Route("search1")]
        [HttpPost]
        public IActionResult Search1([FromBody] Dictionary<string, object> formData)
        {
            try
            {
                var page = int.Parse(formData["page"].ToString());
                var pageSize = int.Parse(formData["pageSize"].ToString());
                string MaTheLoaiCayCanh = "";
                if (formData.Keys.Contains("MaTheLoaiCayCanh") && !string.IsNullOrEmpty(Convert.ToString(formData["MaTheLoaiCayCanh"]))) { MaTheLoaiCayCanh = Convert.ToString(formData["MaTheLoaiCayCanh"]); }

                long total = 0;
                var data = _CayCanhBusiness.Search1(page, pageSize, out total, MaTheLoaiCayCanh);
                return Ok(
                    new
                    {
                        TotalItems = total,
                        Data = data,
                        Page = page,
                        PageSize = pageSize
                    }
                    );
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        [Route("search2")]
        [HttpPost]
        public IActionResult Search2([FromBody] Dictionary<string, object> formData)
        {
            try
            {
                var page = int.Parse(formData["page"].ToString());
                var pageSize = int.Parse(formData["pageSize"].ToString());
                string TenCayCanh = "";
                if (formData.Keys.Contains("TenCayCanh") && !string.IsNullOrEmpty(Convert.ToString(formData["TenCayCanh"]))) { TenCayCanh = Convert.ToString(formData["TenCayCanh"]); }

                long total = 0;
                var data = _CayCanhBusiness.Search2(page, pageSize, out total, TenCayCanh);
                return Ok(
                    new
                    {
                        TotalItems = total,
                        Data = data,
                        Page = page,
                        PageSize = pageSize
                    }
                    );
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

    }
}
