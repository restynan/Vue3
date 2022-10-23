import {createRouter, createWebHashHistory} from "vue-router";
/*import HomeView from "@/views/HomeView.vue";
import JobResultsView  from "@/views/JobResultsView.vue";
import JobView from "@/views/JobView.vue";*/


//waits util the user access that path only then vue will invoke that function 
//to import the component
const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView  = () => 
  import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView.vue");
const JobView  = () => 
  import(/* webpackChunkName: "jobs" */ "@/views/JobView.vue");

const routes =[
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:jobId", // id is dynamic
    name: "JobListing",
    component: JobView,
  }

];
//localhost:8080/jobs/results

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;