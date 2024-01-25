// 路由
import { createRouter, createWebHistory } from "vue-router";
let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('@/views/home/index.vue')
    }
  ],
  // 每次切换路由页面滚动到顶部
  scrollBehavior() {
    return { top: 0 }
  }
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token') || '';
//   // 如果用户已登录
//   if (token) {
//     // 访问登录页则跳回首页
//     if (to.path == "/login") {
//       next({ path: "/" });
//     } else {
//       // 如果访问其他页面则放行
//       next();
//     }
//   } else { // 如果用户未登录
//     if (to.path == "/login") {
//       next();
//     } else {
//       // 如果访问其他页面则返回登录界面
//       next({ path: "/login" });
//     }
//   }
// })

export default router;