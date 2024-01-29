<template>

    <div>
        
        <div class="container">

            <div class="row mt-5">
                <h3>You are seeing news from: {{ championship }}</h3>
            </div>

        </div>

        <AppSectionBanner />

        <AppSectionNews />

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
import AppSectionBanner from './AppSectionBanner.vue';
import AppSectionNews from './AppSectionNews.vue';
import AppInput from './AppInput.vue';

export default {
    components: {
        AppSectionBanner,
        AppSectionNews,
        AppInput
    },
    data() {
        return {
            myClub: 'My Club'
        }
    },
    props: {
        championship: String
    }
}
</script>

<style scoped>

</style>