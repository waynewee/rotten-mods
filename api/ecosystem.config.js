module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'api',
      script    : './dist/src/app.js',
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss.SSS Z",

      env: {
        PORT: 8080,
      }
    },
    // runs general cron job
    {
      name      : 'cron',
      script    : './modules/cron/index.js',
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss.SSS Z",

      env: {
        PORT:8081
      }
    }
  ],
};
