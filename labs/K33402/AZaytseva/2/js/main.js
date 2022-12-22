init();
let allProducts = [];
let currentProductCount = 0;

function init() {
    const showAllButton = document.querySelector('.show-all-button');
    showAllButton.addEventListener('click', function() {
      showMoreProducts();
    });

    const filterButtons = document.querySelectorAll('.color-filter .dropdown-item');
    for (let filterButton of filterButtons) {
      filterButton.addEventListener('click', function() {
        for (let filterButtonInner of filterButtons) {
          if (filterButtonInner !== filterButton) {
            filterButtonInner.classList.remove('active');
          }
        }
        if (!filterButton.classList.contains('active')) {
          filterColor(filterButton.dataset.color);
          filterButton.classList.add('active');
        } else {
          filterColor('');
          filterButton.classList.remove('active');
        }
        document.querySelector('.show-all-button')?.remove();
      });
    }

    fetchProducts()
        .then(products => {
            allProducts = products;
            updateProductCount(allProducts.length, 'total');

            currentProductCount = 12;
            renderProductsAfter(allProducts.slice(0, currentProductCount), document.querySelector('.filters-row'));
            updateProductCount(12);
        });
}

function fetchProducts() {
    return fetch('http://localhost:3000/products')
        .then(response => response.json())
}

function fetchProductsByColor(color) {
    if (color === '') {
      return fetchProducts();
    }
    return fetch('http://localhost:3000/products?color=' + color)
        .then(response => response.json())
}

function getProductRows(products, chunkSize) {
    const productRows = [];
    for (let i = 0; i < products.length; i += chunkSize) {
        const chunk = products.slice(i, i + chunkSize);
        productRows.push(chunk);
    }
    return productRows;
}

function renderProductsAfter(products, elem) {
    const productRows = getProductRows(products, 4);
    for (let row of productRows) {
        const rowElement = document.createElement('div');
        rowElement.className = 'product-row row text-nowrap';
        for (let product of row) {
            const productHTML = `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                  <a href="/product.html" class="text-black nav-link">
                    <div class="card border border-0">
                      <img
                        src="${product.photo}"
                        class="card-img-top img-fluid"
                        alt="${product.name}"
                        width="306"
                        height="391"
                      >
                      <div class="card-body px-0">
                        <h4 class="card-title h6">${product.name}</h4>
                        <p class="card-text">${product.price}</p>
                      </div>
                    </div>
                  </a>
                </div>
            `;
            rowElement.insertAdjacentHTML('beforeend', productHTML);
        }
        elem.after(rowElement);
        elem = rowElement;
    }
}

function updateProductCount(count, type = 'current') {
    if (type === 'total') {
        document.querySelector('.product-count-total').textContent = count;
    } else {
        document.querySelector('.product-count-current').textContent = count;
    }
}

function showMoreProducts() {
  const productRowElements = document.querySelectorAll('.product-row');
  const lastProductRowElement = productRowElements[productRowElements.length - 1];
  renderProductsAfter(allProducts.slice(currentProductCount, allProducts.length), lastProductRowElement);
  document.querySelector('.show-all-button')?.remove();
  currentProductCount = allProducts.length;
  updateProductCount(currentProductCount);
}

function filterColor(color) {
    const productRowElements = document.querySelectorAll('.product-row');
    for (let productRowElement of productRowElements) {
      productRowElement.remove();
    }
    fetchProductsByColor(color)
      .then(products => {
          currentProductCount = products.length;
          renderProductsAfter(products, document.querySelector('.filters-row'));
          updateProductCount(currentProductCount);
      });
}


