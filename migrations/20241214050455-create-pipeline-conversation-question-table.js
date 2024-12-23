"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE pipeline_conversation_questions (
      id TEXT PRIMARY KEY,
      pipeline_conversation_id TEXT NOT NULL,
      question_id TEXT NOT NULL,
      answered BOOLEAN NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE pipeline_conversation_questions;", callback);
};
