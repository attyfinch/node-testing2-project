exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('sfbooks')
      .truncate()
      .then(function() {
        return knex('sfbooks').insert([
          { name: 'The Moon is a Harsh Mistress' },
          { name: 'Do Androids Dream of Electric Sheep' },
          { name: 'Foundation' },
          { name: 'Dune' },
        ]);
      });
  };