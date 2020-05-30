# Get info Post
***URL Get info Post: localhost:4000/api/post/getInfoPost/5ea90d94130f0a1aa4516f0d***

***Author: required login and must have token attach Bearer in header***

***Method: get***

***Input*** :

```js
    _id_post on url
```

***Ouput*** :

```js
{
    post: {
        images: [], // list path image
        _id,        // id post
        content
        postedBy: {
            _id     //id user
            fullName
            avatar
            email
        },
        created     //created date
        mentionedPlant
    }
}
```
