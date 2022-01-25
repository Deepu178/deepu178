let ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
];
let kfc_s = 0;
let bg_s = 0;
let d_s = 0;
let s_s = 0;
let p_s = 0;

let kfc_c = 0;
let bg_c = 0;
 let d_c = 0;
 let s_c = 0;
 let p_c = 0;


let ratingAvg = [];
 
function createObject(resname, s, c) {
    obj = {
        restaurant: resname,
        averageRating: s / c,
    };
    ratingAvg.push(obj);
}

ratingData.forEach(element => {
    if(element.restaurant == 'KFC'){
        kfc_s += element.rating;
        kfc_c++;
    }
    if(element.restaurant == 'Burger King'){
        bg_s += element.rating;
        bg_c++;
    }
    if(element.restaurant == 'Domino'){
       d_s += element.rating;
        d_c++;
    }
    if(element.restaurant == 'Subway'){
        s_s += element.rating;
        s_c++;
    }
    if(element.restaurant == 'Pizza Hut'){
      p_s += element.rating;
        p_c++;
    }
});


createObject("KFC", kfc_s, kfc_c);
createObject("Burger King", bg_s, bg_c);
createObject("Domino", d_s, s_c);
createObject("Subway", s_s, s_c);
createObject("Pizza Hut", p_s, p_c);

console.log(ratingAvg);


let topRestaurant  = [];
ratingAvg.forEach((element) => {
if(element.averageRating >= 4) {
    topRestaurant.push(element);
}
});

console.log(topRestaurant);