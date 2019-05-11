exports.dbConfig = {
    server: "brgysystem.database.windows.net", // Use your SQL server name
    database: "BrgySystem", // Database to connect to
    user: "gadon21", // Use your username
    password: "!mg@b0b0mg@b0b0", // Use your password
    port: 1433,
    // Since we're on Windows Azure, we need to set the following options
    options: {
          encrypt: true
      }
   };

   exports.webPort = process.env.PORT || 1337;

   exports.httpMsgsFormat = "HTML"