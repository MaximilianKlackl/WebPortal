import Home from "./components/Home.vue";
import News from "./components/News.vue";
import Kontakt from "./components/Kontakt.vue";
import SingleNews from "./components/SingleNews.vue";
import PageNotFound from "./components/PageNotFound.vue";
import Impressum from "./components/Impressum.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import informationsmaterial from "./components/Informationsmaterial.vue";
import Sitemap from "./components/Sitemap.vue";
import Testimonials from "./components/Testimonials.vue";
import Downloadbereich from "./components/Downloadbereich.vue";

export const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/downloadbereich",
        component: Downloadbereich,
    },
    {
        path: "/kundenbewertungen",
        component: Testimonials,
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
        path: "/sitemap",
        component: Sitemap,
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
