const app = new Vue({
    el: "#app",
    data: {
        photos: [
            "https://source.unsplash.com/BP2RioglKXk/1600x900", 
            "https://source.unsplash.com/WYmPNSUyfNg/1600x900",
            "https://source.unsplash.com/3dUpL1h97CQ/1600x900",
            "https://source.unsplash.com/yn97LNy0bao/1600x900"
        ],
        counter: 0
    },
    methods: {
        next() {
            (this.counter == this.photos.length - 1) ? this.counter = 0 : this.counter++;
            console.log(this.counter);
        },
        back() {
            (this.counter == 0) ? this.counter = this.photos.length -1 : this.counter--;
            console.log(this.counter);
        }

    }
});
