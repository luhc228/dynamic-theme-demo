// eslint-disable-next-line
const less = require('less');
// eslint-disable-next-line
const fs = require('node:fs');
// eslint-disable-next-line
const path = require('node:path');
// eslint-disable-next-line
const { getThemeVariables } = require('./node_modules/antd/dist/theme');

const darkThemeVariables = getThemeVariables({ dark:true });
const darkThemeVariablesPath = path.join(__dirname, 'antd.dark.variable.css');
const variablesPath = path.resolve('node_modules/antd/dist/antd.variable.less');

(async function () {
  const result = await less.render(
    fs.readFileSync(variablesPath, 'utf8'),
    {
      javascriptEnabled: true,
      modifyVars: {
        ...darkThemeVariables,
      },
      paths: [path.dirname(variablesPath)],
      filename: variablesPath,
    }
  )
  fs.writeFileSync(darkThemeVariablesPath, result.css,  'utf8')
})()
