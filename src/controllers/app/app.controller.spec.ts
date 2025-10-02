import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService, getAppServiceStub } from '@app/services';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        { provide: AppService, useValue: getAppServiceStub() }
      ],
    }).compile();

    appController = app.get(AppController);
    appService = app.get(AppService)
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const message = 'Test'
      const getHelloSpy = jest.spyOn(appService, 'getHello').mockReturnValue(message);

      const result = appController.getHello()

      expect(result).toEqual({ message });

      expect(getHelloSpy).toHaveBeenCalledTimes(1)
      expect(getHelloSpy).toHaveBeenCalledWith()
    });
  });
});
