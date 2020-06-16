# Get List Post Of User
***URL Get info user: localhost:4000/api/post/getListPostUser/5ea90d94130f0a1aa4516f0d***

***Author: required login and must have token attach Bearer in header***

***Method: get***

***Input*** :

```js
    lastId on url  //default = 111111111111
```

***Ouput*** :

```js
limit: 10 Post
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
