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
- url: string
- description: string

## BACKEND ROUTE TABLE
| url | method | action |
|-----|--------|--------|
| /books | get | getting all the bookmarks (index)||
| /books | post | posting a new bookmark (create) |
| /books/:id | put | updating a bookmark (update) |
| /books/:id | delete | delete the bookmark (destroy) |