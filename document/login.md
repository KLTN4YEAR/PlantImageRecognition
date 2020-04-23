# Login google or facebook

***Input*** :

```js
{
    googleId or facebookId,//require
    email,
    fullName,//require
    birthday,
    gender,
    address,
    avatar,//URL image
}
```

***Ouput*** :

```js
{
    userInfo: {
        _id,
        fullName,
        avatar,//if exist
    }
}
```
