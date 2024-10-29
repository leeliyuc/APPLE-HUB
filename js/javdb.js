let url = $request.url;
if (!url.includes("&include_adult=true")) {
    url += "&include_adult=true";  // 添加参数
}
$done({ url: url });  // 返回修改后的 URL
