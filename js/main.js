var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'https://d2mxuefqeaa7sj.cloudfront.net/s_ACF2B3FED5F7644A8E27E3FE8A9142BB95ECC3C792EA9166BF492FA2116B5277_1517608730821_Screen+Shot+2018-02-02+at+4.58.29+PM.png',
        inventory: 100,
        details: ["100% cotton", "Gender-Neutral", "Strong"],
        variants: [
            {
                sku:1234,
                feel:"Soft",
                type:"Long",
                color:"Green"
            },
            {
                sku:1235,
                feel:"Rough",
                type:"Tough",
                color:"Red"
            },
            {
                sku:1236,
                feel:"Smooth",
                type:"Comfort",
                color:"Blue"
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function(){
            this.cart += 1
        }
    }
});
