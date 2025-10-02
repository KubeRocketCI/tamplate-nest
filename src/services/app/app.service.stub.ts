import { AppService } from '@app/services';

export function getAppServiceStub(): AppService {
  return {
    getHello: () => ''
  };
}
