import { Test, TestingModule } from '@nestjs/testing';
import { AppService, getAppServiceStub } from '@app/services';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get(AppService)
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const result = appService.getHello()

      expect(result).toBe('Hello World!');
    });
  });
});
