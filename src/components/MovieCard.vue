<template>
    <div class="card-container" @click="showCardBack()">
        <div class="card" :class="{ flipped: isFlipped }">
            <div class="front" v-if="!isFlipped">
                <img
                    :src="'https://e0.pxfuel.com/wallpapers/645/586/desktop-wallpaper-sad-pic-of-boy-in-love-best-broken-heart-broken-couple.jpg'" />
            </div>
            <div class="back" v-else>
                <img :src="'https://image.tmdb.org/t/p/w200/' + movie.poster_path" />
                <div class="gradient"></div>
                <p>
                    {{ movie.title }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "MovieCard",
    emits: ['showCardFront', 'showCardBack'],
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isFlipped: false,
            isDisabled: false
        };
    },
    methods: {
        // showCardFront() {
        //     this.isFlipped = false;
        //     this.$emit('showCardFront', this.movie);
        // },

        showCardBack() {
            if(!this.isDisabled){
                this.isFlipped = true;

                const callback = (isDisabled) => {
                    this.isDisabled = isDisabled;
                    if(!this.isDisabled){
                       // this.isFlipped = false;
                    }
                };
                console.log("showCardBack",{ movie: this.movie, callback: callback });

                this.$emit('showCardBack', { movie: this.movie, callback: callback });
            }
        },
    }
};
</script>

<style scoped>
.card {
    border-radius: 15px;
    overflow: hidden;
    margin: 10px;
    position: relative;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: rotateY(180deg);
}

.card p {
    position: absolute;
    bottom: 8px;
    left: 8px;
    color: #fff;
    font-weight: bold;
    font-size: small;
}

.gradient {
    background-image: linear-gradient(rgba(0, 0, 0, 0), black);
    width: 100%;
    height: 70px;
    bottom: 0px;
    position: absolute;
}

.card {
    width: 200px;
    height: 250px;
    perspective: 800px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}

.card.flipped {
    transform: rotateY(0);
}

.card .front {
    position: absolute;
    width: 100%;
    height: 100%;
}

.card .back {
    position: absolute;
    width: 100%;
    height: 100%;
}

.card .front {
    /* Styles for the front side of the card */
}

.card .back {
    /* Styles for the back side of the card */
}
</style>