<template>
    <div class="h-screen">
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
    components: {
        Navbar,
        Footer,
    },
    created() {
        document.title = "Learn - Nachhilfe";
    },
};
</script>

<style></style>
