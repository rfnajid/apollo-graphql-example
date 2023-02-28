import { Movie } from "src/models";

const MovieResolver = {
    Query: {
        async getAllMovies(root, input, context) {
            return Movie.findAll();
        },
        async getOneMovie(root, input, context){
           return Movie.findByPk(input.id);
        }
    },
    Mutation : {
        async createMovie(root, input, context) {
            const { title, description, posterUrl } = input;
            return Movie.create({ title, description, posterUrl });
        },
        async updateMovie(root, input, context) {
            const id = input.id;
            const movie = input;
            await Movie.update(movie, { 
                where: { id: id }
            });

            return {id: id, ...movie};

        },
        async deleteMovie(root, {id}, context){
            const deleteRes = await Movie.destroy({
                where: {id: id}
            });

            if(deleteRes){
                return `Movie id:${id} has been deleted`;
            }else{
                return `Can't delete Movie id:${id}`;
            }
        },
    }
}

export default MovieResolver;