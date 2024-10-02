using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BLL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Model;

namespace API.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TheLoaiCayCanhController : ControllerBase
    {
        private ITheLoaiCayCanhBusiness _theloaiCayCanhBusiness;
        private string _path;
        private IWebHostEnvironment _env;
        public TheLoaiCayCanhController(ITheLoaiCayCanhBusiness theloaiCayCanhBusiness, IConfiguration configuration, IWebHostEnvironment env)
        {
            _theloaiCayCanhBusiness = theloaiCayCanhBusiness;
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
        public IEnumerable<TheLoaiCayCanhModel> GetAllData()
        {
            return _theloaiCayCanhBusiness.GetAllData();
        }
        //[AllowAnonymous]
        [Route("get-by-id")]
        [HttpGet]
        public TheLoaiCayCanhModel GetDatabyID(string MaTheLoaiCayCanh)
        {
            return _theloaiCayCanhBusiness.GetDatabyID(MaTheLoaiCayCanh);
        }
        [Route("create-theloaiCayCanh")]
        [HttpPost]
        public TheLoaiCayCanhModel CreateItem([FromBody] TheLoaiCayCanhModel model)
        {
            _theloaiCayCanhBusiness.Create(model);
            return model;
        }
        [Route("update-theloaiCayCanh")]
        [HttpPost]
        public TheLoaiCayCanhModel UpdateItem([FromBody] TheLoaiCayCanhModel model)
        {
            _theloaiCayCanhBusiness.Update(model);
            return model;
        }
        [Route("search")]
        [HttpPost]
        public IActionResult Search([FromBody] Dictionary<string, object> formData)
        {
            try
            {
                var page = int.Parse(formData["page"].ToString());
                var pageSize = int.Parse(formData["pageSize"].ToString());
                string the_loai_CayCanh = "";
                if (formData.Keys.Contains("the_loai_CayCanh") && !string.IsNullOrEmpty(Convert.ToString(formData["the_loai_CayCanh"]))) { the_loai_CayCanh = Convert.ToString(formData["the_loai_CayCanh"]); }
                long total = 0;
                var data = _theloaiCayCanhBusiness.Search(page, pageSize, out total, the_loai_CayCanh);
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
        [Route("search1")]
        [HttpPost]
        public IActionResult Search1([FromBody] Dictionary<string, object> formData)
        {
            try
            {
                var page = int.Parse(formData["page"].ToString());
                var pageSize = int.Parse(formData["pageSize"].ToString());
                string the_loai_CayCanh = "";
                if (formData.Keys.Contains("the_loai_CayCanh") && !string.IsNullOrEmpty(Convert.ToString(formData["the_loai_CayCanh"]))) { the_loai_CayCanh = Convert.ToString(formData["the_loai_CayCanh"]); }
                string ma_the_loai_CayCanh = "";
                if (formData.Keys.Contains("ma_the_loai_CayCanh") && !string.IsNullOrEmpty(Convert.ToString(formData["ma_the_loai_CayCanh"]))) { ma_the_loai_CayCanh = Convert.ToString(formData["ma_the_loai_CayCanh"]); }
                long total = 0;
                var data = _theloaiCayCanhBusiness.Search1(page, pageSize, out total, the_loai_CayCanh, ma_the_loai_CayCanh);
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
        [Route("delete-theloaiCayCanh")]
        [HttpGet]
        public bool Delete(int MaTheLoaiCayCanh)
        {
            return _theloaiCayCanhBusiness.Delete(MaTheLoaiCayCanh);
        }
    }
}
