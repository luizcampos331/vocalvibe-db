"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    ALTER TABLE tasks
    ALTER COLUMN tasks_dependency type _TEXT USING NULL;
    `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql(
    `
    ALTER TABLE tasks
    ALTER COLUMN tasks_dependency type TEXT;
    `,
    callback
  );
};
