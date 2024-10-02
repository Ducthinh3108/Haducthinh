import { useEffect, useState } from "react";
import "../assets/css/style_detail_screen.css";
import { addToCart } from "../utils/cart";
import { currentSlide, showSlides } from "../utils/image_product";
import { useParams } from "react-router-dom";
import { getItem } from "../services/detail.services";
import { useRecoilState } from "recoil";
import { cartState } from "../constant/recoil";
type DataParams = {
  id: string;
};
const Detail = function () {
  const { id } = useParams<DataParams>();
  const [data, setData] = useState({ maAccGame: null, tenAccGame: null, giaAccGame: null, email:null });
  const [cart, setCart] = useRecoilState(cartState);
  useEffect(() => {
    showSlides(1);
    async function loadData(id: any) {
      let items = await getItem(id);
      setData(items);
    }
    loadData(id);
  }, [id]);
  return (
    <>
      <div className="link-out">
        <div className="link">
          <a href="index.html">Trang chủ</a>{" "}
          <i className="fas fa-caret-right"></i>
          <a href="DM_Laptop.html">Thiên Mộc Hương</a>{" "}
          <i className="fas fa-caret-right"></i> {data.tenAccGame}
        </div>
      </div>
      <section className="content-inner">
        <div className="row">
          <div className="colc-4 colc-s-6 content">
            <div className="container">
              <div className="mySlides">
                <img src= {"../"+data.email} />
              </div>
              {/* <div className="row">
                <div className="column">
                  <img
                    className="demo cursor"
                    src="../img/LAPTOP/f.jpg"
                    onClick={() => currentSlide(1)}
                  />
                </div>
              </div>  */}
            </div>
          </div>

          <div className="colc-5 colc-s-6 content padding-le">
            <div className="name">{data.tenAccGame}</div>
            <div className="evaluate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>{" "}
              <span className="sp-eval">
                <a href="#cont-cmt">(1 đánh giá của khách hàng)</a>
              </span>
            </div>
            <div className="price">
              <span className="up">21.990.000₫</span>
              <span className="down">{data.giaAccGame}₫</span>
            </div>
            <button
              type="button"
              className="btnAdd"
              onClick={() => {
                addToCart(data);
                let list = JSON.parse(localStorage.getItem('cart') || '[]');
                setCart(list);
              }}
            >
              <i className="fas fa-cart-plus"></i> Thêm vào giỏ
            </button>
            <script src="js/cart.js"></script>
            <div className="gift">
              <div className="title">
                <i className="fas fa-gift"></i> Giới Thiệu
              </div>
              <div className="content">
              <div className="name">{data.tenAccGame}</div> phù hộ cho cả nam và nữ, được thiết kế cho nam giới mang ý nghĩa xua tan các năng lượng xấu và thu hút sự may mắn đến cho người sở hữu vòng tay.
                
              </div>
            </div> 
          </div>
          <div className="colc-3 content" id="r">
            <div className="commitment">
              <div className="title">CAM KẾT BÁN HÀNG</div>
              <div className="content">
                <li>Sản phẩm 100% chính hãng</li>
                <li>Sản phẩm mới 100%</li>
                <li>Hoàn tiền 120% khi phát hiện hàng giả</li>
                <li>Hỗ trợ nhanh khi cần</li>
                <li>Mua hàng nhanh: 0948098195</li>
              </div>
            </div>
            <div className="commitment1">
              <div className="title">GIAO HÀNG</div>
              <div className="content">
                <li>Thanh toán khi nhận hàng</li>
                <li>Xem hàng trước khi thanh toán</li>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tab">
        <div className="tab1">
          <a href="#MoTa">Đặc điểm nổi bật</a>
        </div>
        <div className="tab1">
          <a href="#BinhLuan">Đánh giá</a>
        </div>
        <div className="tab1">
          <a href="#TuVan">Tư vấn & bán hàng qua Facebook</a>
        </div>
      </div>
      <section className="describe">
        <div className="title padding_title" id="MoTa">
          MÔ TẢ
        </div>
        <div className="title1">Thông tin sản phẩm:</div>
        <div className="parameter">
          <table>
            <tr>
              <td>Chất Liệu</td>
              <td>Trầm Tốc</td>
            </tr>
            <tr>
              <td>Loại Charm</td>
              <td>Đá tổng hợp</td>
            </tr>
            <tr>
              <td>Nguồn Gốc</td>
              <td>Việt Nam</td>
            </tr>
            <tr>
              <td>Số Lượng Hạt</td>
              <td>6mm: 25-29 hạt
                  8-10mm: 17 – 21 hạt
                  12mm: 17 – 18 hạt</td>
            </tr>
            <tr>
              <td>Tuổi Trầm</td>
              <td>
                  12 – 14 năm Tích Trầm
              </td>
            </tr>
            <tr>
              <td>Sử Dụng</td>
              <td>
                  Nam, Nữ, Quà tặng cho người thân, cấp trên, bạn bè. Mang đến may mắn, thịnh vượng, phát tài phát lộc, hộ mệnh trừ tà. Quà tặng ý nghĩa cho Phật tử
              </td>
            </tr>
            <tr>
              <td className="td-last">Bảo mật</td>
              <td className="td-last">None</td>
            </tr>
          </table>
        </div>
        <div className="title1">Giới thiệu sản phẩm:</div>
        <p style={{ marginTop: "10px" }}>
            Mô tả sản phẩm vòng tay Trầm Hương
            Sản phẩm được chế tác từ loại gỗ trầm Tốc Việt Nam được lấy từ môi trường tự nhiên, không hề bị tác động bởi bàn tay con người. Đặc biệt, xuất xứ của trầm là từ rừng Hà Tĩnh, sinh trưởng tự nhiên nên chất lượng vòng tốt hơn hẳn các dòng tốc ngoài thị trường. Với màu vàng nâu sẫm đặc trưng cùng những đường vân trầm xoáy, sắc nét, sản phẩm hứa hẹn sẽ mang đến tính thẩm mỹ cao cùng nhiều công dụng tuyệt vời cho người đeo.
        </p>
        <img src="../img/LAPTOP/f.jpg" />
        
      </section>
      <section className="comment">
        <div className="title padding_title" id="BinhLuan">
          BÌNH LUẬN
        </div>
        <div className="title1 padding_title" id="cont-cmt">
          1 đánh giá cho {data.tenAccGame}
        </div>
        <div className="box">
          <span className="point">
            5.00 <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
          <span className="count">
            <a href="#cont-cmt">1 đánh giá của khách hàng</a>
          </span>
          <div className="ratio">
            <div className="level">
              5<i className="fas fa-star"></i>
            </div>
            <div className="progressBar">
              <div className="percentage"></div>
            </div>
            <div className="status">
              <span className="sp-status">100%</span> | 1 đánh giá
            </div>
          </div>
          <div className="ratio">
            <div className="level">
              4<i className="fas fa-star"></i>
            </div>
            <div className="progressBar"></div>
            <div className="status">
              <span className="sp-status">0%</span> | 0 đánh giá
            </div>
          </div>
          <div className="ratio">
            <div className="level">
              3<i className="fas fa-star"></i>
            </div>
            <div className="progressBar"></div>
            <div className="status">
              <span className="sp-status">0%</span> | 0 đánh giá
            </div>
          </div>
          <div className="ratio">
            <div className="level">
              2<i className="fas fa-star"></i>
            </div>
            <div className="progressBar"></div>
            <div className="status">
              <span className="sp-status">0%</span> | 0 đánh giá
            </div>
          </div>
          <div className="ratio">
            <div className="level">
              1<i className="fas fa-star"></i>
            </div>
            <div className="progressBar"></div>
            <div className="status">
              <span className="sp-status">0%</span> | 0 đánh giá
            </div>
          </div>
          <button type="button" className="btn-right" id="ri">
            ĐÁNH GIÁ NGAY
          </button>
          <button type="button" className="btn-bottom" id="bo">
            ĐÁNH GIÁ NGAY
          </button>
        </div>
        <div className="cmt">
          <div className="nameUser">Thuan Nguyen</div>
          <div className="content-cmt">
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            Quá tốt trong tầm giá
          </div>
          <div className="time">
            <a href="#">Thảo luận</a> <span>• 14/05/2021</span>
          </div>
          <hr />
        </div>
        <div className="box2">
          <textarea
            name="mota"
            rows={4}
            cols={167}
            placeholder="Mời bạn tham gia thảo luận, vui lòng nhập Tiếng Việt có dấu"
          ></textarea>
          <div className="content">
            <form method="POST">
              <input
                type="text"
                name="name"
                id="name"
                value=""
                placeholder="Họ tên (bắt buộc)"
                className="txtbox"
              />
              <input
                type="text"
                name="mail"
                id="mail"
                value=""
                placeholder="Email"
                className="txtbox"
              />
              <input
                type="button"
                name="send"
                id="send"
                value="Gửi"
                className="btn-send"
              />
            </form>
          </div>
        </div>
        <div className="content-cmt1">Chưa có bình luận nào</div>
      </section>
      <section className="advisory">
        <div className="title padding_title" id="TuVan">
          TƯ VẤN BÁN HÀNG QUA FACEBOOK
        </div>
        <div className="count">
          0 bình luận{" "}
          <span className="sp-sort">
            Sắp xếp theo
            <select id="sort" name="sort">
              <option value="old">Cũ nhất</option>
              <option value="new">Mới nhất</option>
            </select>
          </span>
        </div>
        <div className="add-comment" style={{ position: "relative" }}>
          <div className="avatar">
            <i className="fas fa-user"></i>
          </div>
          <div className="content">
            <textarea
              name="mota"
              rows={3}
              cols={156}
              placeholder="Thêm bình luận..."
            ></textarea>
            <div className="content-bot">
              <input type="checkbox" id="uptofb" name="uptofb" />
              <label htmlFor="uptofb">Cũng đang lên Facebook</label>
              <input type="button" value="Đăng" className="btn-up" />
            </div>
          </div>
        </div>
        <hr />
        <div className="public-fb">
          <i className="fab fa-facebook-square">
            {" "}
            <a
              href="https://developers.facebook.com/products/social-plugins/comments/?utm_campaign=social_plugins&utm_medium=offsite_pages&utm_source=comments_plugin"
              target="_blank"
            >
              Plugin bình luận trên Facebook
            </a>
          </i>
        </div>
      </section>
      <section className="module_products">
        <div className="product_title">
          <a href="DM_Laptop.html">
            <b>SẢN PHẨM TƯƠNG TỰ</b>
          </a>
        </div>
        <div className="row">
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Vòng Trầm Hương 108 Hạt Đơn – Trầm Tốc Việt Nam"
            >
              <img src="../img/DH_WORKSTATION/vòng1.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Vòng Trầm Hương 108 Hạt Đơn – Trầm Tốc Việt Nam"
              >
                Vòng Trầm Hương 108 Hạt Đơn – Trầm Tốc Việt Nam
              </a>
              <br />
              <span className="span_price_up">28.990.000₫</span>
              <span className="span_price_down">
                <b>28.590.000đ</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Vòng tay Trầm Hương Lá Bùa Tây Tạng – Trầm Tốc Việt Nam"
            >
              <img src="../img/DH_WORKSTATION/vòng2.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Vòng tay Trầm Hương Lá Bùa Tây Tạng – Trầm Tốc Việt Nam"
              >
                Vòng tay Trầm Hương Lá Bùa Tây Tạng – Trầm Tốc Việt Nam
              </a>
              <br />
              <span className="span_price_up">13.490.000₫</span>
              <span className="span_price_down">
                <b>11.790.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="Laptop_ASUS_ZenBook_UX325EA_EG079T.html"
              title="Laptop ASUS ZenBook UX325EA EG079T"
            >
              <img src="../img/DH_WORKSTATION/vòng3.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="Laptop_ASUS_ZenBook_UX325EA_EG079T.html"
                title="Laptop ASUS ZenBook UX325EA EG079T"
              >
                Vòng Trầm Hương Minh Nguyệt Trầm – Trầm Tốc Việt Nam
              </a>
              <br />
              <span className="span_price_up">21.990.000₫</span>
              <span className="span_price_down">
                <b>20.390.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a href="#" title="Vòng Trầm Hương Tròn Đơn Tỳ Hưu Bạc Thái – Trầm Tốc Việt Nam">
              <img src="../img/DH_WORKSTATION/vòng4.jpg" />
            </a>
            <div className="text_product_1">
              <a href="#" title="Vòng Trầm Hương Tròn Đơn Tỳ Hưu Bạc Thái – Trầm Tốc Việt Nam">
              Vòng Trầm Hương Tròn Đơn Tỳ Hưu Bạc Thái – Trầm Tốc Việt Nam
              </a>
              <br />
              <span className="span_price_up">17.690.000₫</span>
              <span className="span_price_down">
                <b>16.490.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Vòng tay Trầm Hương Tứ Diệp Bảo – Trầm Tốc Việt Nam"
            >
              <img src="../img/DH_WORKSTATION/vòng5.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Vòng tay Trầm Hương Tứ Diệp Bảo – Trầm Tốc Việt Nam"
              >
                Vòng tay Trầm Hương Tứ Diệp Bảo – Trầm Tốc Việt Nam
              </a>
              <br />
              <span className="span_price_up">20.490.000₫</span>
              <span className="span_price_down">
                <b>19.490.000₫</b>
              </span>
            </div>
          </div>
          <div className="col-2 col-s-3 content">
            <a
              href="#"
              title="Vòng tay trầm hương 108 hạt Phù Liên – Trầm Tốc Việt Nam"
            >
              <img src="../img/DH_WORKSTATION/vòng6.jpg" />
            </a>
            <div className="text_product_1">
              <a
                href="#"
                title="Vòng tay trầm hương 108 hạt Phù Liên – Trầm Tốc Việt Nam"
              >
                Vòng tay trầm hương 108 hạt Phù Liên – Trầm Tốc Việt Nam
              </a>
              <br />
              <span className="span_price_up">39.999.000₫</span>
              <span className="span_price_down">
                <b>37.999.000đ</b>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Detail;
