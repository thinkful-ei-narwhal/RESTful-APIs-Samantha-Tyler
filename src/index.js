import $ from "jquery";
import api from './api';
import shoppingList from "./shopping-list";
import item from "./item";
import store from "./store";

import "./index.css";

const main = function() {
  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
   api.getItems()
  .then(res => res.json())
  .then(res => console.log(res));
  fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  .then(res => res.json())
  .then(data => console.log(data));
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
