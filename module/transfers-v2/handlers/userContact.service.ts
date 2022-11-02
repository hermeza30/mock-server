import { Server } from '../../../server';
import { formatBaseResponse } from '../helpers/helper';

export namespace UserContactServiceRequest {
  export const onHttpRequest = () => {
    //HANDLE POST FRECUENTES
    Server.app().post('/frecuentes', (_req, res) => {
      res.status(200).json({ message: 'frecuentes uno' });
    });
  };

  export const onScenarios = (scenario, data, response) => {
    switch (scenario) {
      case 'user-contact-error':
        console.log('En error');
        response.status(500).jsonp(formatBaseResponse({ tipo: 0, status: 'ERROR' }));
        break;
      case 'user-contact-no-data':
        response.status(200).jsonp(null);
        break;
      case 'user-contact-canceled':
        const canceled = data.filter((d) => d.scenario.includes(scenario));
        response.jsonp(canceled);
        break;
      case 'user-contact-active':
        const active = data.filter((d) => d.scenario.includes(scenario));
        response.jsonp(active);
        break;
    }
  };
}
