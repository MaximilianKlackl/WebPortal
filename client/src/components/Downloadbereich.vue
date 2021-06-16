<template>
    <div class="w-11/12 h-screen m-auto mt-10 lg:w-2/3">
        <h1 class="text-3xl font-bold">Downloadbreich</h1>

        <dir v-if="isLoaded" class="flex flex-row m-auto mt-5">
            <div
                v-for="item in data"
                :key="item"
                class="flex flex-row p-2 pl-5 pr-5 m-5 border-2 border-gray-100 rounded-md shadow-sm cursor-pointer "
            >
                <a
                    :href="this.$API_URL + '/' + item.url"
                    target="_blank"
                    class="flex flex-col"
                >
                    <span class="font-bold"> {{ item.name }} </span>
                    <span> {{ item.file_type }} </span>
                </a>
            </div>
        </dir>
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
            .get("/api/kebab")
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
