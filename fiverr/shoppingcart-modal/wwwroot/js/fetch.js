//VARIABLES
let pagina;
let cantidad;

//CATEGORIAS LOAD
const urlCategorias = "https://api.cdr.cl/b2b/v0.1/Categorias";
fetch(urlCategorias)
  .then((response) => response.json())
  .then((data) => {
    $.each(data, function (key, value) {
      $("#categoria-productos").append(
        `<label class="containers">${value.nombre}<input type="checkbox"><span class="checkmark"></span></label>`
      );
    });
  })
  .catch((err) => console.log(err));

//LABORATORIOS LOAD
const urlLaboratorio = "http://api.cdr.cl/b2b/v0.1/Laboratorios";
fetch(urlLaboratorio)
  .then((response) => response.json())
  .then((data) => {
    $.each(data, function (key, value) {
      $("#laboratorio").append(
        `<label class="containers">${value.nombre}<input type="checkbox"><span class="checkmark"></span></label>`
      );
    });
  })
  .catch((err) => console.log(err));

//CANTIDAD PRODUCTOS POR PAGINA
function checkQuantity(evt) {
  quant = document.getElementById("selectQuantity").value;
  switch (quant) {
    case "8":
      console.log("8");
      cantidad = 8;
      break;
    case "16":
      console.log("16");
      cantidad = 16;
      break;
    case "24":
      console.log("24");
      cantidad = 24;
      break;
    case "32":
      console.log("32");
      cantidad = 32;
      break;
    default:
      console.log("Error cantidad productos " + quant + ".");
  }
  Productos();
}

//ORDERBY PRODUCTS
function checkOrderBy(evt) {
  quant = document.getElementById("selectOrderBy").value;
  switch (quant) {
    case "0":
      console.log("0");
      cantidad = 8;
      break;
    case "1":
      console.log("1");
      cantidad = 16;
      break;
    case "2":
      console.log("2");
      cantidad = 24;
      break;
    case "7":
      console.log("7");
      cantidad = 32;
      break;
    case "8":
      console.log("8");
      cantidad = 32;
      break;
    default:
      console.log("Error cantidad productos " + quant + ".");
  }
  Productos();
}

//PRODUCTOS LOAD
function Productos(pagina = 1, cantidad = 8) {
  // 0 = Default
  // 1 = ArticuloAsc
  // 2 = ArticuloDesc
  // 5 = LaboratorioAsc
  // 6 = LaboratorioDesc
  // 7 = PrecioAsc
  // 8 = PrecioDesc
  // 9 = OfertaAsc
  // 10 = OfertaDesc

  let orderBy = 0;
  let soloOfertas = false;
  let soloBioequivalentes = false;
  let soloPortada = false;



  //http://api.cdr.cl/b2b/v0.1/Articulos?pagina=1&cantidad=8&orderBy=0&soloOfertas=false&soloBioequivalentes=false&soloPortada=false
  const urlProductos = `http://api.cdr.cl/b2b/v0.1/Articulos?pagina=${pagina}&cantidad=${cantidad}&orderBy=${orderBy}&soloOfertas=${soloOfertas}&soloBioequivalentes=${soloBioequivalentes}&soloPortada=${soloPortada}`;
  fetch(urlProductos)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $.each(data.resultados, function (key, value) {
        //console.log(value.articuloNombre);
       
       //IMAGE
       let imgProduct;
       if (!value.tieneFoto) {
        imgProduct = `https://www.redfarma.cl//img/carro-compra/placeholder.png`;
        console.log('imgproduct false');
       }else{
        let articuloCodigo = value.articuloCodigo;
        imgProduct = `https://api.cdr.cl/b2b/v0.1/Articulos/${articuloCodigo}/imagen`;
       }
        console.log(imgProduct);
        console.log(value.tieneFoto);

        $("#product-container").append(`<div class="single-product">
        <div class="product-img">
            <img src="${imgProduct}" alt="">
            <div class="product-img-top">
                <span class="acctivess">Oferta</span>
                <a href="javascript:void(0)" class="cartt">
                    <i class="fas fa-shopping-cart"></i><span>
                        <i class="fal fa-plus"></i>
                    </span>
                </a>
            </div>
            <div class="pro-img-num">
                <a href="javascript:void(0)" class="clloss">
                    <i class="fal fa-times-circle"></i>
                </a>
                <div class="single-num">
                    <h3>Unidad</h3>
                    <input type="number" value="100" style="width: 4ch;">
                    <a href="#"><i class="far fa-plus"></i></a>
                </div>
                <div class="single-num">
                    <h3>Unidad</h3>
                    <input type="number" value="100" style="width: 4ch;">
                    <a href="#"><i class="far fa-plus"></i></a>
                </div>
                <div class="single-num">
                    <h3>Unidad</h3>
                    <input type="number" value="100" style="width: 4ch;">
                    <a href="#"><i class="far fa-plus"></i></a>
                </div>
            </div>
        </div>
        <div class="prosuct-containt">
            <div class="product-title">
                <h3>${value.articuloNombre}</h3>
                <p>${value.familia}</p>
            </div>
            <div class="product-price">
                <div class="product-prict-text">
                    <a href="#">$${value.precioNormal}</a>
                </div>
            </div>
        </div>
    </div>`);
      });
    })
    .catch((err) => console.log(err));
}

$( document ).ready(function() {
    Productos();
    // function summonProducts() {
    //     Productos();
    // }
    
});

