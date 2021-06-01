<template>
    <header class="font-medium text-gray-700">
        <div class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
            <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <span class="ml-3 text-xl font-bold text-blue-600">Learn</span>
            </a>
            <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
                <router-link to="/home" class="mr-5 hover:text-gray-900"> Home </router-link>
                <router-link to="/news" class="mr-5 hover:text-gray-900"> News </router-link>
                <router-link to="/impressum" class="mr-5 hover:text-gray-900"> Impressum </router-link>
                  <Menu as="div" class="relative z-50 inline-block text-left">
                    <div>
                    <MenuButton class="inline-flex justify-center w-full font-medium bg-white focus:outline-none">
                        Download
                        <ChevronDownIcon class="w-5 h-5 pt-1 ml-1 mr-3" aria-hidden="true" />
                    </MenuButton>
                    </div>

                    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                    <MenuItems class="absolute right-0 w-56 mt-2 text-sm origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1">
                        <MenuItem v-slot="{ active }">
                            <router-link to="/informationsmaterial" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2']">Informationsmaterial</router-link>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <router-link to="/downloadbereich" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2']">Downloadbereich</router-link>
                        </MenuItem>
                        </div>
                    </MenuItems>
                    </transition>
                </Menu>
            </nav>
             <router-link to="/kontakt">
                <button class="inline-flex items-center px-3 py-1 mt-4 text-base font-medium border-0 rounded bg-blue-50 focus:outline-none hover:bg-blue-100 md:mt-0">Kontakt
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button>
            </router-link>
        </div>
        <hr>    
    </header>
</template>

<script>

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
}

</script>

<style>

    

</style>
