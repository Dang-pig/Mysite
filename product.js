let USER = JSON.parse(window.localStorage.getItem('curuser'))
let products = JSON.parse(window.localStorage.getItem('smphOf' + USER));
let current = -1;
function displayAllProduct() {
    let str = '';
    for (let i = 0; i <= products.length; i++) {
        str += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td><img style="height:200px;" src=${products[i][3]}></td>
                    <td>${products[i][0]}</td>
                    <td>${products[i][1]}</td>
                    <td>${products[i][2]}</td>
                    <td><button type="button" class="btn btn-success" onclick= "showProduct(${i})">Xem</button>
                    <td><button type="button" class="btn btn-warning" onclick= "editProduct(${i})">Sửa</button>
                    <td><button type="button" class="btn btn-danger" onclick= "deleteProduct(${i})">Xóa</button>
                    </td>
                </tr>`;
    }
    document.getElementById('product-list').innerHTML = str;
    saveData(products);
}
function createProduct() {
    let name = document.getElementById('name-product').value;
    let price = document.getElementById('price-product').value;
    let origin = document.getElementById('madein-product').value;
    let image = document.getElementById('image-product').value;
    if (name != "" && price != "" && origin != "" && image != "") {
        product = [name, price, origin, image];
        products.push(product);
        displayAllProduct();
        clearForm('create-product');
    }
    else {
        if (name == "") {
            document.getElementById('name-product').style = "border-color: red"
        }
        else{
            document.getElementById('name-product').style = "border-color: dodgerblue"
        }
        if (price == "") {
            document.getElementById('price-product').style = "border-color: red"
        }
        else{
            document.getElementById('price-product').style = "border-color: dodgerblue"
        }
        if (origin == "") {
            document.getElementById('madein-product').style = "border-color: red"
        }
        else{
            document.getElementById('madein-product').style = "border-color: dodgerblue"
        }
        if (image == "") {
            document.getElementById('image-product').style = "border-color: red"
        }
        else{
            document.getElementById('image-product').style = "border-color: dodgerblue"
        }
    }
}
function showProduct(index) {
    showForm('show-detail');
    document.getElementById('card-name').innerHTML = products[index][0];
    document.getElementById('card-price').innerHTML = products[index][1];
    document.getElementById('card-madein').innerHTML = products[index][2];
    document.getElementById('card-image').src = products[index][3];
}
function updateProduct() {
    let name = document.getElementById('name-update').value;
    let price = document.getElementById('price-update').value;
    let madein = document.getElementById('madein-update').value;
    let image = document.getElementById('image-update').value;
    products[current][0] = name;
    products[current][1] = price;
    products[current][2] = madein;
    products[current][3] = image;
    displayAllProduct();
    current = -1;
    hideForm('update-product');
}
function editProduct(index) {
    showForm('update-product');
    document.getElementById('name-update').value = products[index][0];
    document.getElementById('price-update').value = products[index][1];
    document.getElementById('madein-update').value = products[index][2];
    document.getElementById('image-update').value = products[index][3];
    current = index;
}
function deleteProduct(index) {
    products.splice(index, 1);
    displayAllProduct();
}

function showForm(id) {
    document.getElementById(id).style.display = "block";
}

function hideForm(id) {
    document.getElementById('name-product').value = ""
    document.getElementById('price-product').value = ""
    document.getElementById('madein-product').value = ""
    document.getElementById('image-product').value = ""
    document.getElementById('name-update').value = ""
    document.getElementById('price-update').value = ""
    document.getElementById('madein-update').value = ""
    document.getElementById('image-update').value = ""
    document.getElementById(id).style.display = "none";
}

function clearForm(id) {
    document.getElementById('name-product').value = ""
    document.getElementById('price-product').ivalue = ""
    document.getElementById('madein-product').value = ""
    document.getElementById('image-product').value = ""
    document.getElementById('name-update').value = ""
    document.getElementById('price-update').value = ""
    document.getElementById('madein-update').value = ""
    document.getElementById('image-update').value = ""
    document.getElementById(id).style.display = "none";
}
function saveData(products){
    window.localStorage.setItem('smphOf' + USER, JSON.stringify(products))
}
function nored3(){

}
displayAllProduct();