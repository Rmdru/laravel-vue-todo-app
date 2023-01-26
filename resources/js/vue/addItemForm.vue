<template>
    <div>
        <input type="text" v-model="item.name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block mt-3" :class="[ item.name ? 'pointer-events-auto opacity-100 cursor-pointer' : 'pointer-events-none opacity-50 cursor-not-allowed' ]" @click="addItem()">
            <font-awesome-icon icon="plus" /> Toevoegen
        </button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data: function () {
        return {
            item: {
                name: ""
            }
        }
    },
    methods: {
        addItem() {
            if (this.item.name == '') {
                return;
            }

            axios.post('api/item/store', {
                item: this.item
            })
            .then(response => {
                if (response.status == 201) {
                    this.item.name = "";
                    this.$emit('reloadlist');
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>