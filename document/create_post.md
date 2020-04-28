# create post

***Input*** :

```js
body={
    mentionedPlant,//id_plant of plant be metioned
    namePlant,//    name of plant (required)
    content,// content of post      (required)
    image:[] // list image of post maximum 5 item (required)
}
```

***Ouput*** :

```js
{
    message: "Created was successful",
    post: {
        content,
        postedBy,
        image: [pathImage] //link image from google cloud
    }
}
```
