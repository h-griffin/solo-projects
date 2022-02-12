// Chart Js
// Chart.defaults.global.defaultFontFamily = "Lato";
Chart.register(ChartDataLabels);

var horizontalBarChart = new Chart(
  document.getElementById("horizontalBarChartCanvas"),
  {
    type: "bar",
    data: {
      labels: ["261", "60"],
      datasets: [
        {
          data: [3000, 2000],
          backgroundColor: ["#87CEFA", "#87CEFA"],
        },
      ],
      plugins: [ChartDataLabels],
    },
    options: {
      barThickness: 25,
      indexAxis: "y",
      plugins: {
        legend: {
          display: true,
          position: "left",
          align: "center",
          labels: {
            boxWidth: 0,
            boxHeight: 0,
            color: "white",
          },
          title: {
            text: "Vendedor",
            display: true,
          },
        },
        datalabels: {
          color: "black",
          labels: {
            title: {
              font: {
                weight: "bold",
              },
            },
          },
        },
      },
      tooltips: {
        enabled: false,
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            categoryPercentage: 0.4,
            gridLines: {
              display: true,
              drawTicks: true,
              drawOnChartArea: false,
            },
            ticks: {
              fontColor: "#555759",
              fontFamily: "Lato",
              fontSize: 13,
            },
          },
        ],
        xAxes: {
          gridLines: {
            display: true,
            drawTicks: false,
            tickMarkLength: 5,
            drawBorder: false,
          },
          ticks: {
            padding: 5,
            beginAtZero: true,
            fontColor: "#555759",
            fontFamily: "Lato",
            fontSize: 11,
            callback: function (label, index, labels) {
              return `${label} unid`;
            },
          },
          scaleLabel: {
            display: true,
            padding: 10,
            fontFamily: "Lato",
            fontColor: "#555759",
            fontSize: 13,
            fontStyle: 300,
            labelString: "Unidades",
          },
        },
      },
    },
  }
);

function loadVendedores() {
        const request = new XMLHttpRequest();

        // request.open("get", "reporteventa/FAN/1/all?");
        request.open("get", "../wwwroot/json.txt");
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


function populateVendedores(json, params='') {
    console.log(json);

    // fetch(`reporteventa/FAN/1/all?fechaInicio=${params}`)
    fetch('../wwwroot/json.txt')
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

              $('#myTableId tbody').empty();
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
    }

// Data Table
$(document).ready(function () {
  $(".myTable").DataTable({
    order: [[0, "desc"]],
  });

    populateVendedores();

    $('#selectAño, #selectMes').on('change', function () {
        // loadVendedores();
        $('.myTableId tbody').empty();

        var year = document.getElementById('selectAño').value;
        var month = document.getElementById('selectMes').value;
        var day = '15';
        console.log(`${year}-${month}-${day}`, `reporteventa/FAN/1/all?fechaInicio=${year}-${month}-${day}`)

        var params = `${year}-${month}-${day}`
        populateVendedores(params);

    });

    function pageScroll() {
        window.scrollBy(0,1);
        scrolldelay = setTimeout(pageScroll,30);
    }
    pageScroll();
});
