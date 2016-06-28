import config from 'config';
import OoyalaApi from 'ooyala-api';

const api = new OoyalaApi(config.api.key, config.api.secret);

async function getDuration() {
  const items = await api.get('/v2/assets', {where: `asset_type='video'`}, {pagination: true});
  return items.map(item => parseInt(item.duration)).reduce((a, b) => a + b, 0);
}

getDuration().then(total => {
  console.log(`Total duration = ${Math.ceil(total / 1000)} seconds`);
});


