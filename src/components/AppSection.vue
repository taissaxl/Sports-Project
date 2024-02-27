<template>

    <div>
        
        <div class="container">

            <div class="row mt-5">
                <h3>You are seeing news from: {{ championship }}</h3>
            </div>

        </div>

        <router-view></router-view>

        <div class="container">
            <div class="row my-club mt-5">

                <div class="col-6">
                    <h2>Your club: {{ myClub }}</h2>
                </div>

                <div class="col-6">
                    <AppInput v-model="myClub" />
                </div>

            </div>
        </div>

    </div>

</template>

<script>
import AppInput from './AppInput.vue';
import { mapGetters } from 'vuex'

export default {
    components: {
        AppInput
    },
    data() {
        return {
            
        }
    },
    props: {
        currentComponent: String
    },
    computed: {
        ...mapGetters({
            championship: 'getChampionship',
            myClub: 'getClubName'
        })
    }
}
</script>

<style scoped>

</style>