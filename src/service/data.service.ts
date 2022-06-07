import { Data } from '../models/Tree.model';
import { DataRepo } from '../repository/Data.repo';
import { BaseService } from './Base.service';

export class DataService extends BaseService<Data> {
  _repoObj: DataRepo = new DataRepo();
}
