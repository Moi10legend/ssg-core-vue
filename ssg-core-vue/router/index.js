import PageInitial from "@/components/PageInitial.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: PageInitial,
    },
    {

    }
]

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;