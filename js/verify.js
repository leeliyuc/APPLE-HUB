const CACHE_EXPIRY = 12 * 60 * 60 * 1000; // 12小时缓存
const VERIFY_API = 'https://verify.ioska.cn/verify';

// 缓存校验函数（修正版）
function checkCacheValid() {  
    try {  
        const cache = JSON.parse(localStorage.getItem('captchaValidation') || '{}');  
        return cache.timestamp && Date.now() < cache.timestamp + CACHE_EXPIRY;  
    } catch {  
        return false;  
    }  
}

// 合并后的DOMContentLoaded事件
document.addEventListener("DOMContentLoaded", function() {  
    if (!checkCacheValid()) {  
        promptPassword("success", "请输入验证码以继续访问");  
    }  
});

// 统一校验函数（增加错误处理）
function validateCaptcha(captcha) {  
    const xhr = new XMLHttpRequest();  
    xhr.open("POST", VERIFY_API, true);  
    xhr.setRequestHeader("Content-Type", "application/json");  
    xhr.timeout = 5000;

    xhr.onload = function() {  
        if (xhr.status !== 200) {  
            handleError(`HTTP错误: ${xhr.status}`);  
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
                handleError(response.msg || "验证码错误");  
            }  
        } catch (e) {  
            handleError("响应解析失败");  
        }  
    };

    xhr.onerror = () => handleError("网络连接失败");  
    xhr.ontimeout = () => handleError("请求超时");  
    xhr.send(JSON.stringify({ code: captcha }));  
}

// 错误处理统一方法
function handleError(msg) {  
    swal("错误", msg, "error").then(() => {  
        promptPassword("error", "请重新输入验证码");  
    });  
}

// 增强的输入验证码弹窗
function promptPassword(icon, title) {  
    swal({  
        title: title,  
        text: "请确保您已获取正确的验证码。请点击下方按钮关注我们的微信公众号以获取验证码。",  
        closeOnClickOutside: false,  
        icon: icon,  
        buttons: {  
            confirm: { text: "确认提交", value: "confirm" },  
            getCode: { text: "微信公众号", value: "get_code" }  
        },  
        content: {  
            element: "input",  
            attributes: {  
                placeholder: "请输入6位数字验证码",  
                type: "number",  
                pattern: "\\d{6}",  
                maxlength: 6,  
                style: "width:100%;padding:10px;border-radius:4px;"  
            }  
        }  
    }).then(value => {  
        if (value === null) { // 处理弹窗关闭  
            promptPassword("warning", "请完成验证以继续访问");  
        } else if (value === "get_code") {  
            showWeChatCode();  
        } else if (!/^\d{6}$/.test(value)) {  
            promptPassword("warning", "请输入6位有效数字");  
        } else {  
            validateCaptcha(value);  
        }  
    });  
}

// 微信公众号弹窗（保持原功能）
function showWeChatCode() {  
    swal({  
        title: "关注微信公众号获取验证码",  
        text: "请扫描下方二维码关注我们的微信公众号以获取验证码。",  
        icon: "info",  
        buttons: { confirm: { text: "返回输入", value: true } },  
        content: {  
            element: "img",  
            attributes: {  
                src: "https://baiyaczt-1314207616.cos.ap-shanghai.myqcloud.com/halo%2FIMG_0710.BMP",  
                style: "width:100%;height:auto;border-radius:4px;"  
            }  
        }  
    }).then(() => promptPassword("info", "请输入验证码"));  
}

// 简化的欢迎提示
function welcomeUser() {  
    swal({ title: "验证成功!", icon: "success", buttons: false, timer: 1000 });  
}

// 基础防护措施（保持原功能）
window.addEventListener('contextmenu', e => e.preventDefault());  
window.addEventListener('selectstart', e => e.preventDefault());  
document.addEventListener('keydown', e => {  
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key.toUpperCase()))) {  
        e.preventDefault();  
    }  
});
