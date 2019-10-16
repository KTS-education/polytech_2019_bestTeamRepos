import p1 from "@img/products/1.jpg";
import p2 from "@img/products/2.jpg";
import p3 from "@img/products/3.jpg";
import u1 from "./img/user_1.png";
import u2 from "./img/user_2.png";
import u3 from "./img/user_3.png";

export default [
  {
    product_id: 1,
    product_img_href: p1,
    product_title: "MacBook Pro 2018 256GB",
    product_price: 120000,
    product_description:
      'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)',
    booked: true,
    selectedPerson: "Сергей Чернобровкин",
    selectedPerson_photo_href: u1
  },
  {
    product_id: 2,
    product_img_href: p2,
    product_title: "iPad Pro 2018 256GB",
    product_price: 80000,
    product_description:
      "Планшет Apple iPad Pro 11 Wi-Fi + Cellular 256GB Space gray",
    booked: false,
    selectedPerson: "Дарья Попова",
    selectedPerson_photo_href: u2
  },
  {
    product_id: 3,
    product_img_href: p3,
    product_title: "iPhone XR 256GB",
    product_price: 70000,
    product_description: "Мобильный телефон Apple iPhone XR 256GB (желтый)",
    booked: true,
    selectedPerson: "Антон Павлов",
    selectedPerson_photo_href: u3
  }
];

// export default [];
