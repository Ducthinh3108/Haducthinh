import { useEffect, useState } from "react";
import "../assets/css/style_category.css";
import { Link, useParams } from "react-router-dom";
import { getList } from "../services/list.services";
import ReactPaginate from "react-paginate";
import { useRecoilState } from "recoil";
import { cartState } from "../constant/recoil";
import { addToCart } from "../utils/cart";

type DataParams = {
  id: string;
};
const List = function () {
  const { id } = useParams<DataParams>();
  const [data, setDatas] = useState([]);
  const [cart, setCart] = useRecoilState(cartState);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const handlePageClick = (event: any) => {
    setPage(event.selected + 1);
  };
  const changeInputValue = (e: any) => {
    setPageSize(+e.target.value);
  };

  useEffect(() => {
    async function loadData(id: any) {
      let items = await getList({
        page: page,
        pageSize: pageSize,
        MaTheLoaiAccGame: id,
      });
      setDatas(items.data);
      setPageCount(Math.ceil(items.totalItems / pageSize));
    }
    loadData(id);
  }, [page, pageSize, id]);
  return (
    <>
      <section className="main-out">
        <div className="main">
          <div className="box-inner">
            <div className="box-left">Sắp xếp theo</div>
            <div className="box-right">
              <div className="name">Khuyến mại tốt nhất</div>
              <div className="name">Bán chạy</div>
              <div className="name">Mới về</div>
              <div className="name">Giá giảm dần</div>
              <div className="name">Giá tăng dần</div>
              <div className="price">
                <input type="text" id="pricedown" placeholder="Giá thấp nhất" />{" "}
                -
                <input type="text" id="priceup" placeholder="Giá cao nhất" />
                <button>Lọc</button>
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <div className="row">
              {" "}
              {data.map((x: any) => (
                <div className="col-2 col-s-3 content">
                  <a
                    href="#"
                    title="Vòng tay Trầm Hương Lá Bùa Tây Tạng Vàng – Trầm Tốc Việt Nam"
                  >
                    <img src= {"../"+x.email} />
                  </a>
                  <div className="text_product_1">
                    <Link
                      to={"/detail/" + x.maAccGame}
                      title="Vòng tay Trầm Hương Lá Bùa Tây Tạng Vàng – Trầm Tốc Việt Nam"
                    >
                      {x.tenAccGame}
                    </Link>
                    <br/><br/><br/>
                    <span className="span_price_up">{x.giaAccGame}₫</span>
                    <span className="span_price_down">
                      <b>{x.giaAccGame}₫</b>
                    </span>
                    
                    <button
                      type="button"
                      className="btnAdd"
                      onClick={() => {
                        addToCart(x);
                        let list = JSON.parse(
                          localStorage.getItem("cart") || "[]"
                        );
                        setCart(list);
                      }}
                    >
                      <i className="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <br /><br />
      <section className="page">
        <select
          name="pageSize"
          onChange={(e) => changeInputValue(e)}
          value={pageSize}
        >
          <option value="5">6</option>
          <option value="10">12</option>
          <option value="15">18</option>
          <option value="20">24</option>
        </select>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
        />
      </section>
    </>
  );
};
export default List;
