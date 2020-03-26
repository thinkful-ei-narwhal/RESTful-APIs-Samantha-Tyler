const items = [];
const hideCheckedItems = false;

const findById = function(id) {
  return this.items.find(item => item.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const setError = function(error) {
  this.error = error;
};

const findAndUpdate = function (id, newData) {
  const findId = this.findById(id);
  console.log(findId, newData);
  Object.assign(findId, newData);
};

const findAndDelete = function (id) {
  this.items = this.items.filter(item => item.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};


export default {
  items,
  addItem,
  hideCheckedItems,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter,
  setError
};
