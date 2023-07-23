export default class MockHttpService {
  static mockHttpService() {
    return {
      get: jest.fn(),
      post: jest.fn(),
    };
  }
}
