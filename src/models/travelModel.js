import pool from "../../db/conectionDb.js";

const getTravels = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    }
    catch (error) {
        console.log(error);
    }
};

const createTravel = async ({ titulo, img, descripcion, likes }) => {
    const SQLquery = {
        text: "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
        values: [titulo, img, descripcion, likes],
    };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    }
    catch (error) {
        console.log(error);
    }
};

export { getTravels, createTravel };