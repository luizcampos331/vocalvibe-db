"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE pipeline_conversations (
      id TEXT PRIMARY KEY,
      status INT4 NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE pipeline_conversations;", callback);
};
