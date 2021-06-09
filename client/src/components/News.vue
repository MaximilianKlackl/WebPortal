<template>
    <div class="h-4/5">
        <div v-if="isLoaded">
            <h2 class="mt-10 ml-10 text-4xl font-bold text-center lg:text-left">
                Neuigkeiten 🦝
            </h2>
            <div
                class="flex flex-row flex-wrap items-center justify-center m-5"
            >
                <NewsCard
                    v-for="(item, index) in data"
                    v-bind:data="item"
                    v-bind:index="index"
                    v-bind:key="item._id"
                >
                </NewsCard>
            </div>
        </div>
        <div v-if="!isLoaded">
            <div class="flex flex-row items-center justify-center mt-20">
                <div
                    class="w-5 h-5 bg-gray-300 rounded-full -top-5 animate-ping"
                ></div>
                <div
                    class="w-5 h-5 bg-gray-300 rounded-full animate-ping"
                ></div>
                <div
                    class="w-5 h-5 bg-gray-300 rounded-full animate-ping"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import NewsCard from "./NewsCard.vue";

export default {
    components: {
        NewsCard,
    },
    data() {
        return {
            data: null,
            isLoaded: false,
        };
    },
    created() {
        document.title = "Learn - News";

        this.axios
            .get("/api/news")
            .then((response) => {
                this.data = response.data;
                this.isLoaded = true;
                //console.log(this.data)
            })
            .catch((err) => console.log(err));
    },
};
</script>

<style></style>
