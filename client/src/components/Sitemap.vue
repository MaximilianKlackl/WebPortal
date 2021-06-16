<template>
    <div class="w-11/12 pt-10 m-auto h-5/6 lg:w-2/3">
        <h1 class="mb-8 text-3xl font-bold">Sitemap</h1>

        <div v-for="item in sites" v-bind:key="item">
            <router-link :to="item">
                <div
                    class="w-full px-4 py-2 mt-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md  lg:w-2/5 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                    {{ item }}
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sites: [
                "Home",
                "News",
                "Kontakt",
                "Downloadbreich",
                "Informationsmaterial",
                "Datenschuetzerklaerung",
                "Kundenbewertungen",
                "Sitemap",
            ],
        };
    },
};
</script>
