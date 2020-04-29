# create post
***URL create post: localhost:4000/api/plant/searchPlant?filter="name_plant"***

***Author: required login and must have token attach Bearer in header***

***Input*** :
filter on url

***Ouput*** :

```js
{
    plants:[ {
        _id,
        name
        characteristics,
        images: [pathImage] //link image from google cloud,
        created
    }]
}
```
