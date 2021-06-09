import Home from "./components/Home.vue";
import News from "./components/News.vue";
import Kontakt from "./components/Kontakt.vue";
import SingleNews from "./components/SingleNews.vue";
import PageNotFound from "./components/PageNotFound.vue";
import Impressum from "./components/Impressum.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import informationsmaterial from "./components/Informationsmaterial.vue";

export const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/kontakt",
        component: Kontakt,
    },
    {
        path: "/impressum",
        component: Impressum,
    },
    {
        path: "/informationsmaterial",
        component: informationsmaterial,
    },
    {
        path: "/downloadbereich",
        component: Kontakt,
    },
    {
        path: "/news",
        component: News,
    },
    {
        path: "/datenschutzerklaerung",
        component: PrivacyPolicy,
    },
    {
        path: "/news/:id",
        component: SingleNews,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: PageNotFound,
    },
];
