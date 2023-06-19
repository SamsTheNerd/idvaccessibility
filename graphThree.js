genChart3 = (function () {
    // Generate data for the chart
    Math.seedrandom('voor');
    var temp1 = [];
    var temp2 = [];
    var original1 = 0;
    var original2 = 0;

    for (let i = 2024; i < 2048; i = i + 2) {
        original1 = Math.floor(Math.random() * 40000) + original1;
        original2 = Math.floor(Math.random() * 30000) + original2;

        let grouping1 = { year: i, dollars: original1 };
        let grouping2 = { year: i, dollars: original2 };

        temp1.push(grouping1);
        temp2.push(grouping2);
    }

    var data1 = temp1;
    var data2 = temp2;

    // Create the chart
    new Chart(
        document.getElementById('graphThree'),
        {
            type: 'line',
            data: {
                labels: data1.map(row => row.year),
                datasets: [
                    {
                        fill: 'origin',
                        label: 'Expected Total Profit from Trans Students',
                        borderColor: '#9ECFED',
                        borderWidth: 3,
                        backgroundColor: '#9ECFED70',
                        data: data1.map(row => row.dollars)
                    },
                    {
                        fill: 0,
                        label: 'New Total Profit from Trans Retention due to New Facilities',
                        borderColor: '#79E9CE',
                        borderWidth: 3,
                        backgroundColor: '#79E9CE70',
                        data: data2.map(row => row.dollars)
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index'
                },
                plugins: {
                    title: {
                        display: true,
                        text: (ctx) => 'Total Profit After Investing in 24 Gender Neutral Restrooms',
                        color: '#000000',
                        font: {
                            size: 20
                        }
                    },
                    annotation: {
                        annotations: [{
                            type: 'line',
                            mode: 'horizontal',
                            scaleID: 'y',
                            value: 300000,
                            borderColor: '#d92173',
                            borderWidth: 4,
                            label: {
                                enabled: true,
                                display: true,
                                content: 'Bathroom Investment',
                                position: 'start', // Position of the label relative to the line (start, center, or end)
                                backgroundColor: '#d92173',
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                },
                            },
                        }]
                    }
                },
                scales: {
                    y: {
                        stacked: true,
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 6,
                            callback: function (value) {
                                return '$' + value;
                            }
                        },
                    }
                }
            }
        }
    );
});