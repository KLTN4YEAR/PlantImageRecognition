import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'FlowerDatabase.db' });

//Check database xem tồn tại chưa? Chưa thì tạo! (1-n)
export const addDataToDb = () => {
    db.transaction(function(txn) {
        //Tạo tbl flowers
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_flowers'", [],
            function(tx, res) {
                // console.log('item:', res.rows.length);
                if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS table_flowers', []);
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS table_flowers(f_id INTEGER PRIMARY KEY AUTOINCREMENT, name NVARCHAR(30), location NVARCHAR(30),fAvatar VARCHAR(225), characteristics NVARCHAR(255), created DATETIME);', [],
                        (tx, results) => {
                            console.log('Tạo thành công bảng flower');
                        }, (err) => {
                            console.log('transaction error: ', err.message);
                        },
                    );

                }
            },

        );
        //Tạo tbl images
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_images'", [],
            function(tx, res) {
                // console.log('item:', res.rows.length);
                if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS table_images', []);
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS table_images(image_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, imageUrl VARCHAR(225),  f_id INTEGER, FOREIGN KEY (f_id) REFERENCES table_flowers(f_id));', [],
                        (tx, results) => {
                            console.log('Tạo thành công bảng images');
                        }, (err) => {
                            console.log('transaction error: ', err.message);
                        },
                    );

                }

            },

        );
    });
};

//Kiểm tra xem số lượng hoa theo tên trong database. Dùng để check trùng!
export const checkFlower = (name) => {
    let n;
    db.transaction(function(tx) {
        tx.executeSql(
            'SELECT count(f_id) FROM table_flowers WHERE name =?', [name],
            (tx, results) => {
                n = JSON.stringify(results.rows.item(0))
            }, (err) => {
                console.log('transaction error: ', err.message);
            },
        );

    });
    return n;
};

// Thêm hoa! Trước khi thêm hoa kiểm xem hoa có tồn tại chưa? nếu chưa thì insert
// Cái checkFlower vẫn chưa hoạt động vì t k bắt return được!
export const insertFlower = (flower) => {
    let f_id;
    const n = checkFlower(flower.name);
    if (n == 0 || n == undefined || n == null) {
        db.transaction(function(tx) {
            tx.executeSql(
                'INSERT INTO table_flowers (name, location,fAvatar,characteristics,created) VALUES (?,?,?,?,?);', [flower.name, flower.location, flower.fAvatar, flower.characteristics, flower.created],
                (tx, results) => {
                    // console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        console.log('Successful');
                    } else {
                        console.log('Insert Failed');
                    }
                }, (err) => {
                    console.log('transaction error: ', err.message);
                },
            );

        });
    }

};
// Lấy id của hoa để tạo ảnh
export const getIDByName = async(name) => {
    let f_id;
    return await db.transaction(async function(tx) {
        await tx.executeSql(
            `SELECT f_id FROM table_flowers WHERE name = ?;`, [name],
            async(tx, results) => {
                console.log('re', results.rows.item(0));
                return await results.rows.item(0);

            }, (err) => {
                console.log('transaction error: ', err.message);
                return false;
            },
        );

    });
};
// Lấy id vẫn chưa được. Hàm insert nhiều ảnh chạy bình thường!
export const insertImages = (name, ...args) => {
    const f_id = getIDByName(name);
    console.log('f', f_id)
    args.map(obj => {
        db.transaction(function(tx) {
            tx.executeSql(
                'INSERT INTO table_images (imageUrl,f_id) VALUES (?,?);', [obj.url, f_id],
                (tx, results) => {
                    console.log(results);
                }, (err) => {
                    console.log('transaction error: ', err.message);
                },
            );
        });
    });

};
//Lấy danh sách ảnh theo tên! id vẫn chưa return được
export const viewImagesByName = (name) => {
    const f_id = getIDByName(name);
    db.transaction(function(tx) {
        tx.executeSql(
            'SELECT imageUrl from tables_images where f_id=?;', [f_id],
            (tx, results) => {
                console.log(results)
            }, (err) => {
                console.log('transaction error: ', err.message);
            },
        );
    });
};
//Lấy tất cả ảnh!
export const viewAllFlower = (getResult) => {
    console.log('vi')
    var temp = [];
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM table_flowers;', [], (tx, results) => {
            for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
            }
            // console.log('te', temp);
            getResult(temp);
        }, (err) => {
            console.log('transaction error: ', err.message);
        }, );
    });

};
//Xoá đata
export const removeData = () => {
    console.log('vi')
    var temp = [];
    db.transaction(tx => {
        tx.executeSql('DELETE FROM table_images;', [], (tx, results) => {
            console.log('Xoá thành công');
        }, (err) => {
            console.log('transaction error: ', err.message);
        }, );
        tx.executeSql('DELETE FROM table_flowers;', [], (tx, results) => {
            console.log('Xoá thành công');
        }, (err) => {
            console.log('transaction error: ', err.message);
        }, );
    });

};