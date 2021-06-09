<template>
    
    <div class="m-auto mt-5 overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
        <router-link :to="'/news/' + data._id" class="block w-full h-full">
            <img alt="blog photo" v-bind:src="this.$API_URL + '/' + data.image_url" class="object-cover w-full max-h-40"/>
            <div class="w-full p-4 bg-white dark:bg-gray-800">
                <p class="font-medium text-indigo-500 text-md">
                    News
                </p>
                <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                    {{ data.title }}
                </p>
                <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                    {{ data.preview_text }}
                </p>
                <div class="flex items-center mt-4">
                    <p class="text-gray-400 dark:text-gray-300">
                        {{ data.date }}
                    </p>
                </div>
            </div>
        </router-link>
    </div>

</template>

<script>

export default {
    name: "NewsCard",
    props: {
        data: Object
    }
}

</script>

<style>


</style>
