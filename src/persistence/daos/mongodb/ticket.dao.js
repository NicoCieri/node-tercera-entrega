import MongoDao from "./mongo.dao.js";
import { TicketModel } from "./models/ticket.model.js";

export default class TicketDao extends MongoDao {
  constructor() {
    super(TicketModel);
  }
}
