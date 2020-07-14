# Create contribute
***URL create contribute: localhost:4000/api/contribute/create***

***Author: required login and must have token attach Bearer in header***

***Method: contribute***


***Input*** :

```js
body={
    nameVN,
    familiar,
    location,
    characteristics,
    meaning,
    comment,
    postContributed     // id_post contributed
}
```

***Ouput*** :

```js
{
    contribute: {
        nameVN,
        familiar,
        location,
        characteristics,
        meaning,
        comment,
        postContributed
    }
}
```
