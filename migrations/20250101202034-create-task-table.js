"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    CREATE TABLE tasks (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      flow_id TEXT NOT NULL,
      agent_id TEXT NOT NULL,
      description TEXT NOT NULL,
      expected_output TEXT NOT NULL,
      order_task INT4 NOT NULL,
      async_execution BOOL NOT NULL DEFAULT FALSE,
      tasks_dependency TEXT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );
  `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE tasks;", callback);
};
