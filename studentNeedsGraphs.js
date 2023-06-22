var genChart1Data = () => {
    return {
        datasets: [{
          label: 'Has Accessible Route',
          data: [{
            x: 10,
            y: 0
          }, {
            x: 0,
            y: 10
          }, {
            x: 10,
            y: 5
          }, {
            x: 0.5,
            y: 5.5
          }],
          backgroundColor: getCSSVariable("--idvpink")
        }],
      };
}

var routeScatterData = genChart1Data();

var genChart1 = () => {
    new Chart(
        document.getElementById('graphOne'),
        {
            type: 'scatter',
            data: routeScatterData,
            options: {
                elements: {
                    point: {
                        pointStyle: "rect"
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index'
                },
                plugins: {},
                scales: {
                    y: {
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 6,
                            callback: (value) => {
                                return value;
                            }
                        },
                    },
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 6,
                            callback: (value) => {
                                return value;
                            }
                        },
                    }
                }
            }
        }
    );
}