<template>
    <div class="max-w-3xl mx-auto p-4">
        <div>
            <h2 class="text-lg font-bold">Todo app</h2>
            <add-item-form />
        </div>
        <list-view :items="items" />
    </div>
</template>
<script>
import axios from "axios"
import addItemForm from "./addItemForm.vue"
import listView from "./listView.vue"

export default {
    components: {
        addItemForm,
        listView
    },
    data: function() {
        return {
            items: []
        }
    },
    methods: {
        getList() {
            axios.get('api/items')
            .then(response => {
                this.items = response.data
            })
            .catch(error => {
                console.log(error);
            })
        }
    },

    created() {
        this.getList();
    }
}
</script>