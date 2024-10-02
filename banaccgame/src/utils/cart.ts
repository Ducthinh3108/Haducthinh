import $ from 'jquery';
export function addToCart(item: any) {
    item.quantity = 1;
    debugger;
    let list: CartItem[];
    if (localStorage.getItem('cart') == null) {
        list = [item];
    } else {
        list = JSON.parse(localStorage.getItem('cart') || '[]');
        let ok = true;
        for (let x of list) {
            if (x.maAccGame === item.maAccGame) {
                x.quantity += 1;
                ok = false;
                break;
            }
        }
        if (ok) {
            list.push(item);
        }
    }
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã thêm giỏ hàng thành công!");
}
interface CartItem {
    // Định nghĩa các trường cho mỗi mục trong giỏ hàng
    maAccGame: string;
    tenAccGame: string;
    price: number;
    quantity: number;
    // Nếu có các trường khác, bạn có thể thêm chúng ở đây
}

// Parse JSON từ localStorage và chỉ định kiểu dữ liệu là một mảng các CartItem
const list: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

export function Xoa(id: string, list: CartItem[]): void {
    if (window.confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
        const updatedList = list.filter(item => item.maAccGame !== id);
        localStorage.setItem('cart', JSON.stringify(updatedList));
    }
}

export function Tang(id: string, list: CartItem[]) {
    var index = list.findIndex(item => item.maAccGame == id);
    if (index >= 0) {
        list[index].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(list));
         // Cập nhật lại giỏ hàng sau khi tăng số lượng
    }
}

export function Giam(id: string, list: CartItem[]) {
    var index = list.findIndex(item => item.maAccGame == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(list)); // Cập nhật lại giỏ hàng sau khi giảm số lượng
    }
}

export function updateQuantity(id: string, list: CartItem[]) {
    var quantity = Number($('#q_' + id).val());
    var index = list.findIndex(item => item.maAccGame == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(list)); // Cập nhật lại giỏ hàng sau khi cập nhật số lượng
    }
}
