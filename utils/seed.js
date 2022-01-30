const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing user
  await Thought.deleteMany({});

  // Drop existing thoughts
  await User.deleteMany({});

  // Create empty array to hold the thoughts
  const thoughts = [];


  // Loop 20 times -- add thoughts to the thoughts array
  // Add thoughts to the collection and await the results
  await User.collection.insertMany(thoughts);
  await Thought.collection.insertMany(thoughts);
  // Add users to the collection and await the results
  //Just ONE
  // await Thought.collection.insertOne({
  //   thoughtName: 'UCLA',
  //   inPerson: false,
  //   thoughts: [...thoughts],
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
