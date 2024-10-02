import { useEffect, useState } from "react";
import "../assets/css/ThanhToan.css";
import { useForm } from "react-hook-form";
import { createOrder } from "../services/checkout.services";
import { Xoa, Tang, Giam, updateQuantity } from "../utils/cart";

const CheckOut = function () {
  const [cart, setCart] = useState<any[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = async (data: any) => {

    try {
      // Chuẩn bị dữ liệu để tạo đơn hàng
      const orderData = {
        tenKhachHang: data.tenKhachHang,
        email: data.email,
        soDienThoai: data.soDienThoai,
        diaChi: data.diaChi,
        list_json_chitietdonhang: prepareChiTietDonHang()
      };

      // Gửi yêu cầu tạo đơn hàng đến API
      await createOrder(orderData);

      // Thông báo thành công nếu không có lỗi
      alert("Submit form success");
    } catch (error) {
      // Xử lý lỗi nếu có lỗi từ API
      console.error("Lỗi khi tạo đơn hàng:", error);
      alert("Đã xảy ra lỗi khi tạo đơn hàng. Vui lòng thử lại sau.");
    }
  };

  // Hàm chuẩn bị dữ liệu cho chi tiết đơn hàng
  const prepareChiTietDonHang = () => {
    let listChiTietDonHang = [];
    let cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    for (let item of cartItems) {
      let chiTietDonHang = {
        maAccGame: item.maAccGame,
        soLuong: item.quantity,
        tongTien: item.giaAccGame * item.quantity,
        giaAccGame: item.giaAccGame
      };
      listChiTietDonHang.push(chiTietDonHang);
    }
    return listChiTietDonHang;
  };




  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(list);
  }, []);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.giaAccGame * item.quantity;
    });
    setTotalPrice(total);
  }, [cart]);


  return (
    <>
      <span id="TieuDe10">
        <a href="#">TRANG CHỦ</a> &gt; <a href="#">THANH TOÁN</a>
      </span>
      <div id="main10">
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <div id="checkout_step">
            <div id="title_cart1">Thanh toán</div>
            <div id="box_info_step">
              <div id="box_info_step1">
                <div id="info_dia_chi_giao_hang">
                  <div id="tt_dia_chi">Địa chỉ giao hàng</div>
                  <div id="data_ct_address">
                    <div className="control_group">
                      <label htmlFor="txt_hoten">
                        Họ tên: <span>*</span>  {errors.tenKhachHang && <span style={{ color: 'red' }}>{(errors as any).tenKhachHang.message}</span>}
                      </label>
                      <br />
                      <input
                        id="txt_hoten"
                        type="text"
                        placeholder="Họ và tên"
                        {...register("tenKhachHang", {
                          required: "Tên khách không được để rỗng.",
                          minLength: {
                            value: 3,
                            message: "Độ dài Họ tên tối thiểu phải 3 ký tự."
                          }
                        })}
                      />
                    </div>
                    <div className="control_group" style={{ marginTop: "20px" }}>
                      <label htmlFor="txt_sdt" style={{ width: "auto" }}>
                        Số điện thoại: <span>*</span> {errors.soDienThoai && <span style={{ color: 'red' }}>{(errors as any).soDienThoai.message}</span>}
                      </label>
                      <br />
                      <input

                        id="txt_sdt"
                        type="text"
                        placeholder="Số điện thoại"
                        {...register("soDienThoai", {
                          required: "Số điện thoại không được để rỗng.",
                          pattern: {
                            value: /^[0-9 _-]{10,12}/,
                            message: "Sai định dạng số điện thoại.",
                          }
                        })}
                      />
                    </div>
                    <div className="control_group" style={{ marginTop: "20px" }}>
                      <label htmlFor="txt_email">Email: {errors.email && <span style={{ color: 'red' }}>{(errors as any).email.message}</span>}
                      </label>
                      <br />
                      <input

                        id="txt_email"
                        type="text"
                        placeholder="Email"
                        {...register("email", {
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Sai định dạng email.",
                          }
                        })}
                      />
                    </div>
                    <div className="control_group" style={{ marginTop: "20px" }}>
                      <label htmlFor="txt_diachi">
                        Địa chỉ: <span>*</span> {errors.diaChi && <span style={{ color: 'red' }}>{(errors as any).diaChi.message}</span>}
                      </label>
                      <br />
                      <textarea
                        {...register("diaChi", {
                          required: "Địa chỉ không được để rỗng."
                        })}
                        id="txt_diachi"
                        style={{ width: "100%" }}
                        rows={3}
                      ></textarea>
                    </div>

                  </div>
                </div>
              </div>
              <div id="box_info_step2">
                <div id="span4">
                  <div id="title_tom_tat">
                    <span>TÓM TẮT ĐƠN HÀNG</span>
                  </div>
                  <div id="list_tom_tat_thanh_toan">
                  {cart.map((x: any) => (
    <div className="product-item" key={x.maAccGame}>
      <div className="product-info">
        <span style={{ width:"250px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} className="product-name" title={x.tenAccGame}>{x.tenAccGame}</span>
        <span style={{ marginLeft:"20px", float:"right", width:"20px" }} className="product-quantity" >{x.quantity}</span>
      </div>
    </div>
  ))}
                    <div
                      className="shipping-container"
                      style={{ width: "325px", height: "22px" }}
                    >
                      <span
                        className="shipping-label"
                        style={{
                          width: "140px",
                          textAlign: "left",
                          float: "left",
                        }}
                      >
                        Phí vận chuyển
                      </span>
                      <span
                        className="shipping-value"
                        style={{
                          width: "127px",
                          textAlign: "right",
                          float: "left",
                        }}
                      >
                        Miễn phí
                      </span>
                    </div>

                    <div
                      className="subtotal-container"
                      style={{ width: "320px", height: "22px" }}
                    >
                      <span
                        className="subtotal-label"
                        style={{
                          width: "120px",
                          textAlign: "left",
                          float: "left",
                          fontWeight: 700,
                        }}
                      >
                        Tạm tính
                      </span>
                      <span
                        className="subtotal-value"
                        style={{
                          width: "127px",
                          textAlign: "right",
                          float: "right",
                          color: "#117c47",
                          marginLeft: "50px"
                        }}

                      >
                        {totalPrice}đ
                      </span>
                    </div>

                    <br />
                    <div id="italic_right7" >
                      <i>(Đã bao gồm Thuế VAT và Phí đóng gói cơ bản).</i>

                    </div>
                    <div id="box_tong_cong7">
                      <div id="label_tong_cong7">
                        <span>TỔNG CỘNG</span>
                      </div>
                      <div id="label_tong_cong7">
                        <span id="TongCong7" style={{ marginLeft: "170px" }}>{totalPrice}đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="box_bt_payment">

                <button style={{ border: "none" }}
                  id="bt_thanh_toan"

                  defaultValue="Thanh toán" type="submit">ĐẶT HÀNG</button>
                <a id="bt_quay_lai" href="#">
                  QUAY LẠI
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default CheckOut;
