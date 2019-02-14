Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `<div class="product">
            <div class="product-image">
                <img :src="image" :alt="product">
            </div>
            <div class="product-info">
                <div class="product-info-name">{{ title }}</div>
                <div v-if="inStock">In Stock</div>
                <div v-else>Out of Stock</div>
                <div class="shipping">Shipping: {{ shipping }}</div>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <label for="color-option">Colors:</label>
                <div v-for="(variant, index) in variants" @mouseover="updateProduct(index)" :style="{ backgroundColor: variant.color }" class="color-option" name="color-option" value="variant.sku"></div>
            </div>
            <button @click="addToCart" type="button" name="button" class="add-to-cart" :class="{ 'disabled-button': !inStock }" :disabled="!inStock" >Add to Cart</button>
            <button class="remove-from-cart" @click="removeFromCart">X</button>
            <div class="cart">
                <p>Cart: ({{cart}})</p>
            </div>
        </div>`,
    data: function () {
        return {
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
            ]
        };
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
        shipping() {
            if (this.premium) {
                return "Free";
            } else {
                return 2.99;
            }
        },
    }
});

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
    }
});
