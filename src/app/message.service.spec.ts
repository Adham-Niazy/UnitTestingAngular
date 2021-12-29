import { MessageService } from "./message.service"

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  })

  it('should have no messages to start', () => {
    expect(service.messages.length).toBe(0);
  })

  it('should add a message when add is called', () => {
    service.add('Message One');

    expect(service.messages.length).toBe(1);
  })

  it('should remove all messages when clear is called', () => {
    service.add('Message One');
    service.add('Message Two');
    service.add('Message Three');

    service.clear();
    
    expect(service.messages.length).toBe(0);
  })
})
