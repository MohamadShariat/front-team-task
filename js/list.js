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

//* Generate table body-------------------------------------------

function generateTable(table, data) {
  for (let element of data) {
    const row = table.insertRow();

    //* here button are inserted----------------------------------

    const changePassword = document.createElement("button");
    changePassword.innerHTML = "Change Password";
    document.body.appendChild(changePassword);
    changePassword.style.cursor = "pointer";

    const editUser = document.createElement("button");
    editUser.innerHTML = "Edit User";
    document.body.appendChild(editUser);
    editUser.style.cursor = "pointer";

    const deleteUser = document.createElement("button");
    deleteUser.innerHTML = "Delete User";
    document.body.appendChild(deleteUser);
    deleteUser.style.cursor = "pointer";

    //* here the table is filled-----------------------------------

    for (key in element) {
      const cell = row.insertCell();
      const text = document.createTextNode(element[key]);
      cell.appendChild(text);
      row.appendChild(changePassword);
      row.appendChild(editUser);
      row.appendChild(deleteUser);


    }
  }
}

const table = document.querySelector("table");
generateTable(table, users);
