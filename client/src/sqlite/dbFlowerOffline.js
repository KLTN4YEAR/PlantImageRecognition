import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({
  name: 'plants.db',
  createFromLocation: '~db/plants.db',
  location: 'Library',
});

//Get all flower by name
export const viewAllFlower = getResult => {
  var temp = [];
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * from plants',
      [],
      (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        getResult(temp);
      },
      err => {
        console.log('transaction error: ', err.message);
      },
    );
  });
};

// Get flower by name
export const viewFlowerByName = (name, getResult) => {
  var temp = [];
  db.transaction(function(tx) {
    tx.executeSql(
      'SELECT * from plants where name like ?;',
      [name],
      (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        getResult(temp);
      },
      err => {
        console.log('transaction error: ', err.message);
      },
    );
  });
};

// Get flower by id
export const viewFlowerById = (id, getResult) => {
  var temp = [];
  db.transaction(function(tx) {
    tx.executeSql(
      'SELECT * from plants where _id = ?;',
      [id],
      (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        getResult(temp);
      },
      err => {
        console.log('transaction error: ', err.message);
      },
    );
  });
};

// Lấy ảnh theo id
export const viewImagesById = (id, getResultImg) => {
  var temp = [];
  db.transaction(function(tx) {
    tx.executeSql(
      'SELECT * from plants where name _id =?;',
      [id],
      (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        getResultImg(id);
      },
      err => {
        console.log('transaction error: ', err.message);
      },
    );
  });
};

// Get vienamese name's and avatar flower by english name
export const viewInfoByEngName = (eName, getResultInfo) => {
  var temp = [];
  db.transaction(function(tx) {
    tx.executeSql(
      'SELECT _id, nameVN, img1 from plants where name =?;',
      [eName],
      (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        getResultInfo(temp);
      },
      err => {
        console.log('transaction error: ', err.message);
      },
    );
  });
};

// Get id flower by vn name
export const getIdByVNName = (name, getResultInfo) => {
  var temp = [];
  db.transaction(function(tx) {
    tx.executeSql(
      'SELECT _id from plants where nameVN =?;',
      [name],
      (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        getResultInfo(temp);
      },
      err => {
        console.log('transaction error: ', err.message);
      },
    );
  });
};