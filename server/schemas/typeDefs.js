// import gql template function
const { gql } = require('apollo-server-express')

// create typeDefs for queries and mutations to db
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`
const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!'
      }
    }
  }
  

// export 
module.exports = typeDefs
module.exports = resolvers