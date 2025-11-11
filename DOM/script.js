const totalButton = document.getElementById('totalBtn');

totalButton.addEventListener('click', function () {

  const priceCells = document.querySelectorAll('[data-ns-test="price"]');
  let total = 0;

  priceCells.forEach(cell => {
    total += Number(cell.textContent);
  });

  const totalRow = document.createElement('tr');

  const srNoCell = document.createElement('td');
  srNoCell.textContent = '==';

  const titleCell = document.createElement('td');
  titleCell.textContent = 'Total';

  const priceCell = document.createElement('td');
  priceCell.textContent = total;

  totalRow.append(titleCell);
  totalRow.append(srNoCell);
  totalRow.append(priceCell);

  document.querySelector('tbody').appendChild(totalRow);
});
