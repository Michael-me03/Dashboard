document.addEventListener("DOMContentLoaded", function () {
  // Fetch Portfolio Summary
  fetch('/api/portfolio')
    .then(response => response.json())
    .then(data => {
      document.querySelector("#totalValue").textContent = `$${data.totalValue}`;
      document.querySelector("#totalInvested").textContent = `$${data.totalInvested}`;
    });

  // Fetch Graph Data
  fetch('/api/graph-data')
    .then(response => response.json())
    .then(data => {
      const ctx = document.getElementById('valueChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.dates,
          datasets: [{
            label: 'Portfolio Value',
            data: data.values,
            borderColor: '#0bda5b',
            backgroundColor: 'rgba(11, 218, 91, 0.1)',
          }]
        }
      });
    });

  // Fetch Recent Activity
  fetch('/api/recent-activity')
    .then(response => response.json())
    .then(data => {
      const activityDiv = document.querySelector("#recentActivity");
      data.activities.forEach(activity => {
        const activityItem = document.createElement("div");
        activityItem.className = "activity-item";
        activityItem.innerHTML = `
          <p>${activity.description}</p>
          <p>$${activity.amount} - ${activity.date}</p>
        `;
        activityDiv.appendChild(activityItem);
      });
    });
});