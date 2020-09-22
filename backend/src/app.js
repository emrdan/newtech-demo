import express from 'express'

const app = express();

process.on('uncaughtException', (error)  => {
  console.log('Something happened: ',  error);
  process.exit(1); 
});

process.on('unhandledRejection', (error, promise) => {
  console.log('The rejected promise: ', promise);
  console.log('The rejected error was: ', error );
});

(async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
})();