import Koa from 'koa';

const server = new Koa();

server.use((ctx) => {
  ctx.body = 'Hello Koa';
});

export default server;

