
var objects = [
"https://images-na.ssl-images-amazon.com/images/I/510qPz1my9L._AC_SX522_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/711F6-eLS6L._AC_SL1500_.jpg",
"https://cdn.vox-cdn.com/thumbor/s9HX5CWof2fv80O9fENKe5pXtXg=/0x0:2040x1360/1200x800/filters:focal(877x866:1203x1192)/cdn.vox-cdn.com/uploads/chorus_image/image/66397697/akrales_181019_3014_0770.0.jpg",
"https://www.petalrepublic.com/wp-content/uploads/2020/09/Ultimate-Guide-to-Lotus-Flowers-Meaning-and-Symbolism-scaled.jpg",
"https://landofbelle.com/wp-content/uploads/2018/06/Land-of-Belle_Website-Product-60.jpg",
];

var azure_names = [
"Sandglass",
"Weapon",
"Screenshot",
"Food",
"Vase",
];

var i = 0;

function changeImage(){
    document.getElementById("object_img").src = objects[i];
    document.getElementById("azure_result_display").innerHTML = azure_names[i];
    i++;
    if(i == 5){
        i = 0;
    }
}

