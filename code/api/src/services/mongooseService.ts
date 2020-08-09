/**
 * Mongoose queries: https://mongoosejs.com/docs/queries.html
 */

import { Model, Query } from 'mongoose'

class MongooseService {
  /**
   * Moongoose model
   */
  model: Model<any>
  /**
   * Create an instance of the MongooseService class
   * @param {Model<any>} model Mongoose Model to use for the instance
   */
  constructor(model: Model<any>) {
    this.model = model
  }

  /**
   * Create a new document on the Model
   * @param body {object} Body object to create the new document with
   * @returns {Promise} body Returns the results of the query
   */
  create(body: any) {
    return this.model.create(body)
  }

  findOne(query: any, projection = { __v: 0 }, options = { lean: true }) {
    return this.model.findOne(query, projection, options).select({ __v: 0 }).exec()
  }
}

export default MongooseService
