function calcTotal() {
  const priceCells = document.querySelectorAll('[data-ns-test="price"]');
  
  let total = 0;
  priceCells.forEach(cell => {
    total += Number(cell.textContent);
  });

  const totalRow = document.createElement('tr');

  const title = document.createElement('td');
  title.textContent = 'Total';

  const eqls = document.createElement('td');
  eqls.textContent = '==';

  const price = document.createElement('td');
  price.textContent = total;

  totalRow.appendChild(title);
  totalRow.appendChild(eqls);
  totalRow.appendChild(price);

  document.querySelector('tbody').appendChild(totalRow);
}
