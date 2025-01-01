"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE tools (
      id TEXT PRIMARY KEY,
      task_id TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      payload JSONB NULL,
      type TEXT NOT NULL,
      key TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE tools;", callback);
};
