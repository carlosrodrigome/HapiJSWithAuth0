module.exports = {
  method: 'GET',
  path: '/api/test',
  config: { auth: 'token' },
  handler: function(request, reply) {
    console.log('IN!');
    reply('Hello World!');
  }
}
