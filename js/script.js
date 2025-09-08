// Mock Ticker
const prices = [
	{ pair: "BTC/USD", price: "$45,000", change: "↑" },
	{ pair: "ETH/USD", price: "$3,200", change: "↓" },
	{ pair: "XRP/USD", price: "$0.55", change: "↑" }
];

const ticker = document.getElementById("ticker");
ticker.innerHTML = prices.map(p => `
  <span class="me-4">${p.pair}: ${p.price} ${p.change}</span>
`).join("");

// Chart.js Demo
const ctx = document.getElementById('tradingChart').getContext('2d');
new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
		datasets: [{
			label: 'BTC/USD',
			data: [44000, 45500, 44800, 46000, 45000],
			borderColor: 'blue',
			backgroundColor: 'rgba(0, 0, 255, 0.1)',
			tension: 0.3
		}]
	},
	options: {
		responsive: true
	}
});
