(function () {
    var app = angular.module('store', []);


    app.controller('StoreController', function(){
            this.products = gems;
    });

    var gems = [
    {
        name: 'Dedecahedron',
        price: 6,
        description: 'lorem ipsum',
        soldOut: true,
        images: [
            {
                full:  'static/img/city-full-1.jpeg',
                thumb: 'static/img/city-thumb-1.jpeg',
            }
        ],
    },
    {
        name: 'Pentagon Gem',
        price: 5.95,
        description: 'lorem ipsum',
        soldOut: false,
        images: [
            {
                full:  'static/img/city-full-2.jpeg',
                thumb: 'static/img/city-thumb-2.jpeg',
            }
        ],
    }
    ];

})();
