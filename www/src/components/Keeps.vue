<template>
    <div class="keeps">
        <div class="row">
            <div class="col-xs-12">
                <h2>Create Keep</h2>
                <form @submit.prevent="createKeep">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="title" placeholder="Keep Title" required>
                    </div>
                    <div class="form-group">
                        <textarea rows="4" cols="50" class="form-control" v-model="body" placeholder="Body"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="imgUrl" placeholder="URL">
                    </div>
                        <button class="btn btn-primary" type="submit">Create Keep</button>
                </form>
            <ul>
                <li v-for="keep in keeps"><router-link :to="'/keeps/'+ keep._id">{{keep.title}}</router-link></li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'keeps',
    data(){
        return {
            title: '',
            body: '',
            imgUrl: '',
            creatorId: this.$store.state.user._id
        }
    },
    mounted() {
    
        this.$store.dispatch('getKeeps')
    },
    props:[],
    computed:{
        keeps() {
            return this.$store.state.keeps
        },
        user() {
            return this.$store.state.user
        }
    },
    methods:{
    
        createKeep(){
            this.$store.dispatch('createVault', {name: this.name, body: this.description, imgUrl: this.imgUrl, creatorId: this.creatorId})
            })
        },
    
    },
    components:{}
}
</script>


<style scoped>

</style>