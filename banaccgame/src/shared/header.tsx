import { Link, useNavigate } from "react-router-dom";
import { closeNav, closeNavMid, openNav, openNavMid } from "../utils/hide_menu";
import { useEffect, useState } from "react";
import { getMenus } from "../services/header.services";
import { useRecoilState } from "recoil";
import { cartState } from "../constant/recoil";

const Header = function () {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);
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
      let data = await getMenus();
      setMenus(data);
    }
    loadData();
  }, []);

  return (
    <>
      <section className="header-i-out">
        <div className="header-inner" id="hideInner">
          {/* Your Inner Header Content */}
          <span className="sp-h-in-r" id="boxrighttop">
            <a href="login.html" id="i">
              <i className="fas fa-user"></i> Đăng nhập
            </a>
            <a href="signup.html" id="i">
              <i className="fas fa-user-plus"></i> Đăng ký
            </a>
          </span>
        </div>
      </section>
      <section className="header-m-out">
        <div className="header-mid" id="hideMid">
          <Link to={"/"} id="m">
            <img src="../img/logoCT.jfif" alt="Logo" />
          </Link>
          <Link to={"/cart"} className="cart">
            <i className="fas fas fa-shopping-cart"></i>
            <span className="cart_number">{cart.length}</span>
          </Link>
          <form className="search" onSubmit={(e) => search(e)}>
            <input
              type="text"
              onChange={(e) => changeInputValue(e)}
              placeholder="Tìm kiếm sản phẩm..."
              name="search_content"
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="mid-small" id="lg">
            <Link to={"/"}>
              <img src="../img/logo.png" alt="Logo" />
            </Link>
          </div>
          <a
            href="javascript:void(0);"
            className="icon-mid"
            onClick={() => openNavMid()}
            id="lg"
          >
            <i className="fas fa-bars"></i>
          </a>
        </div>
        {/* Your Mid Header Content */}
      </section>
      <section className="header-b-out">
        <div className="header-bottom" id="hideBottom">
          <ul>
            <li>
              <Link to={"/list/1"}>
                <b>
                  <span className="sp-h-bot category">
                    <i className="fas fa-bars"></i> Danh mục sản phẩm
                  </span>
                </b>
              </Link>
              <ul className="submenu">
                {menus.map((x: any) => (
                  <li key={x.maTheLoaiAccGame}>
                    <Link to={"/list/" + x.maTheLoaiAccGame}>
                      <i className="fas fa-desktop"></i> {x.theLoaiAccGame}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to={"/list/1"}>
                <b>
                  <i className="fas fa-phone-volume"></i>
                  <span className="sp-h-bot"> Bán hàng trực tuyến</span>
                </b>
              </Link>
            </li>
            <li>
              <Link to={"/list/2"}>
                <b>
                  <i className="fas fa-money-check-alt"></i>
                  <span className="sp-h-bot"> Blog</span>
                </b>
              </Link>
            </li>
            <li>
              <Link to={"/promotions"}>
                <b>
                  <i className="fas fa-cart-arrow-down"></i>
                  <span className="sp-h-bot"> Khuyến mãi </span>
                </b>
              </Link>
            </li>
            <li>
              <Link to={"/news"}>
                <b>
                  <i className="far fa-newspaper"></i>
                  <span className="sp-h-bot"> Tin tức </span>
                </b>
              </Link>
            </li>
          </ul>
          <a
            href="javascript:void(0);"
            className="icon"
            onClick={() => openNav()}
          >
            <i className="fas fa-bars"></i>
          </a>
        </div>
        {/* Your Bottom Header Content */}
      </section>
    </>
  );
};

export default Header;
