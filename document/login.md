# Login google or facebook
***URL login google: localhost:4000/api/auth/google***
***URL login facebook: localhost:4000/api/auth/facebook***

***Input*** :

```js
req.body={
    fullName,   //(required)
    googleId,   //if login with gg  (required)
    facebookId, //if login with fb  (required)
    email,
    avatar,     //(required)
}
```

***Ouput*** :

```js
{
    user: {
        _id,
        fullName,
        avatar//if exist
    },
    token
}
```
