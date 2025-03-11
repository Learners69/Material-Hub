# Material Hub

A modern website for educational resources and materials.

## Features

- Responsive design for all devices (mobile, tablet, desktop)
- Modern UI with Bootstrap 5
- Book collection showcase
- About Us section
- Footer with social links and newsletter subscription

## Book Cards

### How to Add Book Covers

1. Place your book cover images in the `images/book-covers/` directory
2. Use a consistent naming convention (e.g., `book1-cover.jpg`, `book2-cover.jpg`)
3. Recommended image dimensions: 400px × 600px (portrait orientation)
4. Supported formats: JPG, PNG, WebP

### How to Configure Book Cards

Edit the book cards in `books.html` by updating the following elements:

```html
<div class="book-card h-100 rounded-3 shadow-sm">
    <div class="book-cover-container">
        <!-- Update the src attribute with the path to your book cover image -->
        <img src="images/book-covers/your-book-cover.jpg" alt="Book Title" class="book-cover img-fluid" onerror="this.onerror=null; this.src='images/book-covers/placeholder.jpg'; this.alt='No Cover Available';">
    </div>
    <div class="book-info p-3">
        <!-- Update the book title -->
        <h5 class="book-title fw-bold mb-1">Your Book Title</h5>
        <!-- Update the author name -->
        <p class="book-author text-muted mb-3">Author Name</p>
        <!-- Add the download link to the href attribute -->
        <a href="path/to/your/book.pdf" class="btn btn-primary btn-sm w-100 download-btn">
            <i class="bi bi-download me-1"></i> Download
        </a>
    </div>
</div>
```

## Development

### Dependencies

- Bootstrap 5.3.2
- Bootstrap Icons 1.11.1

### File Structure

- `index.html` - Home page
- `books.html` - Books collection page
- `css/` - CSS stylesheets
  - `styles.css` - Main stylesheet
  - `books.css` - Books page specific styles
- `js/` - JavaScript files
  - `main.js` - Main JavaScript file
- `images/` - Image assets
  - `book-covers/` - Book cover images

## License

This project is licensed under the MIT License. 