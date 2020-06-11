+# Search plant
***URL search plant: localhost:4000/api/plant/searchPlant?filter="name_plant"***

***Author: required login and must have token attach Bearer in header***

***Method: get***

***Input*** :
name_plant filter on url (name_plant vietnamese)

***Ouput*** : limit 5 element

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
