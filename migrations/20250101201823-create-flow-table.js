"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE flows (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      type INT4 NOT NULL,
      max_iter INT4 NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE flows;", callback);
};
