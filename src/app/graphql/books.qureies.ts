import { gql } from 'apollo-angular'

const getAllBooks = gql`
query{
    getAllBooks{
      name
      price
      description
      category
      image 
      _id
    }
  }

`
const getOneBook = gql`
mutation{
  getOneBook(_id:"641fee12862c7ccc85cd30d5"){
    _id
    name
    image
    price
    description
    category
    createdAt
  }
}
`
export { getAllBooks, getOneBook };