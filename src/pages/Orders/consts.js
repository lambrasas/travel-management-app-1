const fakeOrder = {
  id: 1,
  hotel: {
    id: 1,
    title: "Amsterdam Plaza",
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227221552.jpg?k=7fa35af9d6a15d6c947dc8c196831a8d336daac0e42dd19ce59a6aab9486314e&o=&hp=1",
  },
  price: 500,
  persons: ["Rokas", "Tadas", "Marija"],
  startDate: "2024-03-26T17:15:23Z",
  endDate: "2024-03-30T17:15:23Z",
};

const fakeOrder1 = {
  id: 2,
  hotel: {
    id: 2,
    title: "Hilton Garden Inn",
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484101109.jpg?k=6dd80fff0078bd15430c0726a5f3b8d14108097bcde2d2335917f4ce0879be0e&o=&hp=1",
  },
  price: 347,
  persons: ["Rokas", "Tadas", "Marija", "Tomas"],
  startDate: "2024-04-26T17:15:23Z",
  endDate: "2024-05-30T17:15:23Z",
};

const fakeOrder2 = {
  id: 3,
  hotel: {
    id: 3,
    title: "Trump tower",
    imageUrl:
      "https://s.abcnews.com/images/US/trump-tower-ap-file-ml-240129_1706547153628_hpMain_16x9_1600.jpg",
  },
  price: 8000,
  persons: ["Rokas", "Tadas"],
  startDate: "2024-07-12T17:15:23Z",
  endDate: "2024-08-01T17:15:23Z",
};

export const fakeOrders = [fakeOrder, fakeOrder1, fakeOrder2];
