import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import { getRefreshToken } from "../api/SiteAPI";


export const SERVER_ADDR = 'http://localhost:8888'

export const CheckValidate = (doc, ...items) => {
    let flag = true;
    items.map((item) =>{
        const val = doc.getElementById(item).value;
        let warning = doc.getElementById('warning-'+ item);

        // Show warning if item is empty
        if(!val || val == "select-placeholder"){
            warning.classList.remove('hidden');
            flag = false   
        }
                 
        else
            warning.classList.add('hidden');
    }) 
    return flag;
}

export const RefreshToken = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const decodedToken = jwt_decode(accessToken);

    if(Date.now() >= decodedToken.exp * 1000){
        const refreshToken = Cookies.get('refreshToken');
        console.log(refreshToken)
        
        const res = await getRefreshToken(refreshToken);

        if(!res.ok){
            alert('Bạn cần đăng nhập lại!')
            localStorage.removeItem('accessToken');
            localStorage.removeItem('firstname');
            Cookies.remove('refreshToken');
            return false;
        }

        localStorage.setItem('accessToken', res.data.accessToken);
        Cookies.set('refreshToken', res.data.refreshToken, { expires: 30}); 
    }
    else console.log('valid token')

    return true;
}


export const homeCategoriesList = [
    {img: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_240307.jpg', name: 'Tiểu thuyết'}, 
    {img: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_183732.jpg', name: 'Truyện tranh'}, 
    {img: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_13785.jpg', name: 'Kinh tế'}, 
    {img: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_90160.jpg', name: 'Chính trị'}, 
    {img: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936066692298.jpg', name: 'Tâm lý'}, 
    {img: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936067605693.jpg', name: 'Kĩ năng sống'}, 
    {img: 'https://cdn0.fahasa.com/media/catalog/product/b/i/bia-1_tqtp-1-tb.jpg', name: 'Tình cảm'}, 
    {img: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936049631962.jpg', name: 'Khoa học'}];

export const exampleOrders = [
    {
        _id: '63c8e9ea045651ab11d745d0',
        createAt: '2023-01-19T06:57:46.282+00:00',
        recipientInfo: 'Duong Trieu',
        totalAmount: 100000,
        state: 'PE'
    },
    {
        _id: '63c8e9ea045651ab11d745d0',
        createAt: '2023-01-19T06:57:46.282+00:00',
        recipientInfo: 'Duong Trieu',
        totalAmount: 10000000,
        state: 'PE'
    },
    {
        _id: '63c8e9ea045651ab11d745d0',
        createAt: '2023-01-19T06:57:46.282+00:00',
        recipientInfo: 'Duong Trieu',
        totalAmount: 100000,
        state: 'PE'
    }
]

export const exampleTitles = [
    {
        img: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_90160.jpg',
        name: 'Forrest Gump',
        price: 50000,
        sold: 12,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2',
        price: 70000,
        sold: 2,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2',
        price: 70000,
        sold: 2,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2',
        price: 70000,
        sold: 2,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2',
        price: 70000,
        sold: 2,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2',
        price: 70000,
        sold: 2,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2',
        price: 70000,
        sold: 2,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2 HHHHH HHH HHHHH HHHHHH',
        price: 70000,
        sold: 2,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2',
        price: 70000,
        sold: 2,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2',
        price: 70000,
        sold: 2,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2 HHHHH HHH HHHHH HHHHHH',
        price: 70000,
        sold: 2,
    },
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2',
        price: 70000,
        sold: 2,
    }
]

export const item = {
    _id: '63c6ca210fef2f5fcd638cf6',
    img: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_90160.jpg',
    name: 'Forrest Gump 2',
    price: 70000,
    authors: ['Winston Groom'],
    translators: ['Ngọc Trà'],
    publisher: 'NXB Trẻ',
    pYear: 2006,
    page: 350,
    size: [20, 12, 0.6],
    category: ['Sách trong nước', 'Tiểu thuyết'],
    description: '<div id="desc_content" class="std"><p style="text-align: justify;">Forrest Gump</p><p style="text-align: justify;">Cuốn sách với lối văn châm biếm ngầm qua góc nhìn ngây thơ của nhân vật chính là đã góp phần đưa ;<span>Forrest Gump</span> ;đã trở thành một biểu tượng văn hóa mới của thập niên 1990. Gump là một chàng trai ngốc dễ thương, sẵn sàng cho người khác mà không mong đợi được đền đáp. Đó cũng là giá trị nhân văn nổi bật được chia sẻ nhất quán ở cả tác phẩm văn học và điện ảnh và khiến người đọc cũng như người xem mãi hâm mộ nhân vật này.</p><p style="text-align: justify;">Tiểu thuyết ;<span>Forrest Gump</span> ;của Winston Groom in năm 1986 thoạt tiên không phải là cuốn sách ăn khách cho đến khi bộ phim chuyển thể ra đời năm 1994 với ngôi sao Tom Hanks. Theo một thống kê, trước khi có bộ phim này thì cuốn sách đã được bán 30.000 bản, và khi ;<span>Forrest Gump ;</span>qua mặt rất nhiều bộ phim xuất sắc cùng năm để giành giải Oscar phim hay nhất, đã có 1,7 triệu bản sách được bán trên khắp thế giới. Còn bộ phim đã xếp thứ tư trong các bộ phim có doanh thu lớn nhất mọi thời đại cho đến thời điểm đó. Năm 2011, Thư viện Quốc hội Mỹ đã chọn <span>Forrest Gump</span>&nbsp;vào danh sách bảo tồn của Cơ quan Lưu trữ Phim ảnh Quốc gia vì “có ý nghĩa về mặt văn hóa, lịch sử và mỹ học.”</p><p style="text-align: justify;">Winston Groom là một cựu binh thời chiến tranh ở Việt Nam, sau khi trở về, ông làm phóng viên và chuyển sang viết tiểu thuyết năm 32 tuổi và đã gặt hái được nhiều thành công. Cuốn tiểu thuyết ;<span>Conversations with the Enemy</span> ;(1982) [<span>Trò chuyện với kẻ thù</span>] với chủ đề cựu chiến binh Chiến tranh Việt Nam đã lọt vào chung kết giải Pulitzer năm 1983. Năm 1985, Groom quay về Mobile và bắt đầu viết ;<span>Forrest Gump</span>. Cuốn sách đã trở thành dấu mốc cho sự nghiệp sáng tác của ông.</p><p style="text-align: justify;">Nhân vật Forrest Gump đã được Groom xây dựng như một người “tự kỷ bác học”, đã có những thay đổi khi được chuyển thể trên màn ảnh Hollywood. Sự khác biệt ở hình tượng Forrest Gump giữa truyện và phim dường như là nhà văn chủ ý xây dựng một nhân vật phản anh hùng, trong khi các nhà làm phim Hollywood thực hiện theo hướng ngược lại, người hùng kiểu mới có kết cục thành công có màu sắc Giấc mơ Mỹ. Truyện và phim đều đã gây nên những cuộc tranh luận về khía cạnh chính trị và tính biểu tượng của nhân vật Gump cũng như mối quan hệ với xã hội của chàng ngốc có chỉ số IQ (chỉ số thông minh) chỉ có 75 nhưng đã đi khắp nơi và gặp đủ loại người. Cuộc phiêu lưu của Forrest Gump suốt ba thập niên bao trùm lịch sử sau thế chiến II đã vẽ nên chân dung một nước Mỹ: Gump đã gặp 2 tổng thống Mỹ, lên tàu vũ trụ, đóng phim ở Hollywood, sang Trung Quốc và tham chiến ở Việt Nam mà không hiểu mình chiến đấu vì lẽ gì.</p><div class="clear"></div></div>',
    quantity: 2,
}

export const cartItems = [
    {
        img: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_90160.jpg',
        name: 'Forrest Gump 2',
        price: 70000,
        count: 2,
    },    
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump Hello moi nguoi',
        price: 70000000,
        count: 1,
    },    
    {
        img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
        name: 'Forrest Gump 2',
        price: 7000,
        count: 2,
    },
    // {
    //     img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
    //     name: 'Forrest Gump 2',
    //     price: 70000,
    //     count: 2,
    // },    
    // {
    //     img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
    //     name: 'Forrest Gump Hello moi nguoi',
    //     price: 70000000,
    //     count: 1,
    // },    
    // {
    //     img: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg',
    //     name: 'Forrest Gump 2',
    //     price: 7000,
    //     count: 2,
    // }
]
