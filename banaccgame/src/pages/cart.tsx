import { useEffect, useState } from "react";
import "../assets/css/GioHang.css";
import { useForm } from "react-hook-form";
import { createOrder } from "../services/cart.services";
import { Xoa, Tang, Giam, updateQuantity } from "../utils/cart";
import { Link, useNavigate } from "react-router-dom";
const Cart = function () {
  const [cart, setCart] = useState<any[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = async (data: any) => {
    let obj: any = {};
    obj.khach = data;
    obj.listchitiet = [];
    let list = JSON.parse(localStorage.getItem("cart") || "[]");
    for (let x of list) {
      obj.listchitiet.push({
        maAccGame: x.maAccGame,
        soLuong: x.quantity,
        giaMua: 1,
        maDonHangNavigation: {},
      });
    }
    await createOrder(obj);
    alert("Submit form success");
  };
  const handleDelete = (maAccGame: string) => {
    Xoa(maAccGame, cart);
    let list = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(list);
  };
  const handleQuantityChange = (maAccGame: string, newQuantity: number) => {
    updateQuantity(maAccGame, cart); // Gọi hàm updateQuantity từ utils/cart.ts để cập nhật số lượng
    let updatedCart = cart.map(item => {
      if (item.maAccGame === maAccGame) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart([updatedCart]); // Sử dụng spread operator để tạo mảng mới và cập nhật state
  };
  
  
  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(list);
  }, []);
  const [totalPrice, setTotalPrice] = useState(0);
  

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.giaAccGame * item.quantity;
    });
    setTotalPrice(total);
  }, [cart]);
  const handleDeleteAll = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };
  const handleDeleteAllConfirmation = () => {
    const confirmation = window.confirm("Bạn có chắc chắn muốn xóa tất cả không?");
    if (confirmation) {
      handleDeleteAll();
    }
  };
  
  return (
    <>
      <span id="TieuDe7">
        <a href="#">TRANG CHỦ</a> &gt; <a href="#">GIỎ HÀNG</a>
      </span>
      <div id="main7">
        <div id="main-left7">
          <div id="title_cart7">
            <span>GIỎ HÀNG</span>
          </div>
          <div id="row_fluid7">
            <div id="box_list_cart7">
              <table>
                <tbody>
                  <tr>
                  
                    <th style={{ width: "97.5px", textAlign: "center" }}>
                      Hình
                    </th>
                    <th style={{ width: "200px", textAlign: "center" }}>Tên cây</th>
                    <th style={{ width: "97.5px", textAlign: "center" }}>
                      Đơn giá
                    </th>
                    <th style={{ width: "100px", textAlign: "center" }}>
                      Số lượng
                    </th>
                    <th style={{ width: "97.5px", textAlign: "center" }}>
                      Thành tiền
                    </th>
                    <th style={{ width: "97.5px", textAlign: "center" }}>Xóa</th>
                  </tr>

                  {cart.map((x: any) => (
                    <tr key={x.maAccGame}>
                 
                      <td style={{ textAlign: "center" }}>
                        <img
                          src="../../img/LAPTOP/f.jpg"
                          style={{ width: "80px", height: "80px" }}
                          alt="Hình ảnh cây"
                        />
                      </td>
                      <td style={{ textAlign: "center" }}>{x.tenAccGame}</td>
                      <td style={{ textAlign: "center" }}>{x.giaAccGame}</td>
                      <td style={{ width: "70px" }}>
                        <button style={{ width: "30px", textAlign: "center", border:'none' }} onClick={() => Giam(x.maAccGame, cart)}>
                          {" "}
                          -{" "}
                        </button>
                        <input
                          className="quantity-input"
                          type="numbe"
                          defaultValue={x.quantity}
                          min={1}
                          style={{ width: "40px", textAlign: "center" }}
                          onChange={(e) =>
                            handleQuantityChange(
                              x.maAccGame,
                              parseInt(e.target.value)
                            )
                          }
                        />
                        <button style={{ width: "30px", textAlign: "center",border:'none' }} onClick={() => Tang(x.maAccGame, cart)}>
                          {" "}
                          +{" "}
                        </button>
                      </td>

                      <td style={{ textAlign: "center" }}>{x.giaAccGame*x.quantity}</td>
                      <td style={{ textAlign: "center" }}>
                        <img
                          src="../img/th.jfif"
                          style={{ width: "30px", height: "30px" }}
                          onClick={() => handleDelete(x.maAccGame)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br />
              <a id="bt_thanh_toan8" href="#" onClick={handleDeleteAllConfirmation}>
  XÓA TẤT CẢ
</a>


            </div>
          </div>
        </div>
        <div id="main-right7">
          <div id="span47">
            <div id="title_tom_tat7">
              <span>TÓM TẮT ĐƠN HÀNG</span>
            </div>
            
            <div id="list_tom_tat_thanh_toan7">
              {cart.map((x: any) => (
                <div>
                  <div style={{ width: "318px", height: "22px" }}>
                    <span
                      style={{
                        width: "251px",
                        height: "22px",
                        textAlign: "left",
                        float: "left",
                      }}
                    >
                      {x.tenAccGame}
                    </span>
                    <br/><br/>
                    <span
                      style={{
                        width: "47px",
                        height: "22px",
                        textAlign: "right",
                        float: "right",
                      }}
                      id="tongSP"
                    >
                      {x.quantity}
                    </span>
                  </div>
                </div>
              ))}
              <div style={{ width: "318px", height: "22px" }}>
                <span
                  style={{
                    width: "191px",
                    height: "22px",
                    textAlign: "left",
                    float: "left",
                  }}
                >
                  Phí vận chuyển
                </span>
                <span
                  style={{
                    width: "127px",
                    height: "22px",
                    textAlign: "right",
                    float: "right",
                  }}
                >
                  Miễn phí
                </span>
              </div>


              
              <div style={{ width: "318px", height: "22px" }}>
                <span
                  style={{
                    width: "191px",
                    height: "22px",
                    textAlign: "left",
                    float: "left",
                    fontWeight: 700,
                  }}
                >
                  Tạm tính

                </span>
                <span
                  id="TamTinh"
                  style={{
                    width: "127px",
                    height: "22px",
                    textAlign: "right",
                    float: "right",
                    color: "#117c47",
                  }}
                >
                  {totalPrice}đ
                </span>
              </div>
              <br />
              <div id="italic_right7">
                <i>(Đã bao gồm Thuế VAT và Phí đóng gói cơ bản).</i>
              </div>
              <div id="box_tong_cong7">
                <div id="label_tong_cong7">
                  <span>TỔNG CỘNG</span>
                </div>
                <div id="label_tong_cong7">
                  <span id="TongCong7">{totalPrice}đ</span>
                </div>
              </div>






              
            </div>
          </div>
        </div>
        <div id="box_bt_payment7">
          


          <Link to={"/checkout"} className="checkout">
          <a id="bt_thanh_toan7">
            THANH TOÁN
          </a>
          </Link>
          <a id="bt_quay_lai7" href="#">
            QUAY LẠI
          </a>
        </div>
      </div>
    </>
  );
};
export default Cart;
