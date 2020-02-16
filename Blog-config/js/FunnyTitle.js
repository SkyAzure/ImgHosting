// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@3.0.4/images/funny.ico");
        document.title = '(๑°ㅁ°๑)!!404啦~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@3.0.4/images/favicon.ico");
        document.title = '୧(๑•̀⌄•́๑)૭✧噫Get啦~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
