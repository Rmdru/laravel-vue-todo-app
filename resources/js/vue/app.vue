<template>
    <div>
        <div>
            <h2>Todo app</h2>
            <add-item-form />
        </div>
        <list-view />
    </div>
</template>
<script>
import addItemForm from "./addItemForm.vue"
import listView from "./listView.vue"

export default {
    components: {
        addItemForm,
        listView
    }
}
</script>