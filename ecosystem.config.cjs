module.exports = {
  apps: [{
    name: 'Health Service',
    script: 'index.js',
    node_args: ['NODE_ENV=production', 'PORT=3000'],
    autorestart: true,
  }],
};
