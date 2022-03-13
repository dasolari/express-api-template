import app from './src/app';

const PORT = process.env.PORT || 3000;

// @ts-ignore
app.listen(PORT, (error) => {
  if (error) {
    return console.error('Failed to start server', error);
  }
  console.log(`Server started successfully, listening on port ${PORT}`);
  return app;
});
