const users = [
  {
    username: "M.Shariat",
    firstName: "Mohammad",
    lastName: "Shariat",
    nationalCode: "0944852122",
    birthDate: "1364/12/04",
    city: "Mashhad",
    mobile: "09153209950",
    address: "Mashhad Sadr",
    role: "Admin",
  },
  {
    username: "M.Shariat",
    firstName: "Mohammad",
    lastName: "Shariat",
    nationalCode: "0944852122",
    birthDate: "1364/12/04",
    city: "Mashhad",
    mobile: "09153209950",
    address: "Mashhad Sadr",
    role: "Admin",
  },
];

//* Generate table head

function generateTabaleHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();

  for (let key of data) {
    const th = document.createElement("th");
    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

//* Generate table body

function generateTable(table, data) {
  for (let element of data) {
    const row = table.insertRow();

    const changePassword = document.createElement("button");
    changePassword.innerHTML = "Change Password";
    changePassword.className = "changePasswordButton";
    document.body.appendChild(changePassword);

    const editUser = document.createElement("button");
    editUser.innerHTML = "Edit User";
    editUser.className = "editUserButton";
    document.body.appendChild(editUser);

    const deleteUser = document.createElement("button");
    deleteUser.innerHTML = "Delete User";
    deleteUser.className = "deleteUserButton";
    document.body.appendChild(deleteUser);

    for (key in element) {
      const cell = row.insertCell();
      const text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}



const table = document.querySelector("table");
const data = Object.keys(users[0]);
generateTabaleHead(table, data);
generateTable(table, users);
