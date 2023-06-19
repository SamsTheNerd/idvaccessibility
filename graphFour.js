genChart4 = () => {
    // Generate data for the chart
    Math.seedrandom('voomm');
    var temp1 = [];
    var temp2 = [];
    var original1 = 0;
    var original2 = 0;

    for (let i = 2015; i < 2023; i++) {
        original1 = Math.floor(Math.random() * (i / 2015) * 60) / 8000 + original1;
        original2 = Math.floor(Math.random() * (i / 2015) * 9) / 600 + original2;

        let grouping1 = { year: i, students: original1 };
        let grouping2 = { year: i, students: original2 };

        temp1.push(grouping1);
        temp2.push(grouping2);
    }

    var data1 = temp1;
    var data2 = temp2;

    // Create the chart
    new Chart(
        document.getElementById('graphFour'),
        {
            type: 'bar',
            data: {
                labels: data1.map(row => row.year),
                datasets: [
                    {
                        fill: 'origin',
                        label: 'Trans Enrollment',
                        borderColor: '#79E9CE',
                        borderWidth: 3,
                        backgroundColor: '#79E9CE90',
                        data: data1.map(row => row.students)
                    },
                    {
                        fill: 0,
                        label: 'Trans Withdrawal',
                        borderColor: '#9C8CCA',
                        borderWidth: 3,
                        backgroundColor: '#9C8CCA90',
                        data: data2.map(row => row.students)
                    },
                ]
            },
            options: {
                responsive: true,
                interaction: {
                    mode: 'index'
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';
                                label += ': ';

                                if (label === 'Trans Enrollment: ') {
                                    label += Math.floor(context.parsed.y * 8000);
                                } else {
                                    label += Math.floor(context.parsed.y * 2000);
                                }
                                return label;
                            }

                        }
                    },
                    title: {
                        display: true,
                        text: (ctx) => 'Yearly Enrollment Versus Withdrawal for Trans Students',
                        color: '#000000',
                        font: {
                            size: 20
                        }
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            callback: function (value) {
                                return value * 100 + '%';
                            }
                        },
                    }
                }
            }
        }
    );
};