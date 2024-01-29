<template>
    
    <section>
        <div class="container">

            <AppSectionIndividualNews 
                v-for="broadcast in news"
                :key="broadcast.id"
                :img-name="broadcast.img"
                :img-info="broadcast.imgInfo"
                :news-title="broadcast.title"
                :news-date="broadcast.date"
            >

                <p>{{ broadcast.content | truncate(200) }}</p>

            </AppSectionIndividualNews>

        </div>
    </section>

</template>

<script>
import AppSectionIndividualNews from './AppSectionIndividualNews.vue';

export default {
    components: {
        AppSectionIndividualNews
    },
    data() {
        return {
            news: []
        }
    },
    created() {
        this.news = [{
            id: 1,
            title: 'New training season has begun',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus pariatur molestias quaerat, dolores ullam vero? Veritatis accusantium voluptatibus magnam soluta nemo, voluptate similique illo ipsam vero. Quis asperiores quisquam culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, similique in quaerat dolores ut consectetur tempora nemo eius amet exercitationem nihil, soluta nesciunt possimus molestias dicta! At quam asperiores ab?',
            date: '2024-01-01',
            img: 'news1.jpg',
            imgInfo: 'First news'
        }, {
            id: 2,
            title: 'Last Wednesdays game ends on a tie',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus pariatur molestias quaerat, dolores ullam vero? Veritatis accusantium voluptatibus magnam soluta nemo, voluptate similique illo ipsam vero. Quis asperiores quisquam culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, similique in quaerat dolores ut consectetur tempora nemo eius amet exercitationem nihil, soluta nesciunt possimus molestias dicta! At quam asperiores ab?',
            date: '2024-01-07',
            img: 'news2.jpg',
            imgInfo: 'Second news'
        }, {
            id: 3,
            title: 'New stadium opening this month',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus pariatur molestias quaerat, dolores ullam vero? Veritatis accusantium voluptatibus magnam soluta nemo, voluptate similique illo ipsam vero. Quis asperiores quisquam culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, similique in quaerat dolores ut consectetur tempora nemo eius amet exercitationem nihil, soluta nesciunt possimus molestias dicta! At quam asperiores ab?',
            date: '2024-01-20',
            img: 'news3.jpg',
            imgInfo: 'Third news'    
        }]
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