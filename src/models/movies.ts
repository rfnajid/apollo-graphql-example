import { INTEGER, STRING } from "sequelize";
import { Model } from "sequelize";
import { sequelize } from "src/database";

export interface MovieModel extends Model {
    id: number;
    title: string;
    description: string;
    posterUrl: string;
}

export default sequelize.define<MovieModel>('movie',{
    id:{
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: STRING,
      allowNull: false
    },
    description: STRING,
    posterUrl: STRING
},{});