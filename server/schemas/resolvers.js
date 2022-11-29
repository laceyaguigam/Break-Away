// create resolvers for queries and mutations to db
const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!'
      }
    }
  }

// export 
module.exports = resolvers