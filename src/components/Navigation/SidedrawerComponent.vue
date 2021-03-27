<template>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app    
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    VonkProgramming
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav dense>
            <v-list-item v-for="item in items" :key="item.link" :to="item.link">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        items: Array,
        drawerProp: Boolean
    },
    data() {
        return {
            drawer: this.drawerProp
        }
    },
    watch: {
        drawerProp() {
            this.drawer = this.drawerProp;
        },
        drawer() {
            if(!this.drawer) {
                this.$emit('close', this.drawer);
            }
        }
    }
}
</script>

<style scoped>
    .v-navigation-drawer {
        z-index: 200;
    }
</style>