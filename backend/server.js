const express = require('express');
const cors = require('cors');
const internRoutes = require('./routes/internRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/api', internRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
