<template>
    <a v-bind:href="this.$API_URL + '/' + data.url" v-bind:download="data.name"
        ><div
            class="p-3 pl-5 pr-5 text-lg font-medium border-2 border-gray-100 rounded-md shadow-md cursor-pointer "
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
