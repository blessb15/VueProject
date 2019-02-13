var app = new Vue({
    el: '#app',
    data: {
        brand: 'The Best',
        product: 'Socks',
        details: ["100% cotton", "Gender-Neutral", "Strong"],
        selectedVariant: 0,
        cart: 0,
        variants: [
            {
                sku:1234,
                feel:"Soft",
                type:"Long",
                color:"#329f65",
                variantImage:"images/socks-grn.png",
                variantQuantity: 2
            },
            {
                sku:1235,
                feel:"Rough",
                type:"Tough",
                color:"#9f4235",
                variantImage:"images/socks-red.png",
                variantQuantity: 30
            },
            {
                sku:1236,
                feel:"Smooth",
                type:"Comfort",
                color:"#3581a0",
                variantImage:"images/socks-bl.png",
                variantQuantity: 0
            }
        ],
    },
    methods: {
        addToCart: function(){
            this.cart += 1;
        },
        updateProduct: function(index){
            this.selectedVariant = index;
            console.log(index);
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
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            if (this.variants[this.selectedVariant].variantQuantity < 1){
                return false;
            } else {
                return true;
            }
        },
    }
});
