<template>
    <div class="vaults">
        <div class="row">
            <div class="col-xs-12">
                <h2>Create Vault</h2>
                <form @submit.prevent="createVault">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="title" placeholder="Vault Title" required>
                    </div>
                    <div class="form-group">
                        <textarea rows="4" cols="50" class="form-control" v-model="description" placeholder="Description"></textarea>
                    </div>
                        <button class="btn btn-primary" type="submit">Create Vault</button>
                </form>
            <ul>
                <li v-for="vault in vaults"><router-link :to="'/vaults/'+ vault._id">{{vault.title}}</router-link> <span @click="removeVault(vault)">x</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vaults',
    data(){
        return {
            title: '',
            description: '',
            creatorId: this.$store.user._id
        }
    },
    mounted(){
        this.$store.dispatch('getVaults')
    },
    computed:{
        vaults(){
            return this.$store.state.vaults
        },
        user(){
            return this.$store.state.user
        }

    },
    methods:{
        createVault(){
            this.$store.dispatch('createVault', {name: this.title, description: this.description, creatorId: this.creatorId})
            })
        },
        removeVault(vault){
            this.$store.dispatch('removeVault', vault)
        }
    },
    components:{}
}
</script>


<style scoped>

</style>