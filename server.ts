import * as jsonServer from 'json-server';
import { mockData, routes } from './module/index';
import { TransfersV2ServiceRequest } from './module/transfers-v2/handlers/transfersv2.service';

export namespace Server {
  const _app: any = jsonServer.create();
  const _port: string = '3000';
  const _customRoutes: any = jsonServer.rewriter(routes);
  const _router: any = jsonServer.router(mockData);
  const _bodyParser: any = jsonServer.bodyParser;
  const _middleware: any = jsonServer.defaults();
  export const initJsonServer = () => {
    //set middlewares por defecto
    _app.use(_middleware);
    //set bodyParser response
    _app.use(_bodyParser);
    //set routes
    _app.use(_customRoutes);
    console.log('Entrando');
    //on request
    onRequest();
    //on handle error
    render();
    //set mockData
    _app.use(_router);
    //init server
    listen();
  };

  export const router = () => {
    return _router;
  };

  export const app = () => {
    return _app;
  };

  const onRequest = () => {
    TransfersV2ServiceRequest.onHttpRequest();
  };

  const render = () => {
    _router.render = (req, res) => {
      console.log('Entrando render');
      const scenario = req.headers['scenario'];
      const data = res.locals.data;
      if (scenario) {
        TransfersV2ServiceRequest.onScenarios(scenario, data, res);
      } else {
        return res.jsonp(data);
      }
    };
  };

  const listen = () => {
    _app.listen(_port, () => {
      console.log(`Servidor corriendo en puerto: ${_port}`);
    });
  };
}
