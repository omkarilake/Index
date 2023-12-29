// script.js
function calculateDifference() {
  const timestamp1 = document.getElementById('timestamp1').value;
  const timestamp2 = document.getElementById('timestamp2').value;

  const parseTimestamp = (timestamp) => {
      const [datePart, timePart] = timestamp.split(' ');
      const [day, month, year] = datePart.split(':').map(Number);
      const [hour, minute, second] = timePart.split(':').map(Number);
      return new Date(year, month - 1, day, hour, minute, second);
  };

  const date1 = parseTimestamp(timestamp1);
  const date2 = parseTimestamp(timestamp2);

  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
      alert("Please enter valid timestamps in the format 'DD:MM:YYYY HH:MM:SS'");
      return;
  }

  const differenceInSeconds = Math.abs((date2 - date1) / 1000);

  document.getElementById('differenceInSeconds').textContent = differenceInSeconds;
}
