# Book Project
#### By Sarah Carter, Bijan Saniee, and Matthew Laude

## DEPENDENCIES
- express
- mongoose
- cors
- morgan
- dotenv

## MODELS
Book:
- title: string
- author: string
- genre: string
- coverimg: string
- description: string

## BACKEND ROUTE TABLE
| url | method | action |
|-----|--------|--------|
| /books | get | getting all the books (index)||
| /books | post | posting a new book (create) |
| /books/:id | put | updating a book (update) |
| /books/:id | delete | delete the book (destroy) |