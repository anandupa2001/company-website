let users = [];
document.getElementById("search-btn").addEventListener("click", function () {
  let textbox = document.getElementById("textbox").value;
  if (textbox?.trim() == "") {
    alert("Please enter name");
    fetchUserData();
  } else {
    users = users.filter((value) => {
      return value.firstName?.toLowerCase() === textbox?.toLowerCase();
    });
  }
  createBox();
  console.log(users);
});

document.getElementById("textbox").addEventListener("keydown", function (e) {
  if (e.target.value?.trim() != "" && e.code == "Enter" && e.key == "Enter") {
    users = users.filter((value) => {
      return value.firstName?.toLowerCase() === e.target.value?.toLowerCase();
    });
    createBox();
    console.log(users);
  }
});

function fetchUserData() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((res) => {
      users = res.users;
      createBox();
    });
}

function createBox() {
  document.getElementById("user-box").innerHTML = "";
  if (users.length === 0) {
    document.getElementById("user-box").innerHTML = "<h1>No user found</h1>";
  }
  users.forEach((value) => {
    let box = document.createElement("div");
    box.classList.add("box");
    console.log("hello");
    box.innerHTML = `<div class="boxes">
        <img
          class="image"
          src= ${value.image}
          alt="image"
        />
        <h3>Name : ${value.firstName} ${value.lastName}</h3>
        <h3>Age : ${value.age}</h3>
        <h3>E-mail : ${value.email}</h3>
        <h3>Phone no. ${value.phone}</h3>
      </div>`;
    document.getElementById("user-box").append(box);
  });
}

fetchUserData();
