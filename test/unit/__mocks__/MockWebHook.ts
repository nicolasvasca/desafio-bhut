export default class MockWebHookGateway {
  static mockWebHookGateway() {
    return {
      sendNotification: jest.fn(),
    };
  }
}
