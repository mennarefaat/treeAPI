import { Data } from '../models/Tree.model';
import { DataService } from '../service/data.service';
import { BaseController } from './Base.controller';

export class DataController extends BaseController<Data> {
  _serviceObj: DataService = new DataService();
}
