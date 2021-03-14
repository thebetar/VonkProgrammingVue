<template>
    <v-card height="500">
        <div class="card-center">
            <v-img
                max-width="300"
                contain
                :src="require('@/'+item.imageUrl)"
            ></v-img>
            <v-card-title class="justify-center d-none d-sm-block d-md-block">
                {{ item.title }}
            </v-card-title>
            <v-card-text>
                <p class="px-0 px-md-1">
                    {{ item.description }}
                </p>
            </v-card-text>
        </div>
    </v-card>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style scoped>
    .card-center {
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    @media only screen and (max-width: 600px) {
        .card {
            height: 120% !important;
        }
    }
</style>