"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE questions (
      id TEXT PRIMARY KEY,
      context TEXT NOT NULL,
      native_language TEXT NOT NULL,
      goal_language TEXT NOT NULL,
      filename TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE questions;", callback);
};
