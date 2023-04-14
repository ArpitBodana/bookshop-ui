import { gql } from "apollo-angular";

const addOrder = gql`mutation addMyOrder($order:OrderInput!){
    addOrder(order:$order)
  }
`

const getOrders = gql`query {
    getMyOrder{
      _id
      orderItems{
        _id
        name
        price
        quantity
      }
      totalPrice
      user
      createdAt
    }
  }
  `
export { addOrder, getOrders };