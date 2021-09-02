// storing IDs in variables
const inputField = document.getElementById('search-input');
const searchStatus = document.getElementById('search-status');
const spinner = document.getElementById('spinner');
const resultsContainer = document.getElementById('results-container');

// Loading data from API
const loadBooks = () => {
	const searchText = inputField.value;
	if (!searchText) {
		// Error Handling
		searchStatus.innerText = "Search field can't be empty";
		searchStatus.style.display = 'block';
	} else {
		// Clean up
		searchStatus.style.display = 'none';
		spinner.style.display = 'block';
		resultsContainer.innerHTML = '';
		// Fetching data
		const url = `https://openlibrary.org/search.json?q=${searchText}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => showBooks(data));
	}
	inputField.value = '';
};
// Showing the results
const showBooks = (books) => {
	// Clean up

	spinner.style.display = 'none';
	resultsContainer.innerHTML = '';
	// Show results
	books.docs.forEach((book) => {
		// Book Cover Image
		let coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

		if (!book.cover_i) {
			coverUrl = '../images/cover-demo.jpg';
		}
		// Book Author
		let bookAuthor;

		if (!book.author_name) {
			bookAuthor = ' ';
		} else {
			bookAuthor = `by <span class="text-danger fw-bold">${book.author_name[0]}</span>`;
		}
		// First pushlish year
		let publishYear = `First published in ${book.first_publish_year}`;

		if (!book.first_publish_year) {
			publishYear = ' ';
		}
		// Publisher
		let publisher;

		if (!book.publisher) {
			publisher = ' ';
		} else {
			publisher = `Publisher: ${book.publisher[0]}`;
		}
		// Creating Result Card
		const card = document.createElement('div');
		card.classList.add('col');
		card.innerHTML = `
            <div class="card h-100">
                <img src="${coverUrl}" class="card-img-top book-cover" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="mb-1">${bookAuthor}</p>
                    <small class="text-secondary">${publishYear}</small>
                    <small class="text-primary">${publisher}</small>
                </div>
            </div>
        `;
		// appending to the parent container
		resultsContainer.appendChild(card);
	});
	// Result Status
	if (books.numFound === 0) {
		searchStatus.innerText = 'No result found';
	} else {
		searchStatus.innerText = `Showing ${resultsContainer.childNodes.length} of ${books.numFound} Results`;
	}
	searchStatus.style.display = 'block';
};
