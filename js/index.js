

var SiteName = document.getElementById("bookmarkName");
var siteUrl = document.getElementById("bookmarkUrl");
var submitBtn = document.getElementById("submitBtn");
var tbody = document.getElementById("tableContent");
var alerrt = document.getElementById("alert")
var updatebtn = document.getElementById("updatebtn")

var productAll;
var pIndex;

if (localStorage.getItem("product") == null) {
    productAll = [];
}
else {
    productAll = JSON.parse(localStorage.getItem("product"));
    display();
}



function addProduct() {

    if (validTestUrl() == true && validTestName() == true) {
        var product = {
            name: SiteName.value,
            url: siteUrl.value
        }
        productAll.push(product);
        localStorage.setItem("product", JSON.stringify(productAll));
        clear();
        display();
    }
    else (
        alerrt.classList.replace("d-none", "d-block")
    )

}

function clear() {
    SiteName.value = null,
        siteUrl.value = null
}

function display() {
    var box = ``;
    for (var i = 0; i < productAll.length; i++) {
        box += `<tr>
        <th class="text-capitalize">${i + 1}</th>
        <th class="text-capitalize">${productAll[i].name}</th>
        <th class="text-capitalize"><button onclick="eadg(${i})" type="button" class="btn btn-warning"><i class="fa-solid fa-pen me-2"></i> Update</button></th>
        <th class="text-capitalize"><button onclick="visitItem(${i})" type="button" class="btn btn-success"><i class="fa-solid fa-eye me-2"></i> visit</button></th>

        <th class="text-capitalize"><button  onclick="deleteProduct(${i})" type="button" class="btn btn-danger"><i class="fa-solid fa-trash me-2"></i> Delete</button></th>
      </tr>`
    }
    tbody.innerHTML = box;
}





function deleteProduct(index) {
    productAll.splice(index, 1)

    localStorage.setItem('product', JSON.stringify(productAll));
    display(productAll)
}

function deleteProductt() {
    alerrt.classList.replace("d-block", "d-none")
}







function visitItem(index) {
    window.open(productAll[index].url)
}









function validTestUrl() {
    var regerUrl = /^https?:\/\//g;
    return regerUrl.test((siteUrl.value))

}
function validTestName() {
    var regerName = /^[a-z]{3,}$/;
    return regerName.test((SiteName.value))

}



function upDateProduct() {
    var product = {
        name: SiteName.value,
        url: siteUrl.value
    }
    productAll.splice(pIndex, 1, product)
    localStorage.setItem('product', JSON.stringify(productAll));
    display(productAll)


    updatebtn.classList.replace("d-block", "d-none")
    submitBtn.classList.replace("d-none", "d-block")
}

function eadg(index) {
  
    SiteName.value = productAll[index].name
    siteUrl.value = productAll[index].url

    submitBtn.classList.replace("d-block", "d-none")
    updatebtn.classList.replace("d-none", "d-block")
}