const CACHE_EXPIRY = 12 * 60 * 60 * 1000; // 12灏忔椂缂撳瓨  
const VERIFY_API = 'https://verify.ioska.cn/verify';

// 缂撳瓨楠岃瘉鍑芥暟 (淇鐗�)  
function checkCacheValid() {  
    try {  
        const cache = JSON.parse(localStorage.getItem('captchaValidation') || '{}');  
        return cache.timestamp && Date.now() < cache.timestamp + CACHE_EXPIRY;  
    } catch {  
        return false;  
    }  
}

// 鍚堝苟鍚庣殑DOMContentLoaded浜嬩欢  
document.addEventListener("DOMContentLoaded", function() {  
    if (!checkCacheValid()) {  
        promptPassword("success", "璇疯緭鍏ラ獙璇佺爜浠ョ户缁闂�");  
    }  
});

// 缁熶竴楠岃瘉鍑芥暟 (澧炲己閿欒澶勭悊)  
function validateCaptcha(captcha) {  
    const xhr = new XMLHttpRequest();  
    xhr.open("POST", VERIFY_API, true);  
    xhr.setRequestHeader("Content-Type", "application/json");  
    xhr.timeout = 5000;

    xhr.onload = function() {  
        if (xhr.status !== 200) {  
            handleError(`HTTP閿欒: ${xhr.status}`);  
            return;  
        }

        try {  
            const response = JSON.parse(xhr.responseText);  
            if (response.code === 200) {  
                localStorage.setItem('captchaValidation', JSON.stringify({  
                    timestamp: Date.now(),  
                    expires: CACHE_EXPIRY  
                }));  
                welcomeUser();  
            } else {  
                handleError(response.msg || "楠岃瘉鐮侀敊璇�");  
            }  
        } catch (e) {  
            handleError("鍝嶅簲瑙ｆ瀽澶辫触");  
        }  
    };

    xhr.onerror = () => handleError("缃戠粶杩炴帴澶辫触");  
    xhr.ontimeout = () => handleError("璇锋眰瓒呮椂");  
    xhr.send(JSON.stringify({ code: captcha }));  
}

// 閿欒澶勭悊缁熶竴鏂规硶  
function handleError(msg) {  
    swal("閿欒", msg, "error").then(() => {  
        promptPassword("error", "璇烽噸鏂拌緭鍏ラ獙璇佺爜");  
    });  
}

// 澧炲己鐨勮緭鍏ラ獙璇佸脊绐�  
function promptPassword(icon, title) {  
    swal({  
        title: title,  
        text: "璇风‘璁ゆ偍宸茶幏鍙栨纭殑楠岃瘉鐮併€傝鐐瑰嚮涓嬫柟鎸夐挳鍏虫敞鎴戜滑鐨勫井淇″叕浼楀彿浠ヨ幏鍙栭獙璇佺爜銆�",  
        closeOnClickOutside: false,  
        icon: icon,  
        buttons: {  
            confirm: { text: "纭鎻愪氦", value: "confirm" },  
            getCode: { text: "寰俊鍏紬鍙�", value: "get_code" }  
        },  
        content: {  
            element: "input",  
            attributes: {  
                placeholder: "璇疯緭鍏�6浣嶆暟瀛楅獙璇佺爜",  
                type: "number",  
                pattern: "\\d{6}",  
                maxlength: 6,  
                style: "width:100%;padding:10px;border-radius:4px;"  
            }  
        }  
    }).then(value => {  
        if (value === null) { // 澶勭悊寮圭獥鍏抽棴  
            promptPassword("warning", "璇峰畬鎴愰獙璇佷互缁х画璁块棶");  
        } else if (value === "get_code") {  
            showWeChatCode();  
        } else if (!/^\d{6}$/.test(value)) {  
            promptPassword("warning", "璇疯緭鍏�6浣嶆湁鏁堟暟瀛�");  
        } else {  
            validateCaptcha(value);  
        }  
    });  
}

// 寰俊鍏紬鍙峰脊绐楋紙淇濇寔鍘熷姛鑳斤級  
function showWeChatCode() {  
    swal({  
        title: "鍏虫敞寰俊鍏紬鍙疯幏鍙栭獙璇佺爜",  
        text: "璇锋壂鎻忎互涓嬩簩缁寸爜鍏虫敞鎴戜滑鐨勫井淇″叕浼楀彿浠ヨ幏鍙栭獙璇佺爜銆�",  
        icon: "info",  
        buttons: { confirm: { text: "杩斿洖杈撳叆", value: true } },  
        content: {  
            element: "img",  
            attributes: {  
                src: "https://www.ioska.cn/halo_IMG_0710.png",  
                style: "width:100%;height:auto;border-radius:4px;"  
            }  
        }  
    }).then(() => promptPassword("info", "璇疯緭鍏ラ獙璇佺爜"));  
}

// 绠€鍖栫殑娆㈣繋鎻愮ず  
function welcomeUser() {  
    swal({ title: "楠岃瘉鎴愬姛!", icon: "success", buttons: false, timer: 1000 });  
}

// 鍩虹闃叉姢鎺柦锛堜繚鎸佸師鍔熻兘锛�  
window.addEventListener('contextmenu', e => e.preventDefault());  
window.addEventListener('selectstart', e => e.preventDefault());  
document.addEventListener('keydown', e => {  
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key.toUpperCase()))) {  
        e.preventDefault();  
    }  
});  
