const dbName = "todoList";
const request = indexedDB.open(dbName, 1);

request.onerror = function (event) {
  console.log("Error opening database");
};

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore("tasks", {
    keyPath: "id",
    autoIncrement: true,
  });
  objectStore.createIndex("description", "description", { unique: false });
};

request.onsuccess = function (event) {
  const db = event.target.result;
  const transaction = db.transaction(["tasks"], "readonly");
  const objectStore = transaction.objectStore("tasks");

  const requestGetAll = objectStore.getAll();

  requestGetAll.onerror = function (event) {
    console.log("Error getting tasks");
  };

  requestGetAll.onsuccess = function (event) {
    const tasks = event.target.result;
    renderTasks(tasks);
  };

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.querySelector("input[type='text']");
    const task = { description: input.value };
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const requestAdd = objectStore.add(task);

    requestAdd.onerror = function (event) {
      console.log("Error adding task");
    };

    requestAdd.onsuccess = function (event) {
      task.id = event.target.result;
      renderTasks([task]);
      input.value = "";
    };
  });
};

function renderTasks(tasks) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = task.description;
    ul.appendChild(li);
  }
}

export default renderTasks;
