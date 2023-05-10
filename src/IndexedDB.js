const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

const request = indexedDB.open("CarsDataBase", 1);

request.onerror = function (event) {
  console.error("An error occurred with IndexedDB");
  console.error(event);
};

request.onupgradeneeded = function () {
  const db = request.result;
  const store = db.createObjectStore("cars", { keyPath: "id" });
  store.createIndex("cars_colour", ["colour"], { unique: false });
  store.createIndex("colour_and_make", ["colour", "make"], {
    unique: false,
  });
};

request.onsuccess = function () {
  const db = request.result;
  const transaction = db.transaction("cars", "readwrite");

  const store = transaction.objectStore("cars");

  store.put({ id: 1, colour: "Red", make: "Toyota" });
  store.put({ id: 2, colour: "Red", make: "Kia" });
  store.put({ id: 3, colour: "Blue", make: "Honda" });
  store.put({ id: 4, colour: "Silver", make: "Subaru" });

  transaction.oncomplete = function () {
    db.close();
  };
};

function getAllRecords() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("CarsDataBase", 1);

    request.onerror = function (event) {
      console.error("An error occurred with IndexedDB");
      reject(event);
    };

    request.onsuccess = function () {
      const db = request.result;
      const transaction = db.transaction("cars", "readonly");

      const store = transaction.objectStore("cars");

      const allCarsQuery = store.getAll();
      allCarsQuery.onsuccess = function () {
        resolve(allCarsQuery.result);
      };

      transaction.oncomplete = function () {
        db.close();
      };
    };
  });
}

function addNewRecord(car) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("CarsDataBase", 1);

    request.onerror = function (event) {
      console.error("An error occurred with IndexedDB");
      reject(event);
    };

    request.onsuccess = function () {
      const db = request.result;
      const transaction = db.transaction("cars", "readwrite");

      const store = transaction.objectStore("cars");

      const addRecord = store.add(car);
      addRecord.onsuccess = function () {
        resolve();
      };

      transaction.oncomplete = function () {
        db.close();
      };
    };
  });
}

export { getAllRecords, addNewRecord };
