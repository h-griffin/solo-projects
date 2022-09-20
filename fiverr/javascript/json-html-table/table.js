
// Data Table
$(document).ready(function () {
    $(".myTable").DataTable({
      order: [[0, "desc"]],
    });
  
      const tableMonthBody = document.querySelector("#tableMonth > tbody");
      console.log(tableMonthBody);
  
      function loadVendedores() {
          const request = new XMLHttpRequest();
          request.open("get", "reporteventa/FAN/1/vendedores");
          request.onload = () => {
              try {
                  const json = JSON.parse(request.responseText);
                  populateVendedores(json);
              } catch (e) {
                  console.warn("Error cargar datos tabla mes");
              }
          };
          request.send();
      }
  
      function populateVendedores(json) {
          console.log(json);
      }
  
      loadVendedores();
      fetch('reporteventa/FAN/1/all')
          .then(response => response.json())
          .then(data => {
              var vendedores = '';

              var dataLength = Object.keys(data).length;
              console.log(dataLength, "data length");

              for (var i = 0; i < dataLength; i++) {

                vendedores += '<tr>';
                    vendedores += '<td>' +
                        data.ventaVendedores[i].codigoVendedor + '</td>';

                    vendedores += '<td>' +
                        data.ventaVendedores[i].nombreVendedor + '</td>';

                    vendedores += '<td>' +
                        data.ventaVendedores[i].cotiza + '</td>';

                    vendedores += '<td>' +
                        data.ventaVendedores[i].fideliza + '</td>';

                    vendedores += '<td>' +
                        data.ventaVendedores[i].elige + '</td>';

                    vendedores += '<td>' +
                        data.ventaVendedores[i].unidades + '</td>';

                    vendedores += '<td>' +
                        data.ventaVendedores[i].margenP + '</td>';

                    vendedores += '<td>' +
                        data.ventaVendedores[i].ventaBruta + '</td>';
                vendedores += '</tr>';
              }
   
              //INSERTING ROWS INTO TABLE 
              $('#tableMonth').append(vendedores);
  
              let porcentajeCumplimientoVenta = data.porcentajeCumplimientoVenta;
              //1-7
              $("#ventaBrutaTotal").html("$ " + data.ventaBrutaTotal); //1
              $("#diferenciaVentaBrutaMetaReal").html("$ " + data.diferenciaVentaBrutaMetaReal); //2
              $(".progress-bar").css({ "width": ""+Math.abs(Math.round(data.porcentajeCumplimientoVenta))+"%"}); //3
              console.log(porcentajeCumplimientoVenta.toFixed(2));
              $("#metaVentaBruta").html("$ " + data.metaVentaBruta); //4
              $("#metaMargenPorcentual").html(data.metaMargenPorcentual.toFixed(2) + " %"); //5
  
              ` `
          });
          
  });
  