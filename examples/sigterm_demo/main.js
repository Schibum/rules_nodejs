console.log('started');
process.on('SIGTERM', () => {
  console.log('SIGTERM received, terminating in 5s...');
  setTimeout(() => {
    console.log('terminating');
    process.exit(0);
  }, 5000);
});
// just do nothing but don't terminate
setTimeout(() => null, 1000000);
