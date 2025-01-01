"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE agents (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      crew_id TEXT NOT NULL,
      role TEXT NOT NULL,
      goal TEXT NOT NULL,
      backstory TEXT NOT NULL,
      llm TEXT NULL,
      max_iter INT4 NULL,
      order_agent INT4 NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE agents;", callback);
};
