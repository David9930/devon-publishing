// Get the current date and time
function getCurrentDateTime() {
  const now = new Date();
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
  const date = now.toLocaleDateString(undefined, dateOptions);
  const time = now.toLocaleTimeString(undefined, timeOptions);
  return { date, time };
}

// Update the date and time display element
function updateDateTimeDisplay() {
  const { date, time } = getCurrentDateTime();
  const dateTimeDisplay = document.getElementById('dateTimeDisplay');
  dateTimeDisplay.textContent = `Date: ${date} | Time: ${time}`;
}

// Call the updateDateTimeDisplay function initially and set it to update every second
updateDateTimeDisplay();
setInterval(updateDateTimeDisplay, 1000);
