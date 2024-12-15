"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    ALTER TABLE pipeline_conversation_questions
    ADD COLUMN answered BOOLEAN DEFAULT false;
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql(
    "ALTER TABLE pipeline_conversation_questions DROP COLUMN answered;",
    callback
  );
};
