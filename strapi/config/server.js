module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2']),
  },
  cors: {
    enabled: true,
    origin: env('CORS_ORIGIN', 'http://localhost:3000'),
  },
});

