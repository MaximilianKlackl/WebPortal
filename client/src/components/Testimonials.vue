<template>
    <div>
        <h1 class="mt-10 text-3xl font-bold text-center lg:text-left lg:ml-24">
            Kundenbewertungen
        </h1>

        <div
            class="flex flex-row flex-wrap items-start justify-center m-auto mt-8  h-5/6"
        >
            <div v-for="item in data" :key="item" class="p-5">
                <div
                    class="p-4 mx-auto bg-white shadow-lg  dark:bg-gray-800 w-72 rounded-xl"
                >
                    <p class="text-gray-600 dark:text-white">
                        <span class="text-lg font-bold text-indigo-500">
                            “
                        </span>
                        {{ item.text }}
                        <span class="text-lg font-bold text-indigo-500">
                            ”
                        </span>
                    </p>
                    <div class="flex items-center mt-4">
                        <a href="#" class="relative block">
                            <img
                                alt="profil"
                                :src="this.$API_URL + '/' + item.image_url"
                                class="object-cover w-10 h-10 mx-auto rounded-full "
                            />
                        </a>
                        <div class="flex flex-col justify-between ml-2">
                            <span class="text-sm font-semibold text-indigo-500">
                                {{ item.from }}
                            </span>
                        </div>
                    </div>
                </div>
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
        };
    },
    created() {
        this.axios
            .get("/api/testimonials")
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
