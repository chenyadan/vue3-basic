import request from "@/api/axios.js";
export function yiiBlogTab(params) {
  return request({
    url: "/yii/web/index",
    method: "post",
    data: params,
  });
} // yii 获取blog标签数
export function yiiBlogSearch(params) {
  return request({
    url: "/yii/web/indexSearch",
    method: "post",
    data: params,
  });
} // yii博客搜索
export function forBlog(params) {
  return request({
    url: "/yii/upload/BlogDetail",
    method: "post",
    data: params,
  });
} //博客详情
