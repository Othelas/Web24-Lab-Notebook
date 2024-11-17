
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

const url = 'https://anapioficeandfire.com/api/books/';
const app = document.querySelector('#books');

const fetchData = async (url) => {
  const loader = document.getElementById('loading');
  loader.style.display = 'block';

  try {
    const response = await fetch(url);
    const books = await response.json();

    loader.style.display = 'none';

    books.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book', 'my-4', 'p-3', 'border', 'rounded');
      
      const title = book.name;
      const authors = book.authors.join(', ');
      const publishedDate = new Date(book.released).getFullYear();
      const pages = book.numberOfPages;

      bookDiv.innerHTML = `
        <h3 class="text">${title}</h3>
        <p>by ${authors}</p>
        <p>${publishedDate}</p>
        <p>${pages} pages</p>
      `;

      app.appendChild(bookDiv);
    });

    app.style.display = 'flex';
    app.style.flexDirection = 'column';
    app.style.alignItems = 'center';
  } catch (error) {
    console.error('Error fetching data:', error);
    loader.style.display = 'none';
    app.textContent = 'Failed to load data';
  }
};

fetchData(url);
