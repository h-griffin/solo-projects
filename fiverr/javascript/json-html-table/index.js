// Chart Js
// Chart.defaults.global.defaultFontFamily = "Lato";


// Data Table
$(document).ready(function () {
    $(".myTable").DataTable({
      order: [[0, "desc"]],
    });



      var today = new Date();

      var year = today.getFullYear();
      var month = (today.getMonth()); //today.getMonth()+1
      var day = '01';
      var dayToday = today.getDate();

      var barChartDataSet = [];
      var barChartDataSets = [];
      var barChartLabels = [];


      // fetch(`reporteventa/FAN/1/all?fechaInicio=${year}-${month}-${day}`)
      fetch('../wwwroot/json.txt')
          .then(response => response.json())
          .then(data => {
              $("#tableMonth tbody").empty();
              // console.log(data)
              var vendedores = '';

              $.each(data.ventaVendedores, function (key, value) {

                  vendedores += '<tr>';
                  vendedores += '<td>' +
                      value.codigoVendedor + '</td>';

                  vendedores += '<td>' +
                      value.nombreVendedor + '</td>';

                  vendedores += '<td>' +
                      value.cotiza + '</td>';

                  vendedores += '<td>' +
                      value.fideliza + '</td>';

                  vendedores += '<td>' +
                      value.elige + '</td>';

                  vendedores += '<td>' +
                      value.unidades + '</td>';

                  vendedores += '<td>' +
                      value.margenP + '</td>';

                  vendedores += '<td>' +
                      value.ventaBruta + '</td>';

                  vendedores += '</tr>';

                  // barChartLabels.push(value.codigoVendedor);
                  // console.log(barChartLabels, "labels");

                  // var obj = ({
                  //     data: value.unidades,
                  //     backgroundColor: "#87CEFA"
                  // });

                  // barChartDataSets.push(obj);

                  barChartDataSet.push(value.unidades);

              });

              //INSERTING ROWS INTO TABLE
              $('#tableMonth').append(vendedores);

              //HEADING MONTH YEAR
              let mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(new Date());
              $("#month-year").html(mesActual.toUpperCase() + " DE " + year);

              //HEADING DAY MONTH YEAR
              $("#day-month-year").html(dayToday + mesActual.toUpperCase() + " DE " + year);

              let percCumplimientoVenta = 0;
              if (data.porcentajeCumplimientoVenta < 0) {
                  percCumplimientoVenta = (Math.round(data.porcentajeCumplimientoVenta)+100)
              } else {
                  percCumplimientoVenta = (Math.round(data.porcentajeCumplimientoVenta));
              }

              //MES
              $("#ventaBrutaTotal").html("$ " + data.ventaBrutaTotal); //1
              $("#diferenciaVentaBrutaMetaReal").html("$ " + Math.abs(data.diferenciaVentaBrutaMetaReal)); //2
              $(".progress-bar").css({ "width": "" + percCumplimientoVenta + "%" }); //3
              $("#progress-bar").html(percCumplimientoVenta + " %");
              //$("#progress-bar").html(Math.abs(Math.round(data.porcentajeCumplimientoVenta))+" %"); //3
              $("#metaVentaBruta").html("$ " + data.metaVentaBruta); //4
              $("#metaMargenPorcentual").html(data.metaMargenPorcentual.toFixed(2) + " %"); //5
              $("#avanceMargenMensual").html(data.avanceMargenMensual.toFixed(2) + " %"); //6
              $("#margenCumplimiento").html(data.margenCumplimiento.toFixed(2) + " %"); //7
              $("#metaAcumulada").html("$ " + Math.round(data.metaVentaBruta/dayToday)); //
              $("#ventaActual").html("$ " + data.ventaBrutaTotal); //

              //DIA

          });

          Chart.register(ChartDataLabels);

          var horizontalBarChart = new Chart(

              document.getElementById("horizontalBarChartCanvas"),
              {
                type: "bar",
                data: {
                  labels: ["261", "60"],
                  datasets: [
                    {
                      data: [barChartDataSet],
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
                      text: "V",
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
                          return `${label} u`;
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

          console.log(horizontalBarChart.data.datasets, "datasets");


           //Scroll
          function scrollpage() {
              function f() {
                  window.scrollTo(0, i);
                  if (status == 0) {
                      i = i + 0.1; //scroll speed top to bottom
                      if (i >= Height) {
                          status = 1000;
                      }
                  } else {
                      i = i - 1; //scroll speed bottom to top
                      if (i <= 0.1) {
                          status = 0;
                      }
                  }
              setTimeout(f, 0.0001);
              }
              f();
          }
          var Height = Math.max($(document).height(), $(window).height());  // <<<<<<
          console.log(Height, "height")
          var i = 3;
          status = 0;
          // scrollpage();
      });
