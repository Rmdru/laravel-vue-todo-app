<template>
    <div>
        <div :class="[item.completed ? 'border-green-500' : '', 'border rounded-md border-gray-300 p-2 mt-1 shadow-sm grid todoItem']">
            <input type="checkbox" @change="updateCheck()" v-model="item.completed" true-value="1" class="my-auto rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50" :class="item.completed ? 'text-green-500 focus:border-green-300 focus:ring-green-200' : 'text-red-500 focus:border-red-300 focus:ring-red-200'" />
            <span :class="item.completed ? 'text-green-500 line-through' : ''">{{ item.name }}</span>
            <button @click="removeItem()">
                <font-awesome-icon icon="trash" class="text-red-500" />
            </button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    props: ["item"],
    methods: {
        updateCheck() {
            axios.put('api/item/' + this.item.id, {
                item: this.item
            })
            .then(response => {
                if (response.status == 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch(error => {
                console.log(error);
            })
        },

        removeItem() {
            axios.delete('api/item/' + this.item.id)
            .then(response => {
                if (response.status == 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch(error => {
                console.log(error); 
            })
        }
    }
}
</script>