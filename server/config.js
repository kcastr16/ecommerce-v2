import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "vehiclesdb",
  });
  
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err.stack);
      return;
    }
    console.log("Connected to the MySQL database!");
  });
  
  export default connection;