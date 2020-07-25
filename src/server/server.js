import express from "express";
import path from "path";
import * as Html from "./template";
import * as Renderer from "./renderer";
import axios from "axios";
import * as config from "../config/server";

const app = express()

//path of files to be served
app.use('/assets', express.static(path.resolve(__dirname, '../../build/assets')));
app.use('/media', express.static(path.resolve(__dirname, '../../build/media')));

// hide powered by express
app.disable('x-powered-by');

// start the server
const port = config.SSR_APP_PORT || 3005;
app.listen(port, () => {
  console.log("Server started and listening at " + port)
});

const handleServerRendering = async(request, response) => {
  const dom  = await Renderer.htmlString(request);
  const html = Html.populate(dom);
  response.setHeader('Cache-Control', 'assets, No-Cache, No-Store')
  response.send(html);
}

const handleApiRequest = (request, response) => {
  console.log("API Call: ",  config.API_DOMAIN + request.url.replace("/api", ""));
  axios({
    headers: request.headers,
    method: request.method,
    url: config.API_DOMAIN + request.url.replace("/api", ""),
    data: request.body
  })
  .then(apiResponse => {
    response.send(apiResponse.data);
  })
  .catch(error => {
    response.status(error.response.status)
    response.send(error.response.data)
  })
}


app.use('/api', handleApiRequest);
app.get('/*', handleServerRendering);


