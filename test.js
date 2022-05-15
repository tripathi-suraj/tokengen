const express = require('express');
const app = express();
const md5 = require('md5');

app.get('/', function (req, res) {
  res.send('Hello Express');
});

app.get('/token', function (req, res) {
  var ver = 'staging';
  var gwstoken = '0066e0be-2a16-4465-8ca9-a6c916cd6a1d';
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
