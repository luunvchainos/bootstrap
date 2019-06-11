export const planetChartData = {
    type: 'line',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [
            // { // one line graph
            //     label: 'Number of Moons',
            //     data: [0, 0, 1, 2, 67, 62, 27, 14],
            //     backgroundColor: [
            //         'rgba(54,73,93,.5)', // Blue
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)'
            //     ],
            //     borderColor: [
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //     ],
            //     borderWidth: 2,
            //     fill: false
            // },
            { // another line graph
                label: '2019',
                data: [400, 600, 700, 900, 1200, 1100, 600, 700, 800, 800],
                backgroundColor: [
                    'rgba(71, 183,132,.5)', // Green
                ],
                borderColor: [
                    '#47b784',
                ],
                borderWidth: 2,
                fill: false,
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        elements: {
            line: {
                tension: 0.000001
            }
        },
        plugins: {
            filler: {
                propagate: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    beginAtZero: false,
                    padding: 25
                }
            }]
        }
    }
}

export default planetChartData;