// Hàm khởi tạo hiệu ứng scroll cho trang About
export function initAchievementObserver() {
  // Tìm tất cả các mục thành tựu có trên trang
  const achievementItems = document.querySelectorAll(".achievement-item");
  // Chỉ thực thi nếu tìm thấy các mục này
  if (achievementItems.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Kích hoạt khi 20% của phần tử lọt vào màn hình
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    achievementItems.forEach((item) => {
      observer.observe(item);
    });
  }
}