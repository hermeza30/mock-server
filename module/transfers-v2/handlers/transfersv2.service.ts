import { Server } from '../../../server';
import { formatBaseResponse } from '../helpers/helper';

export namespace TransfersV2ServiceRequest {
  export const onHttpRequest = () => {
    //HANDLE POST TRANSFERENCIAS
    Server.app().post('/transferencias', (_req, res) => {
      res.status(200).json({ message: 'transferencia uno' });
    });
  };
  export const onScenarios = (scenario, data, response) => {
    switch (scenario) {
      case 'transfersv2-error':
        response.status(500).jsonp(formatBaseResponse({ tipo: 0, status: 'ERROR' }));
        break;
      case 'transfersv2-no-data':
        response.status(200).jsonp(null);
        break;
      case 'transfersv2-canceled':
        const canceled = data.filter((d) => d.scenario.includes(scenario));
        response.jsonp(canceled);
        break;
      case 'transfersv2-active':
        const active = data.filter((d) => d.scenario.includes(scenario));
        response.jsonp(active);
        break;
    }
  };
}
