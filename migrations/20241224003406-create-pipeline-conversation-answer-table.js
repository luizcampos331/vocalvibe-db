"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE pipeline_conversation_answers (
      id TEXT PRIMARY KEY,
      pipeline_conversation_question_id TEXT NOT NULL,
      text TEXT NOT NULL,
      filename TEXT NOT NULL,
      duration INT4 NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE pipeline_conversation_answers;", callback);
};
