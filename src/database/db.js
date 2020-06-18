//importar a dependencia do sqlite
//const sqlite3 = require("sqlite3").verbose();

//criar o objeto que irá fazer operações no BD
//const db = new sqlite3.Database("./src/database/database.db");

// utilizar o objeto de BD, para nossas operações
//db.serialize(() => {
    // Com comandos SQL, eu vou:

    //1 - Criar uma tabela
 /*   db.run(`
        CREATE TABLE IF NOT EXISTS companies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            empresa TEXT,
            cnpj TEXT,
            responsible TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2 - Criar dados
    var stmt = db.prepare(`
        INSERT INTO companies (
            image,
            empresa,
            cnpj,
            responsible,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (https://images.unsplash.com/photo-1536939459926-301728717817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80,
            "test",
            "039311011",
            "Alguem",
            "Trust Marian",
            "342 - AFFS",
            "Paraná",
            "Francisco Beltrão",
            "Industria Mecanica")
    `)
    stmt.finalize();

    //3 - Mostrar dados
    db.each("SELECT * FROM companies", (err, row) => {
        console.log(row.id + ": " + row.empresa);
    })
})

db.close();

//module.exports  = db*/