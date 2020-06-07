import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({name: 'plants.db', createFromLocation: '~plants.db', location:'Library'});

// //Check database xem tồn tại chưa? Chưa thì tạo! (1-n)
// export const addDataToDb = () => {
//     db.transaction(function(txn) {
//         //Tạo tbl flowers
//         txn.executeSql(
//             "SELECT name FROM sqlite_master WHERE type='table' AND name='plants'", [],
//             function(tx, res) {
//                 // console.log('item:', res.rows.length);
//                 if (res.rows.length == 0) {
//                     txn.executeSql('DROP TABLE IF EXISTS plants', []);
//                     txn.executeSql(
//                         'CREATE TABLE IF NOT EXISTS plants(f_id INTEGER PRIMARY KEY AUTOINCREMENT, name NVARCHAR(30), location NVARCHAR(30),fAvatar VARCHAR(225), characteristics NVARCHAR(255), created DATETIME);', [],
//                         (tx, results) => {
//                             console.log('Tạo thành công bảng plant');
//                         }, (err) => {
//                             console.log('transaction error: ', err.message);
//                         },
//                     );

//                 }
//             },

//         );
        
//     });
// };




//Lấy tất cả hoa!
export const viewAllFlower = (getResult) => {
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


// Lấy thông tin theo tên 
export const viewFlowerByName = (name,getResult) => {
    var temp = [];
    db.transaction(function(tx) {
        tx.executeSql(
            'SELECT * from plants where name like ?;', [name],
            (tx, results) => {
                for (let i = 0; i < results.rows.length; ++i) {
                  temp.push(results.rows.item(i));
                }
                getResult(temp);
            }, (err) => {
                console.log('transaction error: ', err.message);
            },
        );
    });
};


// Lấy ảnh theo id 
export const viewImagesById = (id,getResultImg) => {
    var temp = [];
    db.transaction(function(tx) {
        tx.executeSql(
            'SELECT * from images where name _id =?;', [id],
            (tx, results) => {
                for (let i = 0; i < results.rows.length; ++i) {
                  temp.push(results.rows.item(i));
                }
                getResultImg(id);
            }, (err) => {
                console.log('transaction error: ', err.message);
            },
        );
    });
};
//Xoá đata
// export const removeData = () => {
//     var temp = [];
//     db.transaction(tx => {
//         tx.executeSql('DELETE FROM table_images;', [], (tx, results) => {
//             console.log('Xoá thành công');
//         }, (err) => {
//             console.log('transaction error: ', err.message);
//         }, );
//         tx.executeSql('DELETE FROM table_flowers;', [], (tx, results) => {
//             console.log('Xoá thành công');
//         }, (err) => {
//             console.log('transaction error: ', err.message);
//         }, );
//     });

// };