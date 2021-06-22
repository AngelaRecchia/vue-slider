const app = new Vue({
    el: "#app",
    data: {
        photos: [
            "https://source.unsplash.com/BP2RioglKXk/1600x900", 
            "https://source.unsplash.com/WYmPNSUyfNg/1600x900",
            "https://source.unsplash.com/3dUpL1h97CQ/1600x900",
            "https://source.unsplash.com/yn97LNy0bao/1600x900"
        ],
        counter: 0,
        perc: 0,
    },
    methods: {
        next() {
            (this.counter == this.photos.length - 1) ? this.counter = 0 : this.counter++;
            this.perc = 0;
        },
        back() {
            (this.counter == 0) ? this.counter = this.photos.length -1 : this.counter--;
            this.perc = 0;
        },
        goTo(index) {
            this.counter = index;
            this.perc = 0;
        },
        move() {
            this.perc++;
            if(this.perc == 100) {
                this.perc = 0;
                this.next();
            } 
            document.getElementById("barTime").style.width = this.perc + "%";
        }
    },
    mounted: function () {
          setInterval(this.move, 30);
      }
});
