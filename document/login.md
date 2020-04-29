# Login google or facebook
***URL login google: localhost:4000/api/auth/oauth/google***
***URL login facebook: localhost:4000/api/auth/oauth/facebook***

***Input*** :

```js
req.body={
    access_token:"string_access token from fb, gg"
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
