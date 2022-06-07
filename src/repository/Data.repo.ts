import { Data, DataModel } from '../models/Tree.model';
import { BaseRepo } from './Base.repo';

export class DataRepo extends BaseRepo<Data> {
  _collectionName: string = 'data';
  _model: Object = DataModel;
}
