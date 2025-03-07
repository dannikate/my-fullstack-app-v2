// server.js 

import app from './app.js';

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL || "http://localhost:"
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`\nServer is running on ${BACKEND_BASE_URL}:${PORT}`);
});