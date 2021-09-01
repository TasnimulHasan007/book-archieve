# Assignment-6 TODO List:
    - Create an input field and a button so that when user searches anything, it fetches data from  respected api
    - Things to show as the search results
        - Every item that matches the search string
        - The name of the book
        - The author of the book (if includes)
        - The publisher of the book (if includes)
        - The first publish date of the book (if includes)
        - How many results are found
    
    ## Bonus marks
    - Every function has to be an arrow function
    - Arrays has to looped through using forEach
    - Comparisions should have === instead of ==
    - Every result should include an image
    - Codes should be organized with comments

____________________________________________________________________________________________________

# book-archive

## [Private Repository Link](https://classroom.github.com/a/mOiiFMDY)
Please Click this link to create your assignment private repo: [https://classroom.github.com/a/mOiiFMDY](https://classroom.github.com/a/mOiiFMDY)

## API Links

### Book Search
URL Format: http://openlibrary.org/search.json?q=${searchText}

Example: http://openlibrary.org/search.json?q=javascript


### Book cover image url: Large
URL Format: https://covers.openlibrary.org/b/id/{cover_i}-L.jpg

Example: https://covers.openlibrary.org/b/id/554106-L.jpg

### Book cover image url: Medium
URL Format: https://covers.openlibrary.org/b/id/{cover_i}-M.jpg

Example: https://covers.openlibrary.org/b/id/554106-M.jpg


### Author Detail: 
https://openlibrary.org/authors/{authhorKey}.json

Example: https://openlibrary.org/authors/OL62134A.json