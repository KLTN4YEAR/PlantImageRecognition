# Get info plant
***URL Get info plant: localhost:4000/api/plant/getInfo/5ea90d94130f0a1aa4516f0d***

***Author: required login and must have token attach Bearer in header***

***Method: get***

***Input*** :

```js
    _id_plant on url
```

***Ouput*** :

```js
{
    plant: {
            images,         //list path images
            _id             //id plant
            name
            nameVN
            nameScience
            familiar
            location
            characteristics
            meaning
    }
}
```
