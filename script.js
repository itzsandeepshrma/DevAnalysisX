const ctx1 = document.getElementById('commitChart').getContext('2d');
const commitChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Commits',
      data: [12, 19, 3, 5, 2, 3, 9],
      borderColor: '#ff0047',
      backgroundColor: 'rgba(255,0,71,0.1)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#fff' } }
    },
    scales: {
      x: { ticks: { color: '#fff' } },
      y: { ticks: { color: '#fff' } }
    }
  }
});

const ctx2 = document.getElementById('langChart').getContext('2d');
const langChart = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['JavaScript', 'Python', 'HTML', 'CSS'],
    datasets: [{
      label: 'Languages',
      data: [40, 25, 20, 15],
      backgroundColor: ['#f7df1e', '#3572A5', '#e34c26', '#563d7c']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#fff' } }
    }
  }
});

const quotes = [
  "Every commit is a win.",
  "Code like no one’s watching.",
  "Push beyond limits.",
  "You were born to ship.",
  "Dream. Code. Repeat."
];
document.getElementById('quote').textContent =
  quotes[Math.floor(Math.random() * quotes.length)];
