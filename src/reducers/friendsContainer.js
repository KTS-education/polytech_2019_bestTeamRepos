import photo from "@data/YourFriendsInfo/img/friend3.png";
import photo2 from "@data/YourFriendsInfo/img/friend1.png";
import photo3 from "@data/YourFriendsInfo/img/friend2.png";

const initialState = {
  friendsList: [
    {
      id: 1,
      name: "Сергей",
      surname: "Чернобровкин",
      logoPath: photo
    },
    {
      id: 2,
      name: "Аня",
      surname: "Чернобровкина",
      logoPath: photo2
    },
    {
      id: 3,
      name: "Владимир",
      surname: "Петров",
      logoPath: photo3
    },
    {
      id: 4,
      name: "Сергей",
      surname: "Чернобровкин",
      logoPath: photo
    },
    {
      id: 5,
      name: "Сергей",
      surname: "Чернобровкин",
      logoPath: photo3
    },
    {
      id: 6,
      name: "Сергей",
      surname: "Чернобровкин",
      logoPath: photo2
    },
    {
      id: 7,
      name: "Сергей",
      surname: "Чернобровкин",
      logoPath: photo
    }
  ],
  currentLocationId: null
};

export const friendsContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_LOCATION_ID":
      return { ...state, currentLocationId: action.payload };

    default:
      return state;
  }
};
