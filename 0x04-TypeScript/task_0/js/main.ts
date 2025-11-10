interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 22,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 24,
  location: 'Abuja',
};

const studentsList: Student[] = [student1, student2];

// Create the table
const table: HTMLTableElement = document.createElement('table');
const headerRow: HTMLTableRowElement = document.createElement('tr');

const headerFirstName: HTMLTableCellElement = document.createElement('th');
headerFirstName.textContent = 'First Name';

const headerLocation: HTMLTableCellElement = document.createElement('th');
headerLocation.textContent = 'Location';

// Append headers to the row
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Populate table rows
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Optional: simple styling
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
table.style.marginTop = '20px';
table.style.width = '50%';
table.style.textAlign = 'left';
table.style.fontFamily = 'Arial, sans-serif';

document.body.appendChild(table);
