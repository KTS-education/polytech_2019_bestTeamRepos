import photo from "@data/YourAccountInfo/img/account-photo.png";

const initialState = {
  id: 10000,
  name: "Дарья",
  surname: "Попова",
  logoPath: photo
};

export const profileReducer = (state = initialState) => state;
