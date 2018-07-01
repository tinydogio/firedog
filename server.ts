import app from './src/app';
const port = 3000; // TODO: Configure app runner (PM2).

app.listen(port, () => console.log(`firedog is running on port ${ port }: http://localhost:3000`));
