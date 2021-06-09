<template>
    <div class="w-11/12 m-auto mt-5 md:w-1/2 lg:w-1/2 h-5/6">
        <h1 class="text-3xl font-bold">Informationsmaterial 📁</h1>
        <h2 class="mt-3 text-2xl font-medium">PDF Dateien</h2>
        <div v-if="isLoaded" class="flex flex-row justify-between mt-5">
            <DownloadCard
                v-for="(item, index) in data"
                v-bind:data="item"
                v-bind:index="index"
                v-bind:key="item._id"
            >
            </DownloadCard>
        </div>
    </div>
</template>

<script>
import DownloadCard from "./DownloadCard.vue";

export default {
    components: {
        DownloadCard,
    },
    data() {
        return {
            data: null,
            isLoaded: false,
        };
    },
    created() {
        document.title = "Learn - Informationsmaterial";

        this.axios
            .get("/api/baklava")
            .then((response) => {
                this.data = response.data;
                this.isLoaded = true;
            })
            .catch((err) => console.log(err));
    },
};
</script>

<style></style>
