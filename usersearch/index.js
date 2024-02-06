let users = [];
document.getElementById("search-btn").addEventListener("click", function () {
  let textbox = document.getElementById("textbox").value;
  let filteredData = [...users];
  if (textbox?.trim() == "") {
    alert("Please enter user name");
    fetchUserData();
  } else {
    filteredData = users.filter((value) => {
      return value.id == textbox;
    });
  }
  createBox(filteredData);
});

document.getElementById("textbox").addEventListener("keydown", function (e) {
  let filteredData = [...users];
  if (e.target.value?.trim() != "" && e.code == "Enter" && e.key == "Enter") {
    filteredData = users.filter((value) => {
      return value.id == e.target.value;
    });
    createBox(filteredData);
  }
});

function fetchUserData() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((res) => {
      users = res.users;
      createBox(users);
    });
}
function createBox(allUsers) {
  document.getElementById("user-box").innerHTML = "";
  if (allUsers.length === 0) {
    document.getElementById("user-box").innerHTML = "<h1> No user found</h1>";
  }
  allUsers.forEach((value) => {
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `<div class="boxes" onclick>
        <img
          class="image"
          src= ${value.image}
          alt="image"
        />
        <h3>Id : ${value.id}</h3>
        <h3>Name : ${value.firstName} ${value.lastName}</h3>
        <h3>Age : ${value.age}</h3>
        <h3>E-mail : ${value.email}</h3>
        <h3>Phone no. ${value.phone}</h3>
      </div>`;
    box.addEventListener("click", () => callUserData(value.id));
    document.getElementById("user-box").append(box);
  });
}
fetchUserData();

function callUserData(id) {
  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => response.json())
    .then((res) => {
      removeOtherImages(res);
    });
}

function removeOtherImages(value) {
  document.getElementById("user-box").innerHTML = "";
  let box1 = document.createElement("div");
  box1.classList.add("box");
  box1.innerHTML = `<button class="btn" onclick="createBox(users)"><img class="back-icon" src="https://cdn-icons-png.flaticon.com/128/7710/7710436.png" /></button><div class="user-box">
        <img
          class="user-image"
          src= ${value.image}
          alt="image"
        />
        <h3>Id : ${value.id}</h3>
        <h3>Name : ${value.firstName} ${value.lastName}</h3>
        <h3>Gender : ${value.gender}</h3>
        <h3>Age : ${value.age}</h3>
        <h3>Birth Date : ${value.birthDate}</h3>
        <h3>Blood Group : ${value.bloodGroup}</h3>
        <h3>E-mail : ${value.email}</h3>
        <h3>Password : ${value.password}</h3>
        <h3>Phone no. ${value.phone}</h3>
        <h3>Address : ${value.address.address}, ${value.address.city}, ${value.address.state}</h3>
      </div>`;
  document.getElementById("user-box").append(box1);
}
