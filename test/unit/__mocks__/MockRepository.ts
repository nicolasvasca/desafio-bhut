export default class MockRepository {
  static mockRepository() {
    return {
      constructor: jest.fn(),
      find: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      create: jest.fn(),
      remove: jest.fn(),
    };
  }
}
