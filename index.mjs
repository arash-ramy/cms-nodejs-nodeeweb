import './loadEnv.mjs';
import './config.mjs';
import appBuilder from './appBuilder.mjs';

export default function Server(props = {}, view = {}) {
  props.entity = props.entity ?? [];
  console.log('==> running server()');
  props.defaultRoutes = [];
  if (!props.base) props.base = './node_modules/@nodeeweb/server/';
  // console.log('base is....',props.base);
  let app = appBuilder(props);
  // console.log('app is ready...');
  return app;
}

// Server({
//     port:3001,
//     entity:[]
// });
