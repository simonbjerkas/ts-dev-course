/// <reference types="@types/google.maps" />
let map;
const center = {
    lat: 1,
    lng: 1
};
const initMap = ()=>{
    new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center
    });
};

//# sourceMappingURL=index.07020523.js.map
