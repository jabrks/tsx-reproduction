const run = () => {
  console.log('Running...');
  setTimeout(run, 1000);
};

process.on('SIGINT', (signal) => {
  console.log(signal);
});

run();
