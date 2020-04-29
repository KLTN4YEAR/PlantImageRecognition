# Get info User
***URL create post: localhost:4000/api/user/getInfo/5ea90d94130f0a1aa4516f0d***

***Author: required login and must have token attach Bearer in header***

***Input*** :

```js
    _id_user on url
```

***Ouput*** :

```js
{
    user: {
        //if google
        google: {
            googleId,
            email
        },
        //if facebook
        facebook: {
            facebookId,
            email
        },
        _id,
        fullName,
        avatar,     // path_image,
        created,    // day created account
    }
}
```
