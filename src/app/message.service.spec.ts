import { MessageService } from "./message.service";

describe('Message Services', () => {
    let Service: MessageService;
    beforeAll(() => {
        Service = new MessageService();
    })

    it('Should Add', () => {
        Service.add('First Msg');
        expect(Service.messages.length).toBe(1)
    })

    it('Should Add', () => {
        Service.add('First Msg');
        Service.clear();
        expect(Service.messages.length).toBe(0)
    })
})
