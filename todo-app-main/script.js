// items counter function
let items = document.querySelector("#option-con p");

function itemsUpdate() {
  let count = document.querySelector("ul").childElementCount;
  items.innerHTML = `${count} items left`;
  
}

// deleting items
const list = document.querySelector("main ul");

list.addEventListener("click", function (event) {
  if (Array.from(event.target.classList).includes("xmark")) {
    const li = event.target.parentElement;
    list.removeChild(li);
  }
  itemsUpdate();
});

// Create a new todo...
const create = document.forms["create"];

const formInput = document.querySelector('form input[type="text"]');

const formCheckbox = document.querySelector('form input[type="checkbox"]');

create.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("keydown");
  const value = create.querySelector('input[type="text"]').value;

  // create Element
  const li = document.createElement("li");
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  const label = document.createElement("label");
  const image = document.createElement("img");
  image.setAttribute("src", "images/xmark-solid.svg");
  image.setAttribute("alt", "close-mark");
  image.setAttribute("height", "1.5rem");
  image.setAttribute("width", "1.5rem");

  // Add content
  label.textContent = value;

  // add classes
  li.classList.add("list-layout");
  li.classList.add("first-list");
  div.classList.add("check-label");
  image.classList.add("xmark");
  image.classList.add("visibility");

  // append to DOM
  div.appendChild(input);
  div.appendChild(label);
  li.appendChild(div);
  li.appendChild(image);
  list.appendChild(li);
  console.log(formInput);
  console.log(formCheckbox);
  //   }
  formInput.value = "";
});

// list of objects of all
const state = [
  {
    id: 1,
    status: true,
    content: "Complete online javaScript course",
  },
  {
    id: 2,
    status: true,
    content: "Jog around the park 3x",
  },
  {
    id: 3,
    status: true,
    content: "10 minutes meditation",
  },
  {
    id: 4,
    status: false,
    content: "Read for one hour",
  },
  {
    id: 5,
    status: false,
    content: "Pick up groceries",
  },
  {
    id: 6,
    status: false,
    content: "Complete Todo App on Frontend Mentor",
  },
];

let ul = document.querySelector("ul");
let todoList = [];
todoList = state;

const checkInputs = document.querySelector("input[type=checkbox]");
console.log(checkInputs);
checkInputs.addEventListener("onclick", function () {
  console.log(checkInputs);
  if (this.checked) {
    // todoList[i].status = false;
    console.log("is checked");
  }
});

// display of all button
for (let i = 0; i < todoList.length; i++) {
  if (todoList[i].status === true) {
    ul.innerHTML += `
    <li class="list-layout" draggable="true">
        <div class="check-label">
            <input type="checkbox" class="checked" checked>
            <label>${todoList[i].content}</label>
        </div>
        <img class="xmark visibility" src="images/xmark-solid.svg" alt="close-mark">
    </li>
    `;
  } else {
    ul.innerHTML += `
    <li class="list-layout" draggable="true">
        <div class="check-label">
            <input type="checkbox">
            <label>${todoList[i].content}</label>
        </div>
        <img class="xmark visibility" src="images/xmark-solid.svg" alt="close-mark">
    </li>
    `
    itemsUpdate();
  }
}



const activeBtn = document.querySelectorAll(".aac button");
const all = document.querySelector("#all");
const active = document.querySelector("#active");
const completed = document.querySelector("#completed");
const activeBtnArray = Array.from(activeBtn);

function getActiveContent(e) {
  ul.innerHTML = "";
  if (e.target.innerHTML.toLowerCase() == "all") {
    completed.style.color = "";
    active.style.color = "";
    all.style.color = "rgb(7, 149, 243)";
    todoList = state;
    itemsUpdate();
  } else if (e.target.innerHTML.toLowerCase() == "active") {
    all.style.color = "";
    completed.style.color = "";
    active.style.color = "rgb(7, 149, 243)";
    todoList = [];
    state.filter(function (item) {
      if (item.status === false) {
        todoList.push(item);
      }
    });
    itemsUpdate();
  } else if (e.target.innerHTML.toLowerCase() == "completed") {
    all.style.color = "";
    active.style.color = "";
    completed.style.color = "rgb(7, 149, 243)";
    todoList = [];
    state.filter(function (item) {
      if (item.status === true) {
        todoList.push(item);
      }
    });
    itemsUpdate();
  }
  console.log(todoList);
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].status === true) {
      ul.innerHTML += `
      <li class="list-layout" draggable="true">
          <div class="check-label">
              <input type="checkbox" class="checked" checked>
              <label>${todoList[i].content}</label>
          </div>
          <img class="xmark visibility" src="images/xmark-solid.svg" alt="close-mark">
      </li>
      `
      itemsUpdate();
    } else {
      ul.innerHTML += `
      <li class="list-layout" draggable="true">
          <div class="check-label">
              <input type="checkbox">
              <label>${todoList[i].content}</label>
          </div>
          <img class="xmark visibility" src="images/xmark-solid.svg" alt="close-mark">
      </li>
      `
      itemsUpdate();
    }
  }
}

activeBtnArray.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    getActiveContent(e);
  })
);

const gradientSection = document.querySelector(".gradient-section");
console.log(gradientSection);

// local storage to keep track of users last option
let darkMode = localStorage.getItem("darkMode");
const moonIcon = document.querySelector(".moon-icon");
const listLayout = document.querySelector(".list-layout");
const dark = document.querySelector(".dark");

// switch to dark mode
function enableDarkMode() {
  console.log("darmode enabled");
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");

  // document.body.classList.add('dark');
}

function DisableDarkMode() {
  console.log("darkMode disabled");
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", "disabled");
}

if (darkMode === "enabled") {
  enableDarkMode();
}

// function to switch to darkMode
moonIcon.addEventListener("click", function (e) {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    DisableDarkMode();
  }
});

// clear-completed button function
const clearCompleted = document.querySelector(".clear-completed");

clearCompleted.addEventListener("click", function () {
  const checked = document.querySelectorAll("[checked]");
  console.log(checked);

  Array.from(checked).forEach(function (check) {
    console.log(check);
    check.closest(".list-layout").remove();
  });

  itemsUpdate();
});

// drag and drop function
//const draggables = document.querySelectorAll(".list-layout");

// Array.from(draggables).forEach(function (lists) {
//   list.addEventListener("dragstart", function() {
//     if (darkMode !== "enabled") {
//       list.classList.add("drag-list-light");
//     } else if (darkMode === "enabled") {
//       list.classList.add("drag-list-dark")
//     }
//   });
//   list.addEventListener("dragend", function() {
//     if (darkMode !== "enabled") {
//       list.classList.remove("drag-list-light");
//     } else if (darkMode === "enabled") {
//       list.classList.remove("drag-list-dark")
//     }
//   })
//   list.addEventListener("dragover", function (e) {
//     e.preventDefault();  
//     const bottomList = insertAboveTask(lists, e.clientY);
//     const currentList = document.querySelector(".is-dragging");

//     if (!bottomList) {
//       lists.append(currentList);
//     } else {
//       lists.insertBefore(currentList, bottomList);
//     }
//   })
// })

// const insertAboveTask = (lists, mouseY) => {
//   const elses = lists.querySelectorAll(".list-layout:not(.is-dragging)"); 

//   let closestList = null;
//   let closestOffset = Number.NEGATIVE_INFINITY;  

//   elses.forEach((list) => {
//     const { top } = list.getBoundingClientRect();

//     const offset = mouseY - top;

//     if (offset < 0 && offset > closestOffset) {
//       closestOffset = offset;
//       closestList = list;
//     }
//   })
//   return closestList;
// } 
