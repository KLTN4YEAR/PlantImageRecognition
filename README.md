Khởi động react-native app:
- Bật trình gỡ lỗi và kết nối với điện thoại
* Phần server:
chạy :  - cd server
        - npm install
        - npm start
* Phần client:
Chạy:   - cd client
        - npm cache clean --force
        - npm install

Chạy cmd: ipconfig sao chép ip v4 của mạng đang sài.
Cài đặt: đi đến ..\client\src\config\helper
Sửa API_URL thành 'http://[_địa chỉ ip v4_]:4000';
Tắt tường lửa của máy tính
Chạy:   - npm react-native run-android
