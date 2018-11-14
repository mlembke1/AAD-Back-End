exports.up = (knex, Promise) => {
    return knex.schema.createTable('permissions', (table) => {
      // TABLE COLUMN DEFINITIONS HERE
      table.increments().primary()
      table.string('role', 255).notNull().unique()
      table.string('read', 255).notNull()  
      table.string('write', 255).notNull()
      table.string('publish', 255).notNull()
      table.timestamps(true, true)
    })
  }
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('permissions')
  }