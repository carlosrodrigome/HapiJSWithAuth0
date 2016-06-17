var request = require("request");

var options = { method: 'GET',
  url: 'http://localhost:3000/api/test',
  headers: { authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJMOTRzbWdjRFgyc1BXRk9HZ1JaRjNHaTRQOURJNXN6cSIsInNjb3BlcyI6e30sImlhdCI6MTQ2NjA5NzI3NywianRpIjoiNmFlNDNiOTNhNjQyYWJkNjM3OTg3NGY4NTMxZGNhNzAifQ.immXwpFUrDxPAsQ6PZqrENLsIx2A-tkFduZIQ1tZ-9c' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
