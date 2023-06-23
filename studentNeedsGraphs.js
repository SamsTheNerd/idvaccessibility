var genChart1Data = () => {
    return {
        datasets: [{
          label: 'Has Accessible Route',
          data: [
            {
                locA: "Folsom 3rd Floor",
                locB: "DCC 318",
                x: 540,
                y: 760
            },
            {
                locA: "DCC 308",
                locB: "DCC 318",
                x: 40,
                y: 40
            },
            {
                locA: "JEC 3118",
                locB: "DCC 318",
                x: 210,
                y: 420
            }
          ],
          backgroundColor: getCSSVariable("--idvgreen")
        },
        {
            label: 'No Fully Accessible Route',
            data: [
                {
                    locA: "Amos Eaton 214",
                    locB: "DCC 318",
                    x: 500,
                    y: 650
                },
                {
                    locA: "Amos Eaton 114",
                    locB: "VCC 2nd Floor",
                    x: 110,
                    y: 160
                },
                {
                    locA: "Sage 3303",
                    locB: "Union 1802",
                    x: 660,
                    y: 710
                },
                {
                    locA: "Rickets 211",
                    locB: "Troy 112",
                    x: 180,
                    y: 340
                }
            ],
            backgroundColor: getCSSVariable("--idvpink")
          },],
      };
}

var routeScatterData = genChart1Data();
var chart1;

var updateChart1Viewer = (locationData, accessible) => {
    document.getElementById("graphOneInfoBox").style.setProperty("--accent-color", 
        accessible ? getCSSVariable("--idvgreen") : getCSSVariable("--idvpink"));
    document.getElementById("graphOneInfoBox").style.setProperty("--select-background-color", 
        accessible ? getCSSVariable("--idvgreen") : getCSSVariable("--idvpink"));
    document.getElementById("graphOneInfoBox").innerHTML = `
    <h3 class="dataViewerHeader">Route Info</h3>
    <p>
    <span class="dataViewerSubhead">From</span>
    <br>
    <span class="dataViewerData">${locationData.locA}</span>
    <br>
    <span class="dataViewerSubhead">To</span>
    <br>
    <span class="dataViewerData">${locationData.locB}</span>
    <br>
    <span class="dataViewerSubhead">Shortest Route</span>
    <br>
    <span class="dataViewerData">${locationData.x}m</span>
    <br>
    <span class="dataViewerSubhead">Shortest ${!accessible ? "" : ""}Accessible Route</span>
    <br>
    <span class="dataViewerData">${locationData.y}m</span>
    <br>
    ${accessible ? "" : `<span class="dataViewerSubhead isAccessibleData">Not Fully Accessible</span>`}
    <p>
    `
}

var onHoverChart1 = (event) => {
    // console.log(event);
    var dataPoints = event.chart.tooltip.dataPoints;
    if(dataPoints == undefined || dataPoints.length == 0) return;
    var dataPoint = dataPoints[0];
    // console.log(dataPoint);
    var realData = routeScatterData.datasets[dataPoint.datasetIndex].data[dataPoint.dataIndex];
    updateChart1Viewer(realData, !dataPoint.datasetIndex);
}


var genChart1 = () => {
    chart1 = new Chart(
        document.getElementById('graphOne'),
        {
            type: 'scatter',
            data: routeScatterData,
            options: {
                elements: {
                    point: {
                        pointStyle: (ctx) => {ctx.dataIndex == 0 ? 'circle' : 'rect'},
                        radius: 8,
                        hoverRadius: 10,
                        hoverBorderWidth: 10
                    }
                },
                onHover: onHoverChart1,
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1,
                interaction: {
                    // mode: 'index'
                },
                plugins: {},
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: "Distance of shortest accessible route"
                        },
                        beginAtZero: true,
                        max: 1000,
                        ticks: {
                            autoSkip: true,
                            count: 11,
                            callback: (value) => {
                                return value + 'm';
                            }
                        },
                    },
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: "Distance of shortest route"
                        },
                        beginAtZero: true,
                        max: 1000,
                        ticks: {
                            autoSkip: true,
                            count: 11,
                            callback: (value) => {
                                return value + 'm';
                            }
                        },
                    }
                }
            }
        }
    );
}


/*
 .o88b. db   db  .d8b.  d8888b. d888888b      .d888b.
d8P  Y8 88   88 d8' `8b 88  `8D `~~88~~'      VP  `8D
8P      88ooo88 88ooo88 88oobY'    88            odD'
8b      88~~~88 88~~~88 88`8b      88          .88'
Y8b  d8 88   88 88   88 88 `88.    88         j88.
 `Y88P' YP   YP YP   YP 88   YD    YP         888888D

*/

// var bathroomData = genChart2Data();
// var chart2;

// var genChart2Data = () => {
//     return 
// }

// var genChart2 = () => {

// }