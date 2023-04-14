import { gql } from "apollo-angular";

const loginQuery = gql`
mutation login ($user:logInInput!){
    logIn(user:$user){
      token
    }
  }
`
const signUpQuery = gql`
mutation signUpMutation($user:signUpInput!){
  user:signUp(user:$user){
   token
  }
}

`

export { loginQuery, signUpQuery };