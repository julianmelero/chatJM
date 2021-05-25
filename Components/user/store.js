const Model = require("./model");

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

async function getUsers(filterUsers) {
  let filter = {};
  if (filterUsers !== null) {
    filter = { _name: filterUsers };
  }

  const users = await Model.find(filter);
  return users;
}

module.exports = {
  add: addUser,
  list: getUsers,
};
