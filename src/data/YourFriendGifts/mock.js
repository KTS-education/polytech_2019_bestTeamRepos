import p1 from "./img/1.png";
import p2 from "./img/2.png";
import p3 from "./img/3.png";

export default [
  {
    productId: 1,
    productImgHref: p1,
    title: "MacBook Pro 2018 256GB",
    price: 120000,
    description:
      'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)',
    isBooked: true,
    isBookedByCurrentUser: true
  },
  {
    productId: 2,
    productImgHref: p2,
    title: "iPad Pro 2018 256GB",
    price: 80000,
    description: "Планшет Apple iPad Pro 11 Wi-Fi + Cellular 256GB Space gray",
    isBooked: false
  },
  {
    productId: 3,
    productImgHref: p3,
    title: "iPhone XR 256GB",
    price: 70000,
    description: "Мобильный телефон Apple iPhone XR 256GB (желтый)",
    isBooked: true,
    isBookedByCurrentUser: true,
    isFavouriteByCurrentUser: true
  },
  {
    productId: 4,
    productImgHref: p1,
    title: "MacBook Pro 2018 256GB",
    price: 120000,
    description:
      'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)',
    isBooked: false
  },
  {
    productId: 5,
    productImgHref: p1,
    title: "MacBook Pro 2018 256GB",
    price: 120000,
    description:
      'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)',
    isBooked: true,
    isBookedByCurrentUser: false,
    isFavouriteByCurrentUser: true
  },
  {
    productId: 6,
    productImgHref: p1,
    title: "MacBook Pro 2018 256GB",
    price: 120000,
    description:
      'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)',
    isBooked: true,
    isBookedByCurrentUser: true
  }
];
