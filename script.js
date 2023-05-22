const app = Vue.createApp({
    data() {
        return {
            arrEmail: [],
            numEmail: 10,
            loading: true
        }
    },
    methods: {
        getEmail(){
            let countEmail = this.numEmail
            this.arrEmail = []
            this.loading = true
            for(let i = 0; i < this.numEmail; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(backResponse => {
                        this.arrEmail.push(backResponse.data.response)
                        if(this.arrEmail.length == countEmail){
                            this.loading = false
                        }
                    })
            }
        }
    },
    created(){
        this.getEmail()
    }
})

app.mount('#root')

// 