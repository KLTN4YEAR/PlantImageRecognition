# Login google or facebook

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
    }
}
```
