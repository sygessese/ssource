import { app, PORT } from './application/server.js';

app.listen(PORT, () => {
    console.log(`StackSource server listening at http://localhost:${PORT}`)
});
  