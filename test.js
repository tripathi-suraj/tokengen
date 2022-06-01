const express = require('express');
const app = express();
const md5 = require('md5');

app.get('/test', function (req, res) {
  res.send('Hello Express');
});

app.get('/', function (req, res) {
  var ver = 'staging';
  var gwstoken = '00bc9f31-f7be-4d11-8c32-75fbb437d1b1';
  var auth_salt =
    'CFr6KVuyueeoTYRsghUoGlklkQZZPMvK78dcPd3whPVBxrLUYTfgdjpTWoNdv';
  var endpoint = '';
  if (!ver) {
    return res.send('specify version');
  }
  if (!gwstoken) {
    return res.send('invalid gws token');
  }
  console.log(ver);
  //endpoint = '/gwstokenlogin';
  var ensite = md5(gwstoken + auth_salt);
  var buffer = new Buffer(gwstoken + ':' + ensite).toString('base64');
  var code = encodeURIComponent(buffer);
  var urlendpoint = endpoint + '/' + code;
  return res.send({
    status: 1,
    code: code,
    ResultDescription: urlendpoint,
  });
});

app.listen(3000);
