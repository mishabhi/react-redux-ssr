import fileSystem from "fs";
const path = require("../../webpack/path");
const htmlFilePath = path.htmlBuildPath + "/index.html";
var html = "";

export function populate(dom = {}) {
  if(!html){
    html = fileSystem.readFileSync(htmlFilePath, 'utf8').toString()
  }
  let htmlContent = html.slice(0);
  htmlContent = htmlContent.replace("<div id=\"app\"/>", dom.content);
  htmlContent = htmlContent.replace("{}", JSON.stringify(dom.state ? dom.state : {}));
  return htmlContent;
}