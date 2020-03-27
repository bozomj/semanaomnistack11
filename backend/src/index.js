const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Metodo HTTP
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma Informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação do back-end
  */

  /**
   * Tipos de parametros
   * 
   * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parametros utilizado para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */


   /**
    * SQL :MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSql: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     * 
     */


app.listen(3333);

