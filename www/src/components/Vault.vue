<template>
    <div class="vault">
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
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
                </div>
            </div>
            <h1>Vault Name: {{vault.title}}</h1>
            <h2>Vault description: {{vault.body}}</h2>
            <div class="row">
                <div class="col-xs-4" v-for="keep in keeps">
                    <div class="well">           
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vault',
    data(){
        return {
            title: '',
            body: '',
            imgUrl: '',
            creatorId: this.$store.state.user._id,
            vault: this.$store.state.vault
        }
    },
    mounted() {
      this.$store.dispatch('getKeepsByVaultId', (this.$route.params.id)
      )
    },
    computed:{
        vault(){
            return this.$store.state.vault
        },
        keeps() {
            return this.$store.state.vault.keeps
        }
    },
    methods:{
        createKeep() {
            this.$store.dispatch('createKeep', { title: this.title, body: this.body, imgUrl: this.imgUrl, creatorId: this.creatorId })
        }, 

    },
    components:{
       
    }
}
</script>


<style scoped>

</style>