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
                    x: 100,
                    y: 150
                },
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