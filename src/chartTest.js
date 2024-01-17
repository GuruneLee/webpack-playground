import {Chart} from 'chart.js';

const data = [
    {label: 'a', value: 1}
]

export const chart = (ctx) => new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.map(d => d.label),
        datasets: [{
            label: '붕붕',
            data: data.map(d => d.value)
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
