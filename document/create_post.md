# create post
***URL create post: localhost:4000/api/post/create***

***Author: required login and must have token attach Bearer in header***

***Input*** :

```js
body={
    mentionedPlant, //  id_plant of plant be metioned (if have required 12 characters)
    namePlant,      //  name of plant
    content,        //  content of post      (required)
    plant_images:[] // list image of post maximum 5 item (required)
}
```

***Ouput*** :

```js
{
    post: {
        content,
        postedBy,
        images: [pathImage]     //link image from google cloud
    }
}
```
