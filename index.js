const fastify = require('fastify');
const os = require('node-os-utils');
const ejs = require('ejs');
const humanizeDuration = require('humanize-duration');

const service = fastify({
  logger: true,
});

service.register(require('point-of-view'), {
  engine: {
    ejs,
  },
});

service.get('/', async (req, reply) => reply.view('./templates/index.ejs', {
  os: {
    platform: await os.os.oos(), // ПОСОСООСИ
    uptime: humanizeDuration(await os.os.uptime(), { round: true }),
  },
  cpu: await await os.cpu.usage(),
  ram: await os.mem.info(),
  rom: await os.drive.info(),
}));

const start = async () => {
  try {
    await service.listen(process.env.PORT);
  } catch (err) {
    service.log.error(err);
    process.exit(1);
  }
};
start();
