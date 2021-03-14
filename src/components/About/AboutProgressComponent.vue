<template>
    <div>
        <v-progress-circular :color="color" :width="15" :rotate="-90" :size="80" :value="value">{{ value }}%</v-progress-circular><span id="progress-text"> {{ years }} jaar ervaring</span>
    </div>
</template>

<script>
export default {
    props: {
        years: Number,
        progress: Number,
        color: String
    },
    data() {
        return {
            interval: null,
            value: 0,
            progressValue: this.progress
        }
    },
    mounted() {
        if(window.scrollY > 300) {
            this.startProgress();
        }
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400) {
                this.startProgress();
            }
        })
    },
    methods: {
        startProgress() {
            if(!this.interval) {
                this.interval = setInterval(() => {
                    if(this.value < this.progressValue) {
                        this.value += Math.round(Math.random() * 10);
                        if(this.value > this.progressValue) {
                            this.value = this.progressValue;
                        }
                    }
                }, 200);
            }
        }
    },
    onDestroy() {
        clearInterval(this.interval);
    }
}
</script>

<style>
    @media only screen and (max-width: 600px) {
        #progress-text {
            display: none !important;
        }
    }
</style>