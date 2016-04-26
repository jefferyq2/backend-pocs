module.exports = function(app) {
  app.dataSources.db.automigrate('user', function(err) {
    if (err) throw err;

    app.models.user.create([
      {email: 'user1@gmail.com', password: 'user1'},
      {email: 'user2@gmail.com', password: 'user2'},
      {email: 'user3@gmail.com', password: 'user3'},
    ], function(err, user) {
      if (err) throw err;

      console.log('Models created: \n', user);
    });
  });
};
