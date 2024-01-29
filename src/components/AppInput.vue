<template>
    
    <input type="text" :value="value" @keyup="$emit('input', $event.target.value)" class="form-control" placeholder="Type in your club">

</template>

<script>
export default {
    props: {
        value: String
    }
}
</script>

<style scoped>

</style>