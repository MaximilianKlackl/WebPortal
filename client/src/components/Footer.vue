<template>
    <footer class="text-gray-600 body-font">
        <div
            class="container flex flex-col flex-wrap px-5 py-24 mx-auto  md:items-center lg:items-start md:flex-row md:flex-nowrap"
        >
            <div
                class="flex-shrink-0 w-64 mx-auto text-center  md:mx-0 md:text-left"
            >
                <router-link
                    to="/home"
                    class="flex items-center justify-center font-medium text-gray-900  title-font md:justify-start"
                >
                    <span class="text-2xl font-bold text-blue-600">Learn</span>
                </router-link>
                <p class="mt-2 text-sm text-gray-500">
                    Nachhilfe leicht gemacht
                </p>
            </div>
            <div
                class="flex flex-wrap flex-grow mt-10 -mb-10 text-center  md:pl-20 md:mt-0 md:text-left"
            >
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2
                        class="mb-3 text-sm font-medium tracking-widest text-gray-900  title-font"
                    >
                        PAGES
                    </h2>
                    <nav class="mb-10 list-none">
                        <li>
                            <router-link
                                to="/home"
                                class="text-gray-600 hover:text-gray-800"
                                >Home</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/news"
                                class="text-gray-600 hover:text-gray-800"
                                >News</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/impessum"
                                class="text-gray-600 hover:text-gray-800"
                                >Impressum</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/downloadbereich"
                                class="text-gray-600 hover:text-gray-800"
                                >Downloadbereich</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/informationsmaterial"
                                class="text-gray-600 hover:text-gray-800"
                                >Informationsmaterial</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/kontakt"
                                class="text-gray-600 hover:text-gray-800"
                                >Kontakt</router-link
                            >
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2
                        class="mb-3 text-sm font-medium tracking-widest text-gray-900  title-font"
                    >
                        DATEN
                    </h2>
                    <nav class="mb-10 list-none">
                        <li>
                            <router-link
                                to="/datenschutzerklaerung"
                                class="text-gray-600 hover:text-gray-800"
                                >Datenschutzerklärung</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/datenschutzerklaerung"
                                class="text-gray-600 hover:text-gray-800"
                                >Terms of Service</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/datenschutzerklaerung"
                                class="text-gray-600 hover:text-gray-800"
                                >Cookies Policy</router-link
                            >
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2
                        class="mb-3 text-sm font-medium tracking-widest text-gray-900  title-font"
                    >
                        NACHHILFE FÄCHER
                    </h2>
                    <nav class="mb-10 list-none">
                        <li>
                            <span class="text-gray-600 hover:text-gray-800"
                                >Software Entwicklung</span
                            >
                        </li>
                        <li>
                            <span class="text-gray-600 hover:text-gray-800"
                                >Medientechnik</span
                            >
                        </li>
                        <li>
                            <span class="text-gray-600 hover:text-gray-800"
                                >Datenbanken</span
                            >
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2
                        class="mb-3 text-sm font-medium tracking-widest text-gray-900  title-font"
                    >
                        KONTAKT
                    </h2>
                    <nav class="mb-10 list-none">
                        <li>
                            <a class="text-gray-600 hover:text-gray-800"
                                >My Fake Company</a
                            >
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800"
                                >klacklmaximilian@gmail.com</a
                            >
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800"
                                >4820 Bad Ischl</a
                            >
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800"
                                >Mastaliergasse 27</a
                            >
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div class="bg-gray-100">
            <div
                class="container flex flex-col flex-wrap px-5 py-4 mx-auto  sm:flex-row"
            >
                <p class="text-sm text-center text-gray-500 sm:text-left">
                    © 2021 Learn —
                    <router-link
                        to="/home"
                        rel="noopener noreferrer"
                        class="ml-1 text-gray-600 cursor-pointer"
                        target="_blank"
                        >@Klackl Maximilian</router-link
                    >
                </p>
                <span
                    class="inline-flex justify-center mt-2  sm:ml-auto sm:mt-0 sm:justify-start"
                >
                    <router-link to="#" class="text-gray-500 cursor-pointer">
                        <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                            ></path>
                        </svg>
                    </router-link>
                    <router-link
                        to="#"
                        class="ml-3 text-gray-500 cursor-pointer"
                    >
                        <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                            ></path>
                        </svg>
                    </router-link>
                    <router-link
                        to="#"
                        class="ml-3 text-gray-500 cursor-pointer"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                            ></rect>
                            <path
                                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                            ></path>
                        </svg>
                    </router-link>
                    <router-link
                        to="#"
                        class="ml-3 text-gray-500 cursor-pointer"
                    >
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="0"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </router-link>
                </span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>
