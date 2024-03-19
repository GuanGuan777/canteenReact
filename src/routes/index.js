export default {
  routes: [
    { path: "/login", component: "login" },
    {
      path: "/",
      component: "@/layouts/index",
      routes: [
        { path: "/canteen", component: "@/pages/canteen/index" },
        { path: "/home", component: "home" },
        { path: "/my", component: "my" },
        { path: "/about", component: "about" },
      ],
    },
    { path: "/store", component: "@/pages/store" },
    {path: "/testVue", component: "@/pages/testVue" }
  ],
};
