var app = new Vue({
    el: '#app',
    data: {
        brand: 'The Best',
        product: 'Socks',
        image: 'images/socks-bl.png',
        inStock: true,
        details: ["100% cotton", "Gender-Neutral", "Strong"],
        variants: [
            {
                sku:1234,
                feel:"Soft",
                type:"Long",
                color:"#329f65",
                image:"images/socks-grn.png",
            },
            {
                sku:1235,
                feel:"Rough",
                type:"Tough",
                color:"#9f4235",
                image:"images/socks-red.png",
            },
            {
                sku:1236,
                feel:"Smooth",
                type:"Comfort",
                color:"#3581a0",
                image:"images/socks-bl.png",
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function(){
            this.cart += 1;
        },
        setColor: function(variantImage){
            this.image = variantImage;
        },
        removeFromCart: function(){
            if(this.cart != 0){
                this.cart -= 1;
            }
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        }
    }
});
