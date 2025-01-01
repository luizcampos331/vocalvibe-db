"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE output_tasks (
      id TEXT PRIMARY KEY,
      crew_id TEXT NOT NULL,
      task_id TEXT NOT NULL,
      output TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE output_tasks;", callback);
};
