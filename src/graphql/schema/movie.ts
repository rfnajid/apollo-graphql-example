export const movieSchema = `#graphql

 type Movie {
   id: Int!
   title: String!
   description: String
   posterUrl: String
 }

 extend type Query {
    getAllMovies: [Movie]
    getOneMovie(id: Int!): Movie
 }

 extend type Mutation {
    createMovie(title: String!, description: String, posterUrl: String): Movie
    
    updateMovie(id: Int, title: String, description: String, posterUrl: String): Movie
    
    deleteMovie(id: Int!): String
 }
 
 `;