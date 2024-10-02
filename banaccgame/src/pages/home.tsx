import Marquee from "react-fast-marquee";
import { Init, ShowLeft, ShowRight } from "../utils/slide_show";

import '../assets/css/style_home.css'
import { getAccGame } from "../services/home.services";
import { Link, useNavigate } from "react-router-dom";
import { closeNav, closeNavMid, openNav, openNavMid } from "../utils/hide_menu";
import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { cartState } from "../constant/recoil";
var myIndex = 0;
var timerID: any;
const Home = function () {
  useEffect(() => {
    function carousel() {
      var i;
      var x = document.getElementsByClassName("slide_auto");
      for (i = 0; i < x.length; i++) {
        (x[i] as HTMLElement).style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1;
      }
      (x[myIndex - 1] as HTMLElement).style.display = "block";
    }
    timerID = setInterval(() => carousel(), 4000);
    Init();
    carousel();
    return () => {
      clearInterval(timerID);
    } 
  }, []);
  const navigate = useNavigate();
  const [accgame, setAccGame] = useState([]);
  const [cart, setCart] = useRecoilState(cartState);
  const [search_content, setSearchContent] = useState("");
  function changeInputValue(e: any) {
    setSearchContent(e.target.value);
  }
  function search(formData: any) {
    formData.preventDefault();
    navigate("/search?search_content=" + search_content);
  }
  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(list);
    async function loadData() {
      let data = await getAccGame();
      data = data.slice(0, 6); 
      setAccGame(data);
    }
    loadData();
  }, []);
  return (
    <>
      <section className="slide-out">
        <div className="slideshow">
          <img
            className="silde_img slide_auto"
            src="img/slide1.jpg"
          />
          <img
            className="silde_img slide_auto"
            src="img/slide 2.jpg"
          />
          <img
            className="silde_img slide_auto"
            src="img/slide3.jpg"
          />
          <img
            className="silde_img slide_auto"
            src="img/slide4.jpg"
          />
          <img
            className="silde_img slide_auto"
            src="img/slide5.jpg"
          />
          <button onClick={() => ShowLeft()} className="display-left black">
            <i className="fas fa-caret-left"></i>
          </button>
          <button onClick={() => ShowRight()} className="display-right black">
            <i className="fas fa-caret-right"></i>
          </button>
        </div>
        <script src="js/slide_show.js"></script>
      </section>
      <section className="run-text">
        <div className="r-txt">
          <b>Liên hệ với Thiên Mộc Hương</b>
          <i className="fas fa-caret-right"></i>
        </div>
        <div className="r1-txt">
          <Marquee>
            THIÊN MỘC HƯƠNG &nbsp; Điện thoại: 0948.098.195 - 0975.992.125
            &nbsp; Địa chỉ: 300 Nguyễn Lương Bằng, Hải Dương
          </Marquee>
        </div>
      </section>
      <section className="module_products">
        <div className="product_title" style={{ position: "relative" }}>
          <a href="#">
            <b>SẢN PHẨM BÁN CHẠY</b>
          </a>
        </div>
        <div className="row">
   
          {accgame.map((x: any) => (
                     <div className="col-2 col-s-3 content">
                     <a
                       href={"/detail/" + x.maAccGame}
                       title="Màn hình máy tính MSI Optix MAG322CQRV Cong 2K 144Hz"
                     >
                       <img src= {x.email} />
                     </a>
                     <div className="text_product_1">
                     <Link
                      to={"/detail/" + x.maAccGame}
                      title="Laptop Apple Macbook Air MGN93 (MGN93SA/A)/ Silver/ M1 Chip/ RAM 8GB/ 256GB SSD/ 13.3 inch Retina/ Touch ID/ Mac OS/ 1 Yr"
                    ><a
                         href={"/detail/" + x.maAccGame}
                         title="Màn hình máy tính MSI Optix MAG322CQRV Cong 2K 144Hz"
                       >
                         {x.tenAccGame}
                       </a>
                     
                  
                    </Link>
                       <br />
                       <span className="span_price_up"> {x.giaAccGame}₫</span>
                       <span className="span_price_down">
                         <b>{x.giaAccGame}đ</b>
                       </span>
                     </div>
                   </div>
            ))}
        </div>
      </section>
      <section className="module_products">
        <div className="product_title">
          <a href="#">
            <b>
              Vòng trầm Thiên Mộc Hương 
              <span>
                <a href="#" className="span_product_title">
                  Xem tất cả
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </span>
            </b>
          </a>
        </div>
        <div className="row">
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng Trầm Hương 108 Hạt Đơn – Trầm Tốc Việt Nam">
              <img src="img/DH_WORKSTATION/vòng1.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Acc LMHT - Rank Cao">Vòng Trầm Hương 108 Hạt Đơn – Trầm Tốc Việt Nam</a>
              <br />
              <span className="span_price_up">5.900.000₫</span>
              <span className="span_price_down">
                <b>4.900.000đ</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng tay Trầm Hương Lá Bùa Tây Tạng – Trầm Tốc Việt Nam">
              <img src="img/DH_WORKSTATION/vòng2.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng tay Trầm Hương Lá Bùa Tây Tạng – Trầm Tốc Việt Nam">Vòng tay Trầm Hương Lá Bùa Tây Tạng – Trầm Tốc Việt Nam</a>
              <br />
              <span className="span_price_up">3.000.000₫</span>
              <span className="span_price_down">
                <b>1.900.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng Trầm Hương Minh Nguyệt Trầm – Trầm Tốc Việt Nam">
              <img src="img/DH_WORKSTATION/vòng3.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng Trầm Hương Minh Nguyệt Trầm – Trầm Tốc Việt Nam">Vòng Trầm Hương Minh Nguyệt Trầm – Trầm Tốc Việt Nam</a>
              <br />
              <span className="span_price_up">5.000.000₫</span>
              <span className="span_price_down">
                <b>4.000.000</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng Trầm Hương Tròn Đơn Tỳ Hưu Bạc Thái – Trầm Tốc Việt Nam">
              <img src="img/DH_WORKSTATION/vòng4.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng Trầm Hương Tròn Đơn Tỳ Hưu Bạc Thái – Trầm Tốc Việt Nam">Vòng Trầm Hương Tròn Đơn Tỳ Hưu Bạc Thái – Trầm Tốc Việt Nam</a>
              <br />
              <span className="span_price_down">
                <b>Giá: 200.000đ</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng tay Trầm Hương Tứ Diệp Bảo – Trầm Tốc Việt Nam">
              <img src="img/DH_WORKSTATION/vòng5.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng tay Trầm Hương Tứ Diệp Bảo – Trầm Tốc Việt Nam">Vòng tay Trầm Hương Tứ Diệp Bảo – Trầm Tốc Việt Nam</a>
              <br />
              <span className="span_price_up">5.990.000₫</span>
              <span className="span_price_down">
                <b>5.500.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng tay trầm hương 108 hạt Phù Liên – Trầm Tốc Việt Nam">
              <img src="img/DH_WORKSTATION/vòng6.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng tay trầm hương 108 hạt Phù Liên – Trầm Tốc Việt Nam">Vòng tay trầm hương 108 hạt Phù Liên – Trầm Tốc Việt Nam</a>
              <br />
              <span className="span_price_up">5.000.000₫</span>
              <span className="span_price_down">
                <b>4.000.000</b>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="module_products">
        <div className="product_title">
          <a href="#">
            <b>
            Vòng Tay Phong Thủy Cao Cấp
              <span>
                <a href="#" className="span_product_title">
                  Xem tất cả
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </span>
            </b>
          </a>
        </div>
        <div className="row">
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng Trầm Hương 108 hạt Ngân Tú Bảo Trầm – Mệnh Hỏa">
              <img src="img/GAMING_STREAMING/vong1.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng Trầm Hương 108 hạt Ngân Tú Bảo Trầm – Mệnh Hỏa">
              Vòng Trầm Hương 108 hạt Ngân Tú Bảo Trầm – Mệnh Hỏa
              </a>
              <br />
              <span className="span_price_up">6.400.000₫</span>
              <span className="span_price_down">
                <b>4.890.000đ</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng Trầm Hương 108 hạt Ngân Tú Bảo Trầm – Mệnh Kim">
              <img src="img/GAMING_STREAMING/vong2.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng Trầm Hương 108 hạt Ngân Tú Bảo Trầm – Mệnh Kim">
              Vòng Trầm Hương 108 hạt Ngân Tú Bảo Trầm – Mệnh Kim
              </a>
              <br />
              <span className="span_price_up">32.890.000₫</span>
              <span className="span_price_down">
                <b>30.490.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng Trầm Hương 108 hạt Ngân Tú Bảo Trầm – Mệnh Mộc">
              <img src="img/GAMING_STREAMING/vong3.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng Trầm Hương 108 hạt Ngân Tú Bảo Trầm – Mệnh Mộc">
              Vòng Trầm Hương 108 hạt Ngân Tú Bảo Trầm – Mệnh Mộc
              </a>
              <br />
              <span className="span_price_up">33.200.000₫</span>
              <span className="span_price_down">
                <b>31.590.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng tay đá Ngọc bích – Mệnh Mộc">
              <img src="img/GAMING_STREAMING/vong4.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng tay đá Ngọc bích – Mệnh Mộc">
              Vòng tay đá Ngọc bích – Mệnh Mộc
              </a>
              <br />
              <span className="span_price_up">44.930.000₫</span>
              <span className="span_price_down">
                <b>44.190.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng tay đá Ruby tự nhiên – Mệnh Thổ">
              <img src="img/GAMING_STREAMING/vong5.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng tay đá Ruby tự nhiên – Mệnh Thổ">
              Vòng tay đá Ruby tự nhiên – Mệnh Thổ
              </a>
              <br />
              <span className="span_price_up">36.090.000₫</span>
              <span className="span_price_down">
                <b>35.090.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng tay đá Kyanite Đồng Tâm Ngân Tú – Mệnh Thủy">
              <img src="img/GAMING_STREAMING/vong6.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng tay đá Kyanite Đồng Tâm Ngân Tú – Mệnh Thủy">
              Vòng tay đá Kyanite Đồng Tâm Ngân Tú – Mệnh Thủy
              </a>
              <br />
              <span className="span_price_up">55.500.000₫</span>
              <span className="span_price_down">
                <b>53.500.000₫</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="module_products">
        <div className="product_title">
          <a href="#">
            <b>
            Mỹ Nghệ Trầm Hương
              <span>
                <a href="#" className="span_product_title">
                  Xem tất cả
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </span>
            </b>
          </a>
        </div>
        <div className="row">
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Gốc Trầm Cảnh Tự Nhiên, Nguyên Chất | Thiên Mộc Hương"
            >
              <img src="img/VANPHONG_AIO_MINI/anh1.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Gốc Trầm Cảnh Tự Nhiên, Nguyên Chất | Thiên Mộc Hương"
              >
                Gốc Trầm Cảnh Tự Nhiên, Nguyên Chất | Thiên Mộc Hương
              </a>
              <br />
              <span className="span_price_up">215.990.000₫</span>
              <span className="span_price_down">
                <b>214.590.000đ</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Tượng Trầm Philippines – Tượng Phật Bà Quan Âm Lớn"
            >
              <img src="img/VANPHONG_AIO_MINI/anh2.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Tượng Trầm Philippines – Tượng Phật Bà Quan Âm Lớn"
              >
                Tượng Trầm Philippines – Tượng Phật Bà Quan Âm Lớn
              </a>
              <br />
              <span className="span_price_up">217.923.300₫</span>
              <span className="span_price_down">
                <b>216.490.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Tượng Trầm Philippines – Tượng Phật Bà Quan Âm Nhỏ"
            >
              <img src="img/VANPHONG_AIO_MINI/anh3.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Tượng Trầm Philippines – Tượng Phật Bà Quan Âm Nhỏ"
              >
                Tượng Trầm Philippines – Tượng Phật Bà Quan Âm Nhỏ
              </a>
              <br />
              <span className="span_price_up">112.000.000₫</span>
              <span className="span_price_down">
                <b>111.099.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Tượng Trầm Philippines – Tượng Thiên Long che Đức Phật"
            >
              <img src="img/VANPHONG_AIO_MINI/anh4.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Tượng Trầm Philippines – Tượng Thiên Long che Đức Phật"
              >
                Tượng Trầm Philippines – Tượng Thiên Long che Đức Phật
              </a>
              <br />
              <span className="span_price_up">132.999.000₫</span>
              <span className="span_price_down">
                <b>131.399.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Tiểu Cảnh Trầm Hương Mũi Thuyền May Mắn"
            >
              <img src="img/VANPHONG_AIO_MINI/anh5.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Tiểu Cảnh Trầm Hương Mũi Thuyền May Mắn"
              >
                Tiểu Cảnh Trầm Hương Mũi Thuyền May Mắn
              </a>
              <br />
              <span className="span_price_up">18.100.000₫</span>
              <span className="span_price_down">
                <b>17.999.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Trầm Cảnh Phối Trắc Bách Diệp Cổ Thụ Đại Cát"
            >
              <img src="img/VANPHONG_AIO_MINI/anh6.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Trầm Cảnh Phối Trắc Bách Diệp Cổ Thụ Đại Cát"
              >
                Trầm Cảnh Phối Trắc Bách Diệp Cổ Thụ Đại Cát
              </a>
              <br />
              <span className="span_price_up">12.999.000₫</span>
              <span className="span_price_down">
                <b>12.399.000₫</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="module_products">
        <div className="product_title">
          <a href="#">
            <b>
            Nước Hoa Trầm Hương
              <span>
                <a href="DM_Laptop.html" className="span_product_title">
                  Xem tất cả
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </span>
            </b>
          </a>
        </div>
        <div className="row">
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Nước Hoa Mùi Trầm Hương Smokeywood 10ml"
            >
              <img src="img/LAPTOP/1.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Nước Hoa Mùi Trầm Hương Smokeywood 10ml"
              >
                Nước Hoa Mùi Trầm Hương Smokeywood 10ml
              </a>
              <br />
              <span className="span_price_up">990.000₫</span>
              <span className="span_price_down">
                <b>590.000đ</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Nước Hoa Mùi Trầm Hương Lost in the Flora 10ml"
            >
              <img src="img/LAPTOP/2.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Nước Hoa Mùi Trầm Hương Lost in the Flora 10ml"
              >
                Nước Hoa Mùi Trầm Hương Lost in the Flora 10ml
              </a>
              <br />
              <span className="span_price_up">490.000₫</span>
              <span className="span_price_down">
                <b>790.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="Laptop_ASUS_ZenBook_UX325EA_EG079T.html"
              title="Nước Hoa Trầm Hương Cosy Woods 10ml"
            >
              <img src="img/LAPTOP/3.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="Laptop_ASUS_ZenBook_UX325EA_EG079T.html"
                title="Nước Hoa Trầm Hương Cosy Woods 10ml"
              >
                Nước Hoa Trầm Hương Cosy Woods 10ml
              </a>
              <br />
              <span className="span_price_up">990.000₫</span>
              <span className="span_price_down">
                <b>390.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Nước Hoa Mùi Trầm Hương Macho Delight 10ml">
              <img src="img/LAPTOP/4.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Nước Hoa Mùi Trầm Hương Macho Delight 10ml">
              Nước Hoa Mùi Trầm Hương Macho Delight 10ml
              </a>
              <br />
              <span className="span_price_up">690.000₫</span>
              <span className="span_price_down">
                <b>490.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Nước Hoa Mùi Trầm Hương Lidia Eaude – Cosy Woods 30ml"
            >
              <img src="img/LAPTOP/5.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Nước Hoa Mùi Trầm Hương Lidia Eaude – Cosy Woods 30ml"
              >
                Nước Hoa Mùi Trầm Hương Lidia Eaude – Cosy Woods 30ml
              </a>
              <br />
              <span className="span_price_up">2.490.000₫</span>
              <span className="span_price_down">
                <b>1.890.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="
              Bộ sưu tập nước hoa trầm hương Agarmansion The Collection"
            >
              <img src="img/LAPTOP/6.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="
                Bộ sưu tập nước hoa trầm hương Agarmansion The Collection"
              >
                Bộ sưu tập nước hoa trầm hương Agarmansion The Collection
              </a>
              <br />
              <span className="span_price_up">9.999.000₫</span>
              <span className="span_price_down">
                <b>7.999.000đ</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="module_products">
        <div className="product_title">
          <a href="#">
            <b>
            Nhang Trầm Hương | Chỉ từ 99K
              <span>
                <a href="DM_ManHinh.html" className="span_product_title">
                  Xem tất cả
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </span>
            </b>
          </a>
        </div>
        <div className="row">
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Nhang Trầm Hương Đại Cát Nhị Phẩm (8 năm) – Loại dài 30cm/Hộp 100 cây"
            >
              <img src="img/MANHINH/1.jpeg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Nhang Trầm Hương Đại Cát Nhị Phẩm (8 năm) – Loại dài 30cm/Hộp 100 cây"
              >
                Nhang Trầm Hương Đại Cát Nhị Phẩm (8 năm) – Loại dài 30cm/Hộp 100 cây
              </a>
              <br />
              <span className="span_price_up">135.000₫</span>
              <span className="span_price_down">
                <b>99.000đ</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Nụ Trầm Hương Xông Nhà 16 Năm Loại Cao Cấp – Hộp 40 nụ"
            >
              <img src="img/MANHINH/2.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Nụ Trầm Hương Xông Nhà 16 Năm Loại Cao Cấp – Hộp 40 nụ"
              >
                Nụ Trầm Hương Xông Nhà 16 Năm Loại Cao Cấp – Hộp 40 nụ
              </a>
              <br />
              <span className="span_price_up">7.690.000₫</span>
              <span className="span_price_down">
                <b>6.490.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Combo Nhang Nụ 16 Năm Cao Cấp Kèm Lư Đồng Xông Trầm Cao Cấp"
            >
              <img src="img/MANHINH/3.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Combo Nhang Nụ 16 Năm Cao Cấp Kèm Lư Đồng Xông Trầm Cao Cấp"
              >
                Combo Nhang Nụ 16 Năm Cao Cấp Kèm Lư Đồng Xông Trầm Cao Cấp
              </a>
              <br />
              <span className="span_price_up">7.490.000₫</span>
              <span className="span_price_down">
                <b>6.190.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Nhang khoanh Trầm Hương 4 Giờ Loại Thường – 30 khoanh"
            >
              <img src="img/MANHINH/4.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Nhang khoanh Trầm Hương 4 Giờ Loại Thường – 30 khoanh"
              >
               Nhang khoanh Trầm Hương 4 Giờ Loại Thường – 30 khoanh
              </a>
              <br />
              <span className="span_price_up">9.490.000₫</span>
              <span className="span_price_down">
                <b>8.990.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="MSI_Optix_MAG322CQRV.html"
              title="Combo Nhang Nụ 12 Năm Loại Thường Kèm Lư Đồng Xông Trầm Cao Cấp"
            >
              <img src="img/MANHINH/5.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="MSI_Optix_MAG322CQRV.html"
                title="Combo Nhang Nụ 12 Năm Loại Thường Kèm Lư Đồng Xông Trầm Cao Cấp"
              >
                Combo Nhang Nụ 12 Năm Loại Thường Kèm Lư Đồng Xông Trầm Cao Cấp
              </a>
              <br />
              <span className="span_price_up">12.500.000₫</span>
              <span className="span_price_down">
                <b>12.150.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Combo Nhang Nụ Trầm Đặc Biệt – Tặng Miễn Phí Thác Khói – Hộp 40 nụ"
            >
              <img src="img/MANHINH/6.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Combo Nhang Nụ Trầm Đặc Biệt – Tặng Miễn Phí Thác Khói – Hộp 40 nụ"
              >
                Combo Nhang Nụ Trầm Đặc Biệt – Tặng Miễn Phí Thác Khói – Hộp 40 nụ
              </a>
              <br />
              <span className="span_price_up">20.990.000₫</span>
              <span className="span_price_down">
                <b>19.888.000đ</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="module_products">
        <div className="product_title">
          <a href="#">
            <b>
            Dụng Cụ Đốt Trầm Hương Cao Cấp
              <span>
                <a href="#" className="span_product_title">
                  Xem tất cả
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </span>
            </b>
          </a>
        </div>
        <div className="row">
          <div className="col-2 col-s-3 content">
            <a href="#" title="TThác Nước Phong Thủy Mèo Thần Tài Thu Hút Tài Lộc">
              <img src="img/LINHKIEN/1.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Thác Nước Phong Thủy Mèo Thần Tài Thu Hút Tài Lộc">
              Thác Nước Phong Thủy Mèo Thần Tài Thu Hút Tài Lộc
              </a>
              <br />
              <span className="span_price_up">3.908.000₫</span>
              <span className="span_price_down">
                <b>3.750.000đ</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Thác Nước Phong Thủy Trầm Hương Mã Đáo Thành Công">
              <img src="img/LINHKIEN/2.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Thác Nước Phong Thủy Trầm Hương Mã Đáo Thành Công">
              Thác Nước Phong Thủy Trầm Hương Mã Đáo Thành Công
              </a>
              <br />
              <span className="span_price_up">1.390.000₫</span>
              <span className="span_price_down">
                <b>1.250.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Tiểu Cảnh Thác Khói Trầm Hương Hươu Trắng May Mắn, Tài Lộc">
              <img src="img/LINHKIEN/3.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Tiểu Cảnh Thác Khói Trầm Hương Hươu Trắng May Mắn, Tài Lộc">
              Tiểu Cảnh Thác Khói Trầm Hương Hươu Trắng May Mắn, Tài Lộc
              </a>
              <br />
              <span className="span_price_up">3.690.000₫</span>
              <span className="span_price_down">
                <b>2.890.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Bộ Dụng Cụ Thưởng Bột Trầm Cao Cấp Bằng Đồng 10 Món">
              <img src="img/LINHKIEN/4.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Bộ Dụng Cụ Thưởng Bột Trầm Cao Cấp Bằng Đồng 10 Món">
              Bộ Dụng Cụ Thưởng Bột Trầm Cao Cấp Bằng Đồng 10 Món
              </a>
              <br />
              <span className="span_price_up">6.190.000₫</span>
              <span className="span_price_down">
                <b>5.790.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Bộ Dụng Cụ Thưởng Trầm Cao Cấp 12 Món"
            >
              <img src="img/LINHKIEN/5.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Bộ Dụng Cụ Thưởng Trầm Cao Cấp 12 Món"
              >
                Bộ Dụng Cụ Thưởng Trầm Cao Cấp 12 Món
              </a>
              <br />
              <span className="span_price_up">9.690.000₫</span>
              <span className="span_price_down">
                <b>8.490.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Lư Đồng Đốt Trầm Hương 3 Chân Loại Cao Cấp">
              <img src="img/LINHKIEN/6.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Lư Đồng Đốt Trầm Hương 3 Chân Loại Cao Cấp">
              Lư Đồng Đốt Trầm Hương 3 Chân Loại Cao Cấp
              </a>
              <br />
              <span className="span_price_up">1.390.000₫</span>
              <span className="span_price_down">
                <b>1.250.000₫</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="module_products">
        <div className="product_title">
          <a href="#">
            <b>
            Đồ Gỗ Mỹ Nghệ
              <span>
                <a href="#" className="span_product_title">
                  Xem tất cả
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </span>
            </b>
          </a>
        </div>
        <div className="row">
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Cặp Lục Bình Gỗ Hương Đỏ Cao 107cm Đường Kính 40cm Đẹp Giá Tốt"
            >
              <img src="img/GAMING_GEAR/1.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Cặp Lục Bình Gỗ Hương Đỏ Cao 107cm Đường Kính 40cm Đẹp Giá Tốt"
              >
                Cặp Lục Bình Gỗ Hương Đỏ Cao 107cm Đường Kính 40cm Đẹp Giá Tốt
              </a>
              <br />
              <span className="span_price_up">15.000.000₫</span>
              <span className="span_price_down">
                <b>14.745.000đ</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Đồng Hồ Quả Lắc Tháp 3D Gỗ Mun Lào Cao Cấp Giá Tốt">
              <img src="img/GAMING_GEAR/2.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Đồng Hồ Quả Lắc Tháp 3D Gỗ Mun Lào Cao Cấp Giá Tốt">
              Đồng Hồ Quả Lắc Tháp 3D Gỗ Mun Lào Cao Cấp Giá Tốt
              </a>
              <br />
              <span className="span_price_up">33.850.000₫</span>
              <span className="span_price_down">
                <b>32.795.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Tranh Gỗ Đồng Hồ Chạm Thư Pháp Chữ Tâm Dát Vàng Đẹp">
              <img src="img/GAMING_GEAR/3.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Tranh Gỗ Đồng Hồ Chạm Thư Pháp Chữ Tâm Dát Vàng Đẹp">
              Tranh Gỗ Đồng Hồ Chạm Thư Pháp Chữ Tâm Dát Vàng Đẹp
              </a>
              <br />
              <span className="span_price_up">1.650.000₫</span>
              <span className="span_price_down">
                <b>1.570.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Đĩa Gỗ Nghệ Thuật Chạm Mã Đáo Thành Công Phong Thủy Đẹp Giá Tốt">
              <img src="img/GAMING_GEAR/4.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Đĩa Gỗ Nghệ Thuật Chạm Mã Đáo Thành Công Phong Thủy Đẹp Giá Tốt">
              Đĩa Gỗ Nghệ Thuật Chạm Mã Đáo Thành Công Phong Thủy Đẹp Giá Tốt
              </a>
              <br />
              <span className="span_price_up">1.679.350₫</span>
              <span className="span_price_down">
                <b>1.647.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Đốc Lịch Gỗ Hương Tân Niên Cầu Tài Lộc Đẹp Giá Tốt"
            >
              <img src="img/GAMING_GEAR/5.png" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Đốc Lịch Gỗ Hương Tân Niên Cầu Tài Lộc Đẹp Giá Tốt"
              >
                Đốc Lịch Gỗ Hương Tân Niên Cầu Tài Lộc Đẹp Giá Tốt
              </a>
              <br />
              <span className="span_price_up">4.200.000₫</span>
              <span className="span_price_down">
                <b>3.899.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Khay Uống Trà Đạo Chân Cong Gỗ Hương Đá Tự Nhiên Đẹp">
              <img src="img/GAMING_GEAR/6.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Khay Uống Trà Đạo Chân Cong Gỗ Hương Đá Tự Nhiên Đẹp">
              Khay Uống Trà Đạo Chân Cong Gỗ Hương Đá Tự Nhiên Đẹp
              </a>
              <br />
              <span className="span_price_up">2.850.000₫</span>
              <span className="span_price_down">
                <b>2.795.000₫</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="module_products">
        <div className="product_title">
          <a href="#">
            <b>
            PHỤ KIỆN KHÁC
              <span>
                <a href="#" className="span_product_title">
                  Xem tất cả
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </span>
            </b>
          </a>
        </div>
        <div className="row">
          <div className="col-2 col-s-3 content">
            <a href="#" title="Đèn led đế gỗ">
              <img src="img/PHUKIEN/1.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Đèn led đế gỗ">
              Đèn led đế gỗ
              </a>
              <br />
              <span className="span_price_up">490.000₫</span>
              <span className="span_price_down">
                <b>390.000đ</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Bút Trầm Hương"
            >
              <img src="img/PHUKIEN/2.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Bút Trầm Hương"
              >
                Bút Trầm Hương
              </a>
              <br />
              <span className="span_price_up">2.700.000₫</span>
              <span className="span_price_down">
                <b>2.590.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Túi Trầm Bình An"
            >
              <img src="img/PHUKIEN/3.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Túi Trầm Bình An"
              >
                Túi Trầm Bình An
              </a>
              <br />
              <span className="span_price_up">599.000₫</span>
              <span className="span_price_down">
                <b>229.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Dây treo xe ô tô Bất Động Minh Vương"
            >
              <img src="img/PHUKIEN/4.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Dây treo xe ô tô Bất Động Minh Vương"
              >
                Dây treo xe ô tô Bất Động Minh Vương
              </a>
              <br />
              <span className="span_price_up">300.000₫</span>
              <span className="span_price_down">
                <b>249.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Dây chuyền gỗ Trầm Hương Mystery"
            >
              <img src="img/PHUKIEN/5.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Dây chuyền gỗ Trầm Hương Mystery"
              >
                Dây chuyền gỗ Trầm Hương Mystery
              </a>
              <br />
              <span className="span_price_up">1.400.000₫</span>
              <span className="span_price_down">
                <b>1.290.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Quạt Trầm Hương Cao Cấp"
            >
              <img src="img/PHUKIEN/6.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Quạt Trầm Hương Cao Cấp"
              >
                Quạt Trầm Hương Cao Cấp
              </a>
              <br />
              <span className="span_price_up">5.700.000₫</span>
              <span className="span_price_down">
                <b>5.590.000₫</b>
              </span>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default Home;
