import { Log } from '../../../src/domain/models/log.model';

export default class MockLogs {
  static mockLog(): Log {
    const log = new Log();
    log.car_id = '64bc82dc94a4c4001c3e1a66';
    log.createdAt = new Date();
    return log;
  }
}
