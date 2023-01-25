<template>
    <div>
        <input type="text" v-model="item.name" />
        <font-awesome-icon
            icon="plus-square"
        />
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            item: {
                name: ""
            }
        }
    }
}
</script>