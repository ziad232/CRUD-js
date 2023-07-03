// definations
let price = document.getElementById("price");
let ads = document.getElementById("ads");
let tax = document.getElementById("tax");
let disc = document.getElementById("disc");
let total = document.getElementById("total");
let cat = document.getElementById("category");
let tbody = document.getElementById("tbody");
let deleteall = document.getElementById("deleteall");
let deletealldata = document.getElementById("deletealldata");
let submit = document.getElementById("submit");
let count = document.getElementById("count");
let searchbox = document.getElementById("search");
let proarr;
let mood = "create";
let tmp;
// functions
submit.innerHTML = mood;
// -------------------------gettotal---------------------------------------
function gettotal() {
  if (price.value != "") {
    total.innerHTML = +price.value + +ads.value + +tax.value - +disc.value;
    total.style.background = "green";
  } else {
    total.style.background = "rgb(149, 36, 36)";
    total.innerHTML = "";
  }
}
// -------------------------create and update---------------------------------------
if (localStorage.product == null) {
  proarr = [];
} else {
  proarr = JSON.parse(localStorage.product);
}
function create() {
  if (mood == "create") {
    // create
    let pro = {
      title: title.value,
      price: price.value,
      ads: ads.value,
      tax: tax.value,
      disc: disc.value,
      total: total.innerHTML,
      cat: cat.value,
    };
    if (count.value==""){
      count.value=1;
    }
    for (let z = 0; z < count.value; z++) {
      proarr.push(pro);
      localStorage.setItem("product", JSON.stringify(proarr));
      
    }
  } else {
    //update
    proarr[tmp].title = title.value;
    proarr[tmp].price = price.value;
    proarr[tmp].ads = ads.value;
    proarr[tmp].tax = tax.value;
    proarr[tmp].disc = disc.value;
    proarr[tmp].total = total.innerHTML;
    proarr[tmp].cat = cat.value;
    mood = "create";
    submit.innerHTML = mood;
  }

  title.value = "";
  price.value = "";
  ads.value = "";
  tax.value = "";
  disc.value = "";
  count.value = "";
  total.style.background = "rgb(149, 36, 36)";
  total.innerHTML = "";
  cat.value = "";
  showdata();
  buttondelete();
}

// -------------------------show---------------------------------------

function showdata() {
  tbody.innerHTML = "";
  for (let i = 0; i < proarr.length; i++) {
    tbody.innerHTML += `
          <tr>
            <td>${i + 1}</td>
            <td>${proarr[i].title}</td>
            <td>${proarr[i].price}</td>
            <td>${proarr[i].ads}</td>
            <td>${proarr[i].tax}</td>
            <td>${proarr[i].disc}</td>
            <td>${proarr[i].total}</td>
            <td>${proarr[i].cat}</td>
            <td><button onclick="updatedata(${i})" id="update">update</button></td>
            <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
          </tr>
  `;
  }
}
showdata();

// -------------------------buttondelete---------------------------------------

function buttondelete() {
  if (proarr.length != 0) {
    deleteall.innerHTML = `<button id = 'deletealldata' onclick="clearall()"> Delete all</button>`;
  } else {
    deleteall.innerHTML = "";
  }
}
buttondelete();
// -------------------------clear---------------------------------------

function clearall() {
  localStorage.clear();
  proarr = [];
  showdata();
  buttondelete();
}

// -------------------------delete one element---------------------------------------

function deletedata(i) {
  proarr.splice(i, 1);
  localStorage.setItem("product", JSON.stringify(proarr));
  showdata();
  buttondelete();
}

// -------------------------update one element---------------------------------------

function updatedata(i) {
  title.value = proarr[i].title;
  price.value = proarr[i].price;
  ads.value = proarr[i].ads;
  tax.value = proarr[i].tax;
  disc.value = proarr[i].disc;
  total.innerHTML = proarr[i].total;
  cat.value = proarr[i].cat;
  tmp = i;
  gettotal();
  mood = "update";
  submit.innerHTML = mood;
}


// -------------------------search---------------------------------------

function search(type) {
  tbody.innerHTML = "";
  if (type == "cat") {
    for (let c = 0; c < proarr.length; c++) {
      if (searchbox.value == proarr[c].cat) {
        tbody.innerHTML += `<tr>
            <td>${c}</td>
            <td>${proarr[c].title}</td>
            <td>${proarr[c].price}</td>
            <td>${proarr[c].tax}</td>
            <td>${proarr[c].ads}</td>
            <td>${proarr[c].disc}</td>
            <td>${proarr[c].total}</td>
            <td>${proarr[c].cat}</td>
            <td><button onclick="updatedata(${c})" id="update">update</button></td>
            <td><button onclick="deletedata(${c})" id="delete">delete</button></td>
    </tr>
    `;
      }
    }
  } else {
    for (let c = 0; c < proarr.length; c++) {
      if (searchbox.value == proarr[c].title) {
        tbody.innerHTML += `<tr>
            <td>${c}</td>
            <td>${proarr[c].title}</td>
            <td>${proarr[c].price}</td>
            <td>${proarr[c].tax}</td>
            <td>${proarr[c].ads}</td>
            <td>${proarr[c].disc}</td>
            <td>${proarr[c].total}</td>
            <td>${proarr[c].category}</td>
            <td><button onclick="updatedata(${c})" id="update">update</button></td>
            <td><button onclick="deletedata(${c})" id="delete">delete</button></td>
    </tr>
    `;
      }
    }
  }
}

