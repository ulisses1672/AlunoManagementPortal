// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/AlunoManagementPortal_db/UserModel";
import AlunoModel from "../models/AlunoManagementPortal_db/AlunoModel";
import AvaliacaoModel from "../models/AlunoManagementPortal_db/AvaliacaoModel";
import CursoModel from "../models/AlunoManagementPortal_db/CursoModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.AlunoManagementPortal_db_dbUrl);

    // Start Init Models

		UserModel.init();
		AlunoModel.init();
		AvaliacaoModel.init();
		CursoModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_AlunoManagementPortal_db = await mongoose.connect(
        "mongodb://" + properties.AlunoManagementPortal_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_AlunoManagementPortal_db;
  }
}

export default new Database();
