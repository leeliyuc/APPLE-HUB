// script.js

document.getElementById('invite-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var messageDiv = document.getElementById('response-message');
    var emailInfoDiv = document.getElementById('email-info');
    messageDiv.innerText = '邀请中，请等待10s...';
    emailInfoDiv.style.display = 'none'; // 隐藏邮箱信息
    fetch('/start', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            messageDiv.innerText = '错误: ' + data.error;
        } else {
            messageDiv.innerText = data.message;
            document.getElementById('email').innerText = data.email;
            document.getElementById('password').innerText = data.password;
            emailInfoDiv.style.display = 'block'; // 显示邮箱信息
        }
    })
    .catch(error => {
        messageDiv.innerText = '请求失败: ' + error.message;
    });
});

function updateStock() {
    fetch('https://zizhu.shanyouxiang.com/kucun')
        .then(response => response.json())
        .then(data => {
            document.getElementById('outlook-stock').innerText = '库存数量: ' + data.outlook;
        })
        .catch(error => {
            document.getElementById('outlook-stock').innerText = '库存数量: 加载失败';
        });
}

// 初次加载库存信息
updateStock();

// 每60秒更新一次库存信息
setInterval(updateStock, 60000);
