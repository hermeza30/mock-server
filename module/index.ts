import { mockDataTransfersV2 } from './transfers-v2/mocks/index';
import { routesTransfersV2 } from './transfers-v2/routes/transferV2.routes';

export const mockData = {
  ...mockDataTransfersV2,
};
export const routes = {
  '/api/*': '/$1',
  '/auth/*': '/$1',
  ...routesTransfersV2,
};
