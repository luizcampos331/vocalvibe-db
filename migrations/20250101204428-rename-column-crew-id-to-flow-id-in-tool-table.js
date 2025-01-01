"use strict";

exports.up = function (db, callback) {
  db.runSql(
    `
    ALTER TABLE agents
    RENAME COLUMN crew_id TO flow_id;
    `,
    callback
  );
};

exports.down = function (db, callback) {
  db.runSql(
    `
    ALTER TABLE agents
    RENAME COLUMN flow_id TO crew_id;
    `,
    callback
  );
};
