// import vue js routes
import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "../pages/DashboardView.vue";
import ProjectView from "../pages/ProjectView.vue";

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: "/",
            component: DashboardView,
        },
        {
            path: "/projects",
            component: ProjectView,
        }
    ]
});

export default router;