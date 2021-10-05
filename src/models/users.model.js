const connection = require("../config/db");

const userModel = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM tbl_users`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  insert: (body) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `
        INSERT INTO tbl_users (name, email, address)
        VALUES ('${body.name}','${body.email}','${body.address}')
      `,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM tbl_users WHERE id='${id}'`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  detail: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM tbl_users WHERE id='${id}'`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  edit: (id, body) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `
        UPDATE tbl_users SET name='${body.name}', email='${body.email}', address='${body.address}' WHERE id='${id}'
      `,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
};

module.exports = userModel;
