<template>
    <div>
        <div v-if="isLoaded" class="flex flex-col mt-5">
            <img
                :src="getImage()"
                alt="title photo"
                class="w-11/12 m-auto sm:w-2/5 lg:w-2/5"
            />
            <div class="w-3/4 m-auto lg:w-1/3 md:w-1/3">
                <h1 class="mt-5 text-2xl font-bold">{{ data.title }}</h1>
                <span class="text-sm text-gray-400"> {{ data.date }} </span>
                <p class="mt-2 font-serif">{{ data.text }}</p>
            </div>
        </div>
        <div v-if="!isLoaded">
            <div class="flex flex-row items-center justify-center mt-20">
                <div
                    class="w-5 h-5 bg-gray-300 rounded-full animate-ping"
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
export default {
    data() {
        return {
            data: null,
            isLoaded: false,
            id: this.$route.params.id,
        };
    },
    created() {
        document.title = "Learn - News";

        this.axios
            .get("/api/news/" + this.id)
            .then((response) => {
                this.data = response.data;
                this.isLoaded = true;
                console.log(this.data);
                document.title = "Learn - " + this.data.title;
            })
            .catch((err) => console.log(err));
    },

    methods: {
        getImage() {
            if (this.data != null) {
                return this.$API_URL + "/" + this.data.image_url;
            } else {
                return "";
            }
        },
    },
};
</script>

<style></style>
