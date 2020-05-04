# Update user info
***URL update info: localhost:4000/api/user/updateInfo/5eae86bbf96c9830b4d7553d***

***Method: put***

***Author: required login and must have token attach Bearer in header***

***Input*** :

```js
    _id_user on url,
    body={
        email,
        fullName,
        birthday,
        gender,
        address
        //dont update avatar nha zũ
    }
```

***Ouput*** :

```js
{
    user: {
        email,
        fullName,
        birthday,
        gender,
        address,
        avatar,     // path_image,
        created,    // day created account,
        updated
    }
}
```
