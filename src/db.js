const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://petrikj:<db_password>@testcluster.qodbeyl.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})
