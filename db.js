import mysql from "mysql";

export const db = mysql.createConnection({
    host:"containers-us-west-24.railway.app",
    user:"root",
    password: "zvEKfEOv5jnzAsBbNWdy",
    database: "railway",
    port:"7935",
})

