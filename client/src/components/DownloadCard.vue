<template>
    <a v-bind:href="this.$API_URL + '/' + data.url" v-bind:download="data.name"
        ><div
            class="p-2 text-lg font-medium border-4 border-blue-200 rounded-md cursor-pointer  bg-blue-50"
        >
            <span> {{ data.name }} 📄</span>
        </div>
    </a>
</template>

<script>
export default {
    name: "DownloadCard",
    props: {
        data: Object,
    },
};
</script>

<style></style>
