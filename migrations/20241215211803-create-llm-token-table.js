"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE llm_tokens (
      id TEXT PRIMARY KEY,
      entity_id TEXT NOT NULL,
      input_tokens INT4 NOT NULL,
      output_tokens INT4 NOT NULL,
      entity INT4 NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE llm_tokens;", callback);
};
