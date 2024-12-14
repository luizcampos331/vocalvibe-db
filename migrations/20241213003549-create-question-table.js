"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE questions (
      id TEXT PRIMARY KEY,
      created_by TEXT NOT NULL,
      context TEXT NOT NULL,
      content TEXT NOT NULL,
      filename TEXT NOT NULL,
      duration INT NOT NULL,
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
