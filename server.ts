const _app = require('./lib/app');
const _pool = require('./lib/utils/pool');

const PORT = process.env.PORT || 7890;

_app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye!');
  _pool.end();
});
