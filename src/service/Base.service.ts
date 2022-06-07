import mongoose from 'mongoose';
import { BaseRepo } from '../repository/Base.repo';

export abstract class BaseService<schema> {
  abstract readonly _repoObj: BaseRepo<{}>;

  async findAll(filter: Object = {}) {
    try {
      const docs = await this._repoObj.findAll(filter);
      return docs;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async findOne(_id: mongoose.Types.ObjectId | number) {
    try {
      const doc = await this._repoObj.findById(_id);
      return doc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  // TODO: createOne()
  async createOne(data: schema) {
    try {
      const doc = await this._repoObj.create(data);
      return doc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async updateOne(_id: mongoose.Types.ObjectId | number, data: schema) {
    try {
      await this._repoObj.updateOne(_id, data);

      const newDoc = await this._repoObj.findById(_id);
      return newDoc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async deleteOne(_id: mongoose.Types.ObjectId | number) {
    try {
      const doc = await this._repoObj.deleteOne(_id);
      return doc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }
}
