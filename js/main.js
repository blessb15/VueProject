var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'images/socks-bl.png',
        inventory: 100,
        details: ["100% cotton", "Gender-Neutral", "Strong"],
        variants: [
            {
                sku:1234,
                feel:"Soft",
                type:"Long",
                color:"Green",
                image:"images/socks-grn.png",
            },
            {
                sku:1235,
                feel:"Rough",
                type:"Tough",
                color:"Red",
                image:"images/socks-red.png",
            },
            {
                sku:1236,
                feel:"Smooth",
                type:"Comfort",
                color:"Blue",
                image:"images/socks-bl.png",
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function(){
          this.cart += 1
        },
        setColor: function(variantImage){
          this.image = variantImage;
        }
    }
});
