GIVEN a user
WHEN they reach the home screen 
THEN they can find a button for registering a book they want to read

GIVEN a user
WHEN they reach route GET /app/books
THEN they see the books they added

GIVEN a user who already have books registered
WHEN they reach route PUT /app/books and click on a book's edit icon
THEN they can can update the books info

GIVEN a user who already have books registered
WHEN they reach route PUT /app/books/delte and click on a book's delete icon
THEN the book won't be available on GET /app/books anymore
