# Get List Post
***URL Get info user: localhost:4000/api/post/getList/5ea90d94130f0a1aa4516f0d***

***Author: required login and must have token attach Bearer in header***

***Method: get***

***Input*** :

```js
    lastId on url
```

***Ouput*** :

```js
{
    listPost: [
    {
        images: [],
        _id             //id post
        content
        postedBy: {
            _id         //id user
            fullName
            avatar 
            email
        },
        mentionedPlant
        created
        }
    ]
}
```
