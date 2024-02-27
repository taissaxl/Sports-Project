export default {
    state: {
        news: [{
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
    },
    getters: {
        getNews(state) {
            return state.news;
        }
    }
}