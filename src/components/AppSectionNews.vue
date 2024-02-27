<template>
    
    <section>
        <div class="container">

            <AppSectionIndividualNews 
                v-for="broadcast in news"
                :key="broadcast.id"
                :img-name="broadcast.img"
                :img-info="broadcast.imgInfo"
                :news-date="broadcast.date"
            >

                <template #title>
                    <h2>{{ broadcast.title }}</h2>
                </template>

                <p>{{ broadcast.content | truncate(200) }}</p>

            </AppSectionIndividualNews>

        </div>
    </section>

</template>

<script>
import AppSectionIndividualNews from './AppSectionIndividualNews.vue';
import { mapGetters } from 'vuex'

export default {
    components: {
        AppSectionIndividualNews
    },
    data() {
        return {
  
        }
    },
    computed: {
        ...mapGetters({
            news: 'getNews'
        })
    }
}
</script>

<style scoped>
section {
    padding: 50px 0;
    margin-top: 25px;
    background-color: #F37520;
}
</style>