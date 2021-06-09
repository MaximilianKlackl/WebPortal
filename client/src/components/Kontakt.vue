<template>
    <section class="relative text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-12 mx-auto sm:flex-nowrap">
            <div
                class="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg  lg:w-2/3 md:w-1/2 sm:mr-10"
            >
                <iframe
                    width="100%"
                    height="100%"
                    class="absolute inset-0"
                    frameborder="0"
                    title="map"
                    marginheight="0"
                    marginwidth="0"
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10646.14510565798!2d14.0302715!3d48.1577447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd04044e4fc9fd4a4!2sHTL%20Wels!5e0!3m2!1sde!2sat!4v1622298314702!5m2!1sde!2sat"
                ></iframe>
                <div
                    class="relative flex flex-wrap py-6 bg-white rounded shadow-md "
                >
                    <div class="px-6 lg:w-1/2">
                        <h2
                            class="text-xs font-semibold tracking-widest text-gray-900  title-font"
                        >
                            ADDRESS
                        </h2>
                        <p class="mt-1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                    </div>
                    <div class="px-6 mt-4 lg:w-1/2 lg:mt-0">
                        <h2
                            class="text-xs font-semibold tracking-widest text-gray-900  title-font"
                        >
                            EMAIL
                        </h2>
                        <a class="leading-relaxed text-indigo-500"
                            >example@email.com</a
                        >
                        <h2
                            class="mt-4 text-xs font-semibold tracking-widest text-gray-900  title-font"
                        >
                            PHONE
                        </h2>
                        <p class="leading-relaxed">123-456-7890</p>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col w-full mt-8 bg-white  lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0"
            >
                <form>
                    <h2
                        class="mb-1 text-4xl font-bold text-gray-900 title-font"
                    >
                        Kontaktier mich 👋
                    </h2>
                    <div class="relative mb-4">
                        <label
                            for="name"
                            class="text-sm leading-7 text-gray-600"
                            >Name</label
                        >
                        <input
                            v-model="name"
                            type="text"
                            id="name"
                            name="name"
                            class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>
                    <div class="relative mb-4">
                        <label
                            for="email"
                            class="text-sm leading-7 text-gray-600"
                            >Email</label
                        >
                        <input
                            v-model="email"
                            type="email"
                            id="email"
                            name="email"
                            class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>
                    <div class="relative mb-4">
                        <label
                            for="message"
                            class="text-sm leading-7 text-gray-600"
                            >Message</label
                        >
                        <textarea
                            v-model="message"
                            id="message"
                            name="message"
                            class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        ></textarea>
                    </div>
                    <div class="relative mb-4">
                        <input
                            @change="onFileChange()"
                            ref="files"
                            type="file"
                            name="file"
                            multiple
                            id="file-upload"
                            class="w-full"
                        />
                    </div>
                    <input
                        @click="submitForm($event)"
                        type="submit"
                        value="Send"
                        class="py-2 text-lg text-white bg-blue-500 border-0 rounded  px-14 focus:outline-none hover:bg-blue-600"
                    />
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            message: "",
            files: null,
        };
    },
    methods: {
        onFileChange() {
            this.files = this.$refs.files.files;
        },
        submitForm(event) {
            event.preventDefault();

            let formData = new FormData();

            formData.append("name", this.name);
            formData.append("email", this.email);
            formData.append("message", this.message);

            for (var i = 0; i < this.files.length; i++) {
                let file = this.files[i];

                formData.append("files", file);
            }

            this.axios
                .post("api/mail", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    console.log(res);
                    this.name = "";
                    this.email = "";
                    this.message = "";
                    this.files = null;
                })
                .catch((err) => console.log(err));
        },
    },
    created() {
        document.title = "Learn - Kontakt";
    },
};
</script>

<style>
/* styling html input type file !?!??!?!!??!?!? wtf */
input[type="file"]::file-selector-button {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: white;
    transition: 1s;
    cursor: pointer;
}

input[type="file"]::file-selector-button:hover {
    background-color: #81ecec;
    border: 2px solid #00cec9;
}
</style>
