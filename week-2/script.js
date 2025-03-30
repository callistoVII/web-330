/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Nicole Nielsen
  Date: 03/28/2025
  Filename: Script for Table Reservation
*/

// Create an in-memory object array. Tables should contain properties for tableNumber, capacity, and isReserved.
let tables = [
  { tableNumber: 1, capacity: 8, isReserved: false },
  { tableNumber: 2, capacity: 6, isReserved: true },
  { tableNumber: 3, capacity: 4, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: true },
  { tableNumber: 5, capacity: 8, isReserved: false },
  { tableNumber: 6, capacity: 6, isReserved: true },
  { tableNumber: 7, capacity: 4, isReserved: false },
  { tableNumber: 8, capacity: 4, isReserved: true },
];

let resForm = document.getElementById('reservationForm');

resForm.addEventListener('submit', (e) => {
  let tableNumber = document.getElementById('tableNumber').value;
  const timeout = 2000;

  if (tableNumber == '') {
    alert(
      'Please make sure the form is completely filled out before submitting.'
    );
  } else {
    // Perform operation with form input
    reserveTable(tableNumber, reservationCallback, timeout);
    // Clear the form fields
    tableNumber.value = '';
  }
});

// reserveTable function
function reserveTable(tableNumber, callback, time) {
  if (tableNumber && time) {
    const table = tables.find((table) => table.tableNumber == tableNumber);

    if (!table) {
      callback(
        displayReservationMessage([
          'Sorry, table ' +
            table.tableNumber.toString() +
            ' does not exist. Please try again.',
        ])
      );
      return;
    }

    if (table.isReserved) {
      callback(
        displayReservationMessage([
          'Unfortunately, we are unable to reserve ' +
            table.tableNumber.toString() +
            ', please try a different table.',
        ])
      );
      return;
    }

    // Update status for Table Reservation
    table.isReserved = true;
    setTimeout(
      callback(displayReservationMessage, [
        'Your reservation for table ' +
          table.tableNumber.toString() +
          ' was successful!',
      ]),
      time
    );
  }
}

function displayReservationMessage(message) {
  alert(message);
}

function reservationCallback(callback, message) {
  callback.apply(this, message);
}
