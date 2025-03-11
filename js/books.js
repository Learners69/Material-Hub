document.addEventListener("DOMContentLoaded", function () {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  
  // Book data (instead of fetching from JSON files)
  const bookData = {
    'psychological': [
      {
        "title": "Don't Believe Everything You Think",
        "author": "Joseph Nguyen",
        "coverImage": "Don't Believe Everything You Think.jpg",
        "downloadLink": "https://www.mediafire.com/file/wkkj8fb4jjlepyo/Dont_Believe_Everything_You_Think_Why_Your_Thinking_Is_The_Beginning__End_Of_Suffering_%2528Joseph_Nguyen%2529_%2528Z-Library%2529.pdf/file"
      },
      {
        "title": "Atomic Habits",
        "author": "James Clear",
        "coverImage": "Atomic Habits.jpg",
        "downloadLink": "https://www.mediafire.com/file/azwskbyqu5u2u8w/Atomic_Habits_Tiny_Changes%252C_Remarkable_Results_%2528James_Clear%2529_%2528Z-Library%2529.pdf/file"
      },
      {
        "title": "The Subtle Art of Not Giving a F*ck",
        "author": "Mark Manson",
        "coverImage": "The Subtle Art of Not Giving a Fuck.jpg",
        "downloadLink": "https://www.mediafire.com/file/wr6u4re2wswx2i0/The_Subtle_Art_of_Not_Giving_a_Fck_%2528Mark_Manson%2529_%2528Z-Library%2529.pdf/file"
      },
      {
        "title": "Thinking, Fast and Slow",
        "author": "Daniel Kahneman",
        "coverImage": "Thinking, Fast and Slow.jpg",
        "downloadLink": "https://www.mediafire.com/file/rjkp8b9tupn60wk/Thinking%252C_Fast_and_Slow_%2528Daniel_Kahneman%2529_%2528Z-Library%2529.pdf/file"
      },
      {
        "title": "Man's Search for Meaning",
        "author": "Viktor E. Frankl",
        "coverImage": "Man's Search for Meaning.jpg",
        "downloadLink": "https://www.mediafire.com/file/qx012v2qm4mz21v/Mans_Search_For_Meaning_%2528Viktor_Emil_Frankl%2529_%2528Z-Library%2529.pdf/file"
      }
    ],
    'cs': [
      {
        "title": "JavaScript: The Good Parts",
        "author": "Douglas Crockford",
        "coverImage": "javascript-good-parts.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-js-good-parts/file"
      },
      {
        "title": "Python Crash Course",
        "author": "Eric Matthes",
        "coverImage": "python-crash-course.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-python-crash-course/file"
      },
      {
        "title": "Clean Code",
        "author": "Robert C. Martin",
        "coverImage": "clean-code.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-clean-code/file"
      },
      {
        "title": "Eloquent JavaScript",
        "author": "Marijn Haverbeke",
        "coverImage": "eloquent-javascript.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-eloquent-js/file"
      },
      {
        "title": "Learning React",
        "author": "Alex Banks & Eve Porcello",
        "coverImage": "learning-react.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-learning-react/file"
      },
      {
        "title": "HTML & CSS: Design and Build Websites",
        "author": "Jon Duckett",
        "coverImage": "html-css.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-html-css/file"
      },
      {
        "title": "You Don't Know JS",
        "author": "Kyle Simpson",
        "coverImage": "you-dont-know-js.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-you-dont-know-js/file"
      },
      {
        "title": "Node.js Design Patterns",
        "author": "Mario Casciaro",
        "coverImage": "nodejs-design-patterns.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-nodejs-design-patterns/file"
      },
      {
        "title": "Designing Data-Intensive Applications",
        "author": "Martin Kleppmann",
        "coverImage": "designing-data-intensive-applications.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-data-intensive/file"
      }
    ],
    'biography': [
      {
        "title": "Steve Jobs",
        "author": "Walter Isaacson",
        "coverImage": "steve-jobs.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-steve-jobs/file"
      },
      {
        "title": "Becoming",
        "author": "Michelle Obama",
        "coverImage": "becoming.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-becoming/file"
      },
      {
        "title": "Elon Musk",
        "author": "Walter Isaacson",
        "coverImage": "elon-musk.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-elon-musk/file"
      },
      {
        "title": "The Diary of a Young Girl",
        "author": "Anne Frank",
        "coverImage": "diary-young-girl.jpg",
        "downloadLink": "https://www.mediafire.com/file/example-link-diary-young-girl/file"
      }
    ]
  };
  
  // Load books based on category
  loadBooks(category, bookData);
  
  // Set up search functionality
  document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    
    document.querySelectorAll('.book-card').forEach(card => {
      const title = card.querySelector('.book-title').textContent.toLowerCase();
      const author = card.querySelector('.book-author').textContent.toLowerCase();
      const parentCol = card.closest('.col-6');
      
      if (title.includes(searchTerm) || author.includes(searchTerm)) {
        parentCol.style.display = 'block';
      } else {
        parentCol.style.display = 'none';
      }
    });
  });
  
  // Highlight active category in dropdown
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  
  dropdownItems.forEach(item => {
    const itemHref = item.getAttribute('href');
    
    // Check if this item corresponds to the current category
    if (category && itemHref && itemHref.includes(`category=${category}`)) {
      item.classList.add('active');
    } else if (!category && itemHref === 'books.html') {
      // If no category is selected, highlight "All Books"
      item.classList.add('active');
    }
  });
  
  // Set up modal functionality
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('download-btn') || e.target.closest('.download-btn')) {
      e.preventDefault();
      
      const bookCard = e.target.closest(".book-card");
      const title = bookCard.querySelector(".book-title").textContent.trim();
      const author = bookCard.querySelector(".book-author").textContent;
      const coverSrc = bookCard.querySelector(".book-cover").src;
      const downloadLink = bookCard.querySelector(".download-btn").getAttribute('href');
      
      // Populate modal
      document.getElementById('modalBookTitle').textContent = title;
      document.getElementById('modalBookAuthor').textContent = author;
      document.getElementById('modalBookCover').src = coverSrc;
      document.getElementById('modalDownloadBtn').href = downloadLink;
      
      // Get and set book description from our descriptions file
      const description = getBookDescription(title);
      document.getElementById('modalBookDescription').innerHTML = description;
      
      // For debugging
      console.log("Book title:", title);
      console.log("Description found:", description);
      
      // Show modal
      const modal = new bootstrap.Modal(document.getElementById('bookDetailModal'));
      modal.show();
    }
  });
});

// Function to load books
function loadBooks(category, bookData) {
  const booksContainer = document.getElementById('booksContainer');
  booksContainer.innerHTML = ''; // Clear existing books
  
  // Update page title based on category
  const categoryTitles = {
    'psychological': 'Psychological Self-Help',
    'cs': 'Computer Science',
    'biography': 'Biography & Autobiography'
  };
  
  if (categoryTitles[category]) {
    document.querySelector('h2.display-5').textContent = categoryTitles[category] + ' Books';
  } else {
    document.querySelector('h2.display-5').textContent = 'All Books';
  }
  
  try {
    // If category is specified, load only that category
    if (category && bookData[category]) {
      renderBooks(bookData[category], category);
    } else {
      // Load all categories
      for (const cat in bookData) {
        if (bookData.hasOwnProperty(cat)) {
          renderBooks(bookData[cat], cat);
        }
      }
    }
  } catch (error) {
    console.error('Error loading books:', error);
    booksContainer.innerHTML = `
      <div class="col-12 text-center">
        <div class="alert alert-danger">
          Failed to load books. Please try again later.
        </div>
      </div>
    `;
  }
}

// Function to render books to the container
function renderBooks(books, category = '') {
  const booksContainer = document.getElementById('booksContainer');
  
  books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.className = 'col-6 col-md-4 col-lg-3 col-xl-2.4';
    bookElement.innerHTML = `
      <div class="book-card h-100 rounded-3 shadow-sm" data-category="${category}" data-title="${book.title}">
        <div class="book-cover-container">
          <img
            src="images/book-covers/${book.coverImage}"
            alt="${book.title} Cover"
            class="book-cover img-fluid"
            onerror="this.onerror=null; this.src='images/book-covers/placeholder.jpg'; this.alt='No Cover Available';"
          />
        </div>
        <div class="book-info p-3">
          <h5 class="book-title fw-bold mb-1">${book.title}</h5>
          <p class="book-author text-muted mb-3">${book.author}</p>
          <a href="${book.downloadLink}" class="btn btn-primary btn-sm w-100 download-btn">
            <i class="bi bi-download me-1"></i> Download
          </a>
        </div>
      </div>
    `;
    
    booksContainer.appendChild(bookElement);
  });
} 