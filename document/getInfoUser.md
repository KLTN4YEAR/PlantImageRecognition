# Get info User
***URL Get info user: localhost:4000/api/user/getInfo/5ea90d94130f0a1aa4516f0d***

***Author: required login and must have token attach Bearer in header***

***Method: get***

***Input*** :

```js
    _id_user on url
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
        updated     // day updated account,
    }
}
```
