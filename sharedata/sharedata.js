import { products } from "../assets/assets.js";

//Lưu size mà khách hàng chọn ở trang Product
export const currentSize = { size: undefined };

//Lưu các đối tượng sản phẩm trong giỏ hàng
export const cartItems = { value: [] }

//Lưu số lượng các phần tử trong giỏ hàng
export const cartItemAmount = { count: 0 }

//Lưu id của sản phẩm hiện tại lấy từ đường dẫn
export const productIdd = { value: undefined }

//Lưu các đối tượng sản phẩm mà khách hàng đá order
export const orderItems = { value: [] }

//Lưu thông tin khi khách hàng submit form
export const formSubmit = { value: [] }

//Lưu phương thức thanh toán
export const method = { value: undefined }

//Lưu tất cả các sản phẩm ban đầu
export const collectionProducts = { value: [...products] }

//Lưu các sản phẩm sau khi lọc ở trang collection
export const filterProducts = { value: [] }

//Lưu các category đã chọn để lọc
export const categories = { value: [] };

//Lưu các subcategory đã chọn để lọc
export const subCategories = { value: [] };

//Lưu loại sặp xếp
export const sort = { value: "Relavent" };

//Lưu giá trị hiện tại trong ô search ở trang collection
export const searchValue = { value: "" };

//Lưu "" hoặc "user" hoặc "admin" => chưa login - user - admin
export const token = { value: "" };

//Lưu giá trị base64 của ảnh khi admin them sản phẩm
export const imageAddProduct1 = { value: "" };
export const imageAddProduct2 = { value: "" };
export const imageAddProduct3 = { value: "" };
export const imageAddProduct4 = { value: "" };

//Lưu các size mà admin chọn khi thêm sản phẩm
export const sizesAddProduct = { value: [] };

//Để nối form submit với cắc sản phẩm mà khách hàng order tương ứng
export const idOrder = { value: 0 }

//Quyết định ngôn ngữ hiện tại là Anh hay Việt
export const language = { value: "EN" }

//Đối tượng chuyển đổi ngôn ngữ theo id
export const langJSON = [
    {
        id: "nav-home",
        EN: "HOME",
        VN: "TRANG CHỦ"
    },
    {
        id: "nav-collection",
        EN: "COLLECTION",
        VN: "BỘ SƯU TẬP"
    },
    {
        id: "nav-about",
        EN: "ABOUT",
        VN: "CHÚNG TÔI"
    },
    {
        id: "nav-contact",
        EN: "CONTACT",
        VN: "LIÊN HỆ"
    },
    {
        id: "mbnav-home",
        EN: "HOME",
        VN: "TRANG CHỦ"
    },
    {
        id: "mbnav-collection",
        EN: "COLLECTION",
        VN: "BỘ SƯU TẬP"
    },
    {
        id: "mbnav-about",
        EN: "ABOUT",
        VN: "CHÚNG TÔI"
    },
    {
        id: "mbnav-contact",
        EN: "CONTACT",
        VN: "LIÊN HỆ"
    },
    {
        id: "ft-shop",
        EN: "SHOP",
        VN: "CỬA HÀNG"
    },
    {
        id: "ft-shop",
        EN: "SHOP",
        VN: "CỬA HÀNG"
    },
    {
        id: "ft-Kits",
        EN: "Kits",
        VN: "Bộ trang phục"
    },
    {
        id: "ft-Shipping",
        EN: "Shipping",
        VN: "Vận chuyển"
    },
    {
        id: "ft-Returns",
        EN: "Returns",
        VN: "Đổi trả"
    },
    {
        id: "ft-Stockists",
        EN: "Stockists",
        VN: "Đại lý phân phối"
    },
    {
        id: "ft-Private",
        EN: "Private workshops",
        VN: "Workshop riêng"
    },
    {
        id: "ft-Wholesale",
        EN: "Wholesale",
        VN: "Bán sỉ"
    },
    { id: "ft-Our", EN: "Our Story", VN: "Câu chuyện của chúng tôi" },
    { id: "ft-about", EN: "ABOUT", VN: "VỀ CHÚNG TÔI" },
    { id: "ft-Blog", EN: "Blog", VN: "Blog" },
    { id: "ft-Jobs", EN: "Jobs", VN: "Tuyển dụng" },
    { id: "ft-Privacy", EN: "Privacy Policy", VN: "Chính sách bảo mật" },
    { id: "ft-Terms", EN: "Terms & Conditions", VN: "Điều khoản & Điều kiện" },
    { id: "ft-Access", EN: "Accessibility Statement", VN: "Tuyên bố về khả năng truy cập" },

    { id: "ft-help", EN: "HELP", VN: "TRỢ GIÚP" },
    { id: "ft-Tutorials", EN: "Tutorials", VN: "Hướng dẫn" },
    { id: "ft-Office", EN: "Office Hours", VN: "Giờ làm việc" },
    { id: "ft-FAQ", EN: "FAQ", VN: "Câu hỏi thường gặp" },
    { id: "ft-Contact", EN: "Contact Us", VN: "Liên hệ" },

    { id: "ft-stay", EN: "STAY IN THE LOOP", VN: "NHẬN THÔNG TIN MỚI" },
    { id: "ft-Sub", EN: "SUBSCRIBE", VN: "ĐĂNG KÝ" },
    { "id": "home-give", "EN": "Give Your Workout A New Style!", "VN": "Mang đến phong cách mới cho buổi tập của bạn!" },
    { "id": "home-wellcom", "EN": "Wellcom to HelloShop! Let explore our Collection!", "VN": "Chào mừng đến HelloShop! Khám phá bộ sưu tập của chúng tôi!" },
    { "id": "home-explore", "EN": "Explore Now →", "VN": "Khám phá ngay →" },
    { "id": "home-latest", "EN": "Latest Collection", "VN": "Bộ sưu tập mới nhất" },
    { "id": "home-top10", "EN": "Top 10 our latest products", "VN": "Top 10 sản phẩm mới nhất của chúng tôi" },
    { "id": "home-best", "EN": "Best Sellers", "VN": "Sản phẩm bán chạy nhất" },
    { "id": "home-top5", "EN": "Top 5 our best seller products", "VN": "Top 5 sản phẩm bán chạy nhất của chúng tôi" },
    { "id": "col-filters", "EN": "FILTERS", "VN": "BỘ LỌC" },
    { "id": "col-category", "EN": "CATEGORIES", "VN": "DANH MỤC" },
    { "id": "col-men", "EN": "Men", "VN": "Nam" },
    { "id": "col-women", "EN": "Women", "VN": "Nữ" },
    { "id": "col-kid", "EN": "Kids", "VN": "Trẻ em" },
    { "id": "col-top", "EN": "Topwear", "VN": "Áo" },
    { "id": "col-bot", "EN": "Bottomwear", "VN": "Quần" },
    { "id": "col-win", "EN": "Winterwear", "VN": "Đồ mùa đông" },
    { "id": "col-all", "EN": "All Collection", "VN": "Tất cả bộ sưu tập" },
    { "id": "col-rel", "EN": "Sort by: Relavent", "VN": "Sắp xếp: Liên quan" },
    { "id": "col-low", "EN": "Sort by: Low to High", "VN": "Sắp xếp: Giá thấp đến cao" },
    { "id": "col-high", "EN": "Sort by: High to Low", "VN": "Sắp xếp: Giá cao đến thấp" },
    { id: "about-our", EN: "Our Stories", VN: "Câu chuyện của chúng tôi" },
    { "id": "about-est", "EN": "Established in 2020, HelloShop began with a simple mission: to provide groundbreaking, high-quality fashion solutions. We believe that success is built on trust, transparency, and an unwavering commitment to our customers.", "VN": "Thành lập năm 2020, HelloShop bắt đầu với sứ mệnh đơn giản: cung cấp các giải pháp thời trang đột phá và chất lượng cao. Chúng tôi tin rằng thành công được xây dựng trên sự tin tưởng, minh bạch và cam kết không ngừng với khách hàng." },
    { "id": "about-we", "EN": "We are proud of our diverse and talented team, who are always ready to face any challenge and create lasting value together.", "VN": "Chúng tôi tự hào về đội ngũ đa dạng và tài năng, luôn sẵn sàng đối mặt với mọi thử thách và cùng nhau tạo ra giá trị bền vững." },
    { "id": "about-mis", "EN": "Mission", "VN": "Sứ mệnh" },
    { "id": "about-mak", "EN": "Making life better, one great product at a time", "VN": "Cải thiện cuộc sống bằng từng sản phẩm tuyệt vời" },
    { "id": "about-vis", "EN": "Vision", "VN": "Tầm nhìn" },
    { "id": "about-bec", "EN": "Become the leading fashion brand by 2028 is strong and clear, but it's an internal business objective, not a customer-facing message.", "VN": "Trở thành thương hiệu thời trang hàng đầu vào năm 2028 là mục tiêu rõ ràng và mạnh mẽ, nhưng đó là mục tiêu nội bộ, không phải thông điệp hướng đến khách hàng." },
    { "id": "about-ach", "EN": "Achievements", "VN": "Thành tựu" },
    { "id": "about-the", "EN": "The evidence is in the numbers.", "VN": "Bằng chứng nằm ở những con số." },
    { "id": "about-pro", "EN": "Products Sold", "VN": "Sản phẩm đã bán" },
    { "id": "about-cus", "EN": "Customer Satisfaction Rate", "VN": "Tỷ lệ hài lòng của khách hàng" },
    { "id": "about-top5", "EN": "Top 5", "VN": "Top 5" },
    { "id": "about-fav", "EN": "Favorite brands", "VN": "Thương hiệu được yêu thích" },
    { "id": "about-our-new", "EN": "Our new collection is presented perfectly: from the stunning product images and easy-to-understand information to the intuitive online shopping journey that allows customers to easily find, select, and check out. Despite a tight deadline, our team delivered exactly what we hoped for: providing every customer with an enjoyable and pleasant shopping experience.", "VN": "Bộ sưu tập mới của chúng tôi được trình bày hoàn hảo: từ hình ảnh sản phẩm tuyệt đẹp và thông tin dễ hiểu đến hành trình mua sắm trực tuyến trực quan giúp khách hàng dễ dàng tìm kiếm, lựa chọn và thanh toán. Dù thời gian gấp rút, đội ngũ của chúng tôi đã mang đến đúng như kỳ vọng: một trải nghiệm mua sắm dễ chịu và thú vị cho mọi khách hàng." },
    { "id": "about-kiet", "EN": "— Vo Anh Kiet", "VN": "— Võ Anh Kiệt" },
    { "id": "about-job", "EN": "Job Careers", "VN": "Cơ hội nghề nghiệp" },
    { "id": "about-section", "EN": "Be a part of our team to develop your career and forge new successes.", "VN": "Hãy trở thành một phần của đội ngũ chúng tôi để phát triển sự nghiệp và tạo nên thành công mới." },
    { "id": "about-digital", "EN": "Digital Marketing expert", "VN": "Chuyên gia tiếp thị kỹ thuật số" },
    { "id": "about-tphcm", "EN": "TP.HCM | Full-time", "VN": "TP.HCM | Toàn thời gian" },
    { "id": "about-for-more", "EN": "For more details...", "VN": "Xem thêm chi tiết..." },
    { "id": "about-software", "EN": "Software Development Engineer", "VN": "Kỹ sư phát triển phần mềm" },
    { "id": "about-remote", "EN": "Remote | Full-time", "VN": "Làm từ xa | Toàn thời gian" },
    { "id": "about-for-more2", "EN": "For more details...", "VN": "Xem thêm chi tiết..." },
    { "id": "about-intern", "EN": "Design Intern", "VN": "Thực tập sinh thiết kế" },
    { "id": "about-parttime", "EN": "TP.HCM | Part-time", "VN": "TP.HCM | Bán thời gian" },
    { "id": "about-for-more3", "EN": "For more details...", "VN": "Xem thêm chi tiết..." },
    { "id": "about-morejob", "EN": "More jobs here", "VN": "Xem thêm việc làm tại đây" },
    { "id": "contact-need", "EN": "Need support?", "VN": "Cần hỗ trợ?" },
    { "id": "contact-helloshop", "EN": "Hello Shop is pleased to assist you. Please leave your information with us. Your request will be processed and responded to as soon as possible.", "VN": "Hello Shop rất hân hạnh được hỗ trợ bạn. Vui lòng để lại thông tin, chúng tôi sẽ xử lý và phản hồi sớm nhất có thể." },
    { "id": "contact-fullname", "EN": "Full Name*", "VN": "Họ và tên*" },
    { "id": "contact-phonenumber", "EN": "Phone Number*", "VN": "Số điện thoại*" },
    { "id": "contact-note", "EN": "Note*", "VN": "Ghi chú*" },
    { "id": "contact-submit", "EN": "Submit", "VN": "Gửi" },
    { "id": "contact-helloshop1", "EN": "Hello Shop Vietnam", "VN": "Hello Shop Việt Nam" },
    { "id": "contact-helloshop2", "EN": "Hello Shop is a leading fashion clothing shopping channel in Vietnam", "VN": "Hello Shop là kênh mua sắm thời trang hàng đầu tại Việt Nam" },
    { "id": "contact-helloshop4", "EN": "Ho Chi Minh City: 10th Floor, HD Bank Building, 25Bis Nguyen Thi Minh Khai, Ben Nghe Ward, District 1, HCMC", "VN": "TP.HCM: Tầng 10, Tòa nhà HD Bank, 25Bis Nguyễn Thị Minh Khai, P. Bến Nghé, Quận 1, TP.HCM" },
    { "id": "contact-5", "EN": "Hanoi: 12th Floor, Ladeco Building, 266 Doi Can, Lieu Giai Ward, Ba Dinh District, Hanoi", "VN": "Hà Nội: Tầng 12, Tòa nhà Ladeco, 266 Đội Cấn, P. Liễu Giai, Quận Ba Đình, Hà Nội" },
    { "id": "contact-6", "EN": "Business Registration Certificate No.: 0316376256", "VN": "Giấy chứng nhận đăng ký kinh doanh số: 0316376256" },
    { "id": "contact-7", "EN": "Contact Us", "VN": "Liên hệ với chúng tôi" },
    { "id": "contact-8", "EN": "Working hours: 8:00 AM - 9:00 PM (Monday - Saturday)", "VN": "Giờ làm việc: 8:00 - 21:00 (Thứ Hai - Thứ Bảy)" },
    { "id": "contact-9", "EN": "Customer Service: 19006750", "VN": "Dịch vụ khách hàng: 19006750" },
    { "id": "contact-10", "EN": "Fanpage: https://www.facebook.com/helloshop.vn", "VN": "Fanpage: https://www.facebook.com/helloshop.vn" },
    { "id": "login-1", "EN": "Welcome Back!", "VN": "Chào mừng bạn trở lại!" },
    { "id": "login-2", "EN": "Login to your account", "VN": "Đăng nhập vào tài khoản của bạn" },
    { "id": "login-3", "EN": "Email", "VN": "Email" },
    { "id": "login-4", "EN": "Password", "VN": "Mật khẩu" },
    { "id": "login-5", "EN": "Remember me", "VN": "Ghi nhớ tôi" },
    { "id": "login-6", "EN": "Login", "VN": "Đăng nhập" },
    { "id": "login-7", "EN": "Don’t have an account?", "VN": "Bạn chưa có tài khoản?" },
    { "id": "login-8", "EN": "Sign Up", "VN": "Đăng ký" },
    { "id": "login-9", "EN": "Forgot Password?", "VN": "Quên mật khẩu?" },
    { "id": "cart-1", "EN": "Your Cart", "VN": "Giỏ hàng của bạn" },
    { "id": "cart-2", "EN": "Cart Total", "VN": "Tổng giỏ hàng" },
    { "id": "cart-3", "EN": "Subtotal", "VN": "Tạm tính" },
    { "id": "cart-4", "EN": "Shipping Fee", "VN": "Phí vận chuyển" },
    { "id": "cart-5", "EN": "Total", "VN": "Tổng cộng" },
    { "id": "cart-6", "EN": "PROCEDD TO CHECKOUT", "VN": "TIẾN HÀNH THANH TOÁN" },
    { "id": "cart-7", "EN": "Your cart is empty.", "VN": "Giỏ hàng của bạn đang trống." },
    { "id": "cart-8", "EN": "Let's shop now", "VN": "Mua sắm ngay" },
    { "id": "place-1", "EN": "Cart Total", "VN": "Tổng giỏ hàng" },
    { "id": "place-2", "EN": "Subtotal", "VN": "Tạm tính" },
    { "id": "place-3", "EN": "Shipping Fee", "VN": "Phí vận chuyển" },
    { "id": "place-4", "EN": "Total", "VN": "Tổng cộng" },
    { "id": "h2-com", "EN": "Payment Method", "VN": "Phương thức thanh toán" },
    { "id": "banking-btn", "EN": "Banking", "VN": "Chuyển khoản" },
    { "id": "cod-btn", "EN": "Cash On Delivery", "VN": "Thanh toán khi nhận hàng" },
    { "id": "completed-btn", "EN": "Completed", "VN": "Hoàn tất" },
    { "id": "place-0", "EN": "Delivery Information", "VN": "Thông tin giao hàng" },
    { "id": "order-0", "EN": "Your Orders", "VN": "Đơn hàng của bạn" },
    { "id": "pro-1", "EN": "Select Size", "VN": "Chọn kích cỡ" },
    { "id": "pro-2", "EN": "ADD TO CART", "VN": "THÊM VÀO GIỎ" },
    { "id": "pro-3", "EN": "100% Original product.", "VN": "Sản phẩm chính hãng 100%" },
    { "id": "pro-4", "EN": "Cash on delivery is available on this product.", "VN": "Sản phẩm này hỗ trợ thanh toán khi nhận hàng." },
    { "id": "pro-5", "EN": "Easy return and exchange policy within 7 days.", "VN": "Chính sách đổi trả dễ dàng trong vòng 7 ngày." },
    { "id": "pro-6", "EN": "Description", "VN": "Mô tả" },
    { "id": "pro-7", "EN": "Reviews (100)", "VN": "Đánh giá (100)" },
    { "id": "pro-8", "EN": "Elevate your everyday style with our UrbanFlex Lightweight Hoodie, designed for comfort, versatility, and effortless cool. Crafted from a breathable cotton-poly blend, this hoodie features a relaxed fit, adjustable drawstring hood, and ribbed cuffs for a snug finish. The minimalist design is complemented by a subtle embroidered logo on the chest and a kangaroo pocket for added convenience. Whether you're heading to the gym, lounging at home, or layering up for a casual night out, the UrbanFlex Hoodie is your go-to essential.", "VN": "Nâng tầm phong cách hàng ngày với áo hoodie UrbanFlex nhẹ nhàng, được thiết kế để mang lại sự thoải mái, linh hoạt và phong cách tự nhiên. Làm từ chất liệu cotton-poly thoáng khí, áo có phom dáng rộng rãi, mũ trùm đầu có dây điều chỉnh và cổ tay bo gọn. Thiết kế tối giản được nhấn nhá bằng logo thêu tinh tế ở ngực và túi kangaroo tiện lợi. Dù bạn đến phòng gym, thư giãn tại nhà hay đi chơi tối, UrbanFlex Hoodie luôn là lựa chọn lý tưởng." },
    { "id": "pro-9", "EN": "Related products", "VN": "Sản phẩm liên quan" },
    { "id": "admin-1", "EN": "Add items", "VN": "Thêm sản phẩm" },
    { "id": "admin-2", "EN": "List items", "VN": "Danh sách sản phẩm" },
    { "id": "admin-3", "EN": "Orders", "VN": "Đơn hàng" },
    { "id": "admin-4", "EN": "Upload Image", "VN": "Tải ảnh lên" },
    { "id": "admin-5", "EN": "Product name", "VN": "Tên sản phẩm" },
    { "id": "admin-6", "EN": "Product decscription", "VN": "Mô tả sản phẩm" },
    { "id": "admin-7", "EN": "Product category", "VN": "Danh mục sản phẩm" },
    { "id": "admin-8", "EN": "Men", "VN": "Nam" },
    { "id": "admin-9", "EN": "Women", "VN": "Nữ" },
    { "id": "admin-10", "EN": "Kids", "VN": "Trẻ em" },
    { "id": "admin-11", "EN": "Topwear", "VN": "Áo" },
    { "id": "admin-12", "EN": "Bottomwear", "VN": "Quần" },
    { "id": "admin-13", "EN": "Winterwear", "VN": "Đồ mùa đông" },
    { "id": "admin-14", "EN": "Product Price", "VN": "Giá sản phẩm" },
    { "id": "admin-15", "EN": "Product Sizes", "VN": "Kích cỡ sản phẩm" },
    { "id": "admin-16", "EN": "Add to bestseller", "VN": "Thêm vào danh sách bán chạy" },
    { "id": "admin-17", "EN": "ADD", "VN": "THÊM" },
    { "id": "admin-", "EN": "Sub category", "VN": "Danh mục phụ" },
    { "id": "list-1", "EN": "All Products List", "VN": "Danh sách tất cả sản phẩm" },
    { "id": "list-2", "EN": "Image", "VN": "Hình ảnh" },
    { "id": "list-3", "EN": "Name", "VN": "Tên" },
    { "id": "list-4", "EN": "Category", "VN": "Danh mục" },
    { "id": "list-5", "EN": "Price", "VN": "Giá" },
    { "id": "list-6", "EN": "Action", "VN": "Thao tác" },
    { "id": "order-admin-page-hello", "EN": "Order Page", "VN": "Trang đơn hàng" },
    { "id": "logout", "EN": "Logout", "VN": "Đăng xuất" },
    { "id": "profile-1", "EN": "My Profile", "VN": "Hồ sơ của tôi" },
    { "id": "profile-2", "EN": "Orders", "VN": "Đơn hàng" },
    { "id": "profile-3", "EN": "Logout", "VN": "Đăng xuất" },

]