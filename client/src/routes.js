
import Home from "./components/Home.vue";
import News from "./components/News.vue";
import Kontakt from "./components/Kontakt.vue";

export const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/news",
        component: News
    },
    {
        path: "/kontakt",
        component: Kontakt
    },
    {
        path: "/informationsmaterial",
        component: Kontakt
    },
    {
        path: "/downloadbereich",
        component: Kontakt
    }
]

