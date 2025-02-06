import wixData from 'wix-data';
import wixLocation from 'wix-location';
import { fetch } from 'wix-fetch';

$w.onReady(function () {
  loadLastFourEnteredRecords();
});

function loadLastFourEnteredRecords() {
  wixData.query('Secretchat')
    .limit(8)
    .descending('_updatedDate') // Sort in ascending order by _updatedDate
    .find()
    .then((results) => {
      const items = results.items;
      $w('#repeater1').data = items;
    })
    .catch((error) => {
      console.error(error);
    });
}

$w('#button2').onClick(refreshAndLoadRecords);

function refreshAndLoadRecords() {
  loadLastFourEnteredRecords();
  setTimeout(() => {
    wixLocation.to(wixLocation.url);
    sendTriggeredEmail(); // Move this line here
  }, 100); // Adjust the delay duration as needed
}

function sendTriggeredEmail() {
  const memberId = 'e1b0ca7f-7b9c-4ce4-9ee1-3aa17fed3c93'; // Replace with the actual member ID

  const url = '/_functions/sendTriggeredEmail'; // Replace with the actual backend function URL

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ memberId })
  })
    .then((response) => {
      if (response.ok) {
        console.log('Triggered email sent successfully');
      } else {
        console.error('Error sending triggered email:', response.status);
      }
    })
    .catch((error) => {
      console.error('Error sending triggered email:', error);
    });
}












