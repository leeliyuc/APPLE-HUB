/**************************************
@Name：PikPak自动邀请
@QQ交流群：737203772
@我的博客：https://www.cccz.online
@Date：2024-7-26 01:23:56

📃使用说明
------------------------------------------
请在【免责声明】下方填写你的PikPak邀请码！！！

2024.7.26 增加了对谷歌验证的破解

PikPak修改版: 解除IP地址检测，添加下方软件源下载安装🔥

哈士奇软件源：https://yuan.iosipa.online/appstore

脚本兼容：QuantumultX

⚠️【只写了QuantumultX的脚本任务通知，其它环境运行成功后没有任务消息】
====================================
本项目仅仅只是在UP主[纸鸢花的花语]所公开的源码基础上进行简单修改
====================================
⚠️【免责声明】
------------------------------------------
1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。
******************************************/

// 下方填写你的邀请码
const incode = "83681782";

// 通知脚本中的通知方法
function notify(title, subtitle, message) {
    if (typeof $notify !== "undefined") {
        // Quantumult X 环境
        $notify(title, subtitle, message);
    } else if (typeof console !== "undefined") {
        // Node.js 环境
        console.log(`==============📣系统通知📣==============\n${title}\n${subtitle}\n${message}`);
    }
}

// 大古，成为光吧🪄
/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', fpmlw = '__0x11b675',  __0x11b675=['QEbCk8O0Ig==','SUgURMOM','54iQ5p2y5Yy8776twq0m5LyY5a255p6q5b6p56qQ772v6L2B6Kyb5pWA5oye5oqr5Lma55qT5bW05L2J','ZXoIcsOk','CTXCpcO7wqk=','wrg3wrbDosOI','wr/DnMOEbsK7','wrzCnMKf','BjXDgw==','WMOTwoDCkMKBZ+mAheismeWktui2tQ==','wpzCo8ODM2s=','JGtFA3g=','NMKzZ8OaHg==','wrPCnhbDvsOSw4jCuMOjMsOiecKcOX3DvMKNKcK8E8Kyw5wOw7kfw47ClGlEwpvCoEfCisOwwoEGFg==','dHjDqiQ=','w6TCtkc=','KlkvwobCkyt8fTYUwq7CpCoyw6rCt8KWB8O5wpHCtDnDgCs1L2rCkcOUwqwbD2wew7nCgMKVw5NewrPCvg7CtBluUcKGHsKbXWDDtw/CpVsmJsOnwrA3bsKNw5zDjV/CgcKfwovClsO7wq3Cn8ODw5HDo8KAwrIQCsK2FlnDpsK7wrRVAsKXwq9+VsK8w6U8w7PCtQbDg8K1woXCqcKeTErDnlEUfBjDksK8cQbDgcKgWsKqSSoww7wnwoUFw5fDs8OvwoAEwo3Dl0FDMWzCoEQ=','w6xZwrrDh8KHaEPDvhPCl8Kmw5gVKMKdw4FAw5NJwoTCjFzCsMKBw4bCqsOMaX5QBsOHw7rCtlnCng==','w5wiw4nCpcK9cMO3wrchPsOswpbCuTjCvMKUCXfDvQ==','wojCpcOuSsKzU8OKTMOa','wojCmmXDnkM=','SQjCqMKF','w4ktw6ZVQ8O76IaD5YiE6YCF6K2u','VsKJwrwIw5c=','P8KgXcOBDQ==','worDg8ORfMKvwrpzw5HCtcOZ','CsOHXcKU','54ua5oOC56CFwo5o','eMOBQsKVBW/CjsOmwpfDtQ==','5ZCN5bmwNSQ=','w5REwqXDp8KVOemDrOispuWlg+i3lw==','MMOMwpo=','UlnDhsKtOw==','wpDCt0B0Ig==','5Y2T55am6Za16K+m','w4M4wpbCicKB','YMOkwr0KYg==','wozDmcOUbcK8wqBew5vCtQ==','wqp8NcOqAGgcURXDk3Rmw7rDsA==','5Yir6Zm154iu5pyy5Y2y772HNcKo5L6+5a2E5p2v5byO56uu','54qI5pyj5Y6o776PC3bkva/lr6XmnanlvoXnqo7vvYTovZTorLLml63mj4Tmi6rku5bnm77lt5jkvbM=','wpnCr2U=','AkQh','wqXCsV1lEg==','wq/ClcO4wq5u','w5M/LMOQw5A=','bljDjQ==','PMKDwqzDk8KR'];(function(_0x1e32c6,_0x500704){var _0x5c79dc=function(_0x1ff010){while(--_0x1ff010){_0x1e32c6['push'](_0x1e32c6['shift']());}};_0x5c79dc(++_0x500704);}(__0x11b675,0x15d));var _0x5b8f=function(_0x4f4cc6,_0x16b25d){_0x4f4cc6=_0x4f4cc6-0x0;var _0x48053e=__0x11b675[_0x4f4cc6];if(_0x5b8f['initialized']===undefined){(function(){var _0x250499=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3484cc='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x250499['atob']||(_0x250499['atob']=function(_0xaa8c17){var _0x64afbe=String(_0xaa8c17)['replace'](/=+$/,'');for(var _0xadcc21=0x0,_0xf0f951,_0x58b5fd,_0xe4268f=0x0,_0xdecfe7='';_0x58b5fd=_0x64afbe['charAt'](_0xe4268f++);~_0x58b5fd&&(_0xf0f951=_0xadcc21%0x4?_0xf0f951*0x40+_0x58b5fd:_0x58b5fd,_0xadcc21++%0x4)?_0xdecfe7+=String['fromCharCode'](0xff&_0xf0f951>>(-0x2*_0xadcc21&0x6)):0x0){_0x58b5fd=_0x3484cc['indexOf'](_0x58b5fd);}return _0xdecfe7;});}());var _0x2c9018=function(_0xd7beaf,_0x5c0353){var _0x585b7c=[],_0x1d94b8=0x0,_0x4aee71,_0x61460e='',_0x50146c='';_0xd7beaf=atob(_0xd7beaf);for(var _0x17e91d=0x0,_0x381ce7=_0xd7beaf['length'];_0x17e91d<_0x381ce7;_0x17e91d++){_0x50146c+='%'+('00'+_0xd7beaf['charCodeAt'](_0x17e91d)['toString'](0x10))['slice'](-0x2);}_0xd7beaf=decodeURIComponent(_0x50146c);for(var _0xb352b1=0x0;_0xb352b1<0x100;_0xb352b1++){_0x585b7c[_0xb352b1]=_0xb352b1;}for(_0xb352b1=0x0;_0xb352b1<0x100;_0xb352b1++){_0x1d94b8=(_0x1d94b8+_0x585b7c[_0xb352b1]+_0x5c0353['charCodeAt'](_0xb352b1%_0x5c0353['length']))%0x100;_0x4aee71=_0x585b7c[_0xb352b1];_0x585b7c[_0xb352b1]=_0x585b7c[_0x1d94b8];_0x585b7c[_0x1d94b8]=_0x4aee71;}_0xb352b1=0x0;_0x1d94b8=0x0;for(var _0x3e849a=0x0;_0x3e849a<_0xd7beaf['length'];_0x3e849a++){_0xb352b1=(_0xb352b1+0x1)%0x100;_0x1d94b8=(_0x1d94b8+_0x585b7c[_0xb352b1])%0x100;_0x4aee71=_0x585b7c[_0xb352b1];_0x585b7c[_0xb352b1]=_0x585b7c[_0x1d94b8];_0x585b7c[_0x1d94b8]=_0x4aee71;_0x61460e+=String['fromCharCode'](_0xd7beaf['charCodeAt'](_0x3e849a)^_0x585b7c[(_0x585b7c[_0xb352b1]+_0x585b7c[_0x1d94b8])%0x100]);}return _0x61460e;};_0x5b8f['rc4']=_0x2c9018;_0x5b8f['data']={};_0x5b8f['initialized']=!![];}var _0x2b62b5=_0x5b8f['data'][_0x4f4cc6];if(_0x2b62b5===undefined){if(_0x5b8f['once']===undefined){_0x5b8f['once']=!![];}_0x48053e=_0x5b8f['rc4'](_0x48053e,_0x16b25d);_0x5b8f['data'][_0x4f4cc6]=_0x48053e;}else{_0x48053e=_0x2b62b5;}return _0x48053e;};const url=_0x5b8f('0x0','F4KP');const method=_0x5b8f('0x1','Gqku');const headers={'Origin':'https://aerjieta.zhiyin.workers.dev','Accept-Encoding':'gzip,\x20deflate,\x20br','Connection':'keep-alive','Content-Type':'application/json','Accept':_0x5b8f('0x2','M6ND'),'Host':'aerjieta.zhiyin.workers.dev','User-Agent':_0x5b8f('0x3','n%jV'),'Referer':_0x5b8f('0x4',')Q4O'),'Accept-Language':_0x5b8f('0x5','b4b!')};const body=JSON[_0x5b8f('0x6','PWrK')]({'incode':incode});const myRequest={'url':url,'method':method,'headers':headers,'body':body};$task[_0x5b8f('0x7','2tDv')](myRequest)[_0x5b8f('0x8','ZWtl')](_0xe073f=>{var _0x49541e={'ZVHps':function _0x1d0309(_0x10f7ac,_0x1bbf60){return _0x10f7ac+_0x1bbf60;},'ScYuE':function _0x45cc7a(_0x3bfb35,_0x449297){return _0x3bfb35+_0x449297;},'RbCfg':_0x5b8f('0x9','r)2%')};console['log'](_0x49541e[_0x5b8f('0xa','CVXP')](_0x49541e[_0x5b8f('0xb','T6xl')](_0xe073f[_0x5b8f('0xc','Aw2Y')],'\x0a\x0a'),_0xe073f[_0x5b8f('0xd','YW3Z')]));notify(_0x49541e['RbCfg'],_0x5b8f('0xe','T6xl')+_0xe073f[_0x5b8f('0xf','1DIx')],_0x5b8f('0x10','zBI1')+_0xe073f['body']);$done();},_0x3205f0=>{var _0x2462e3={'PSOpZ':_0x5b8f('0x11',')Q4O'),'RNZia':function _0x1776f5(_0x1027da){return _0x1027da();}};console[_0x5b8f('0x12','!6N%')](_0x3205f0[_0x5b8f('0x13','Nzz]')]);notify(_0x2462e3[_0x5b8f('0x14','zBI1')],_0x5b8f('0x15','5H2M'),_0x3205f0[_0x5b8f('0x16','b4b!')]);_0x2462e3[_0x5b8f('0x17','v&AZ')]($done);});;(function(_0x699589,_0x81ec51,_0x41ad09){var _0x336091={'eURaj':function _0x47e418(_0x487175,_0x4671cb){return _0x487175!==_0x4671cb;},'IiZyG':_0x5b8f('0x18','Aw2Y'),'BYrZI':_0x5b8f('0x19','lSBo'),'Xbxlj':'ert','Fktfa':function _0x650292(_0x348c12,_0x50f4cc){return _0x348c12===_0x50f4cc;},'XdrQI':function _0x28f7d5(_0x17a687,_0x42337a){return _0x17a687+_0x42337a;},'nknla':_0x5b8f('0x1a','Ju6L'),'QknZn':function _0x5eafd8(_0x161220,_0x464362){return _0x161220+_0x464362;},'PcInn':_0x5b8f('0x1b','lSBo'),'khNQc':_0x5b8f('0x1c','zBI1'),'WJUTD':function _0x3ea747(_0x10b8dc,_0x5dc3ec,_0x187957,_0x12b50a){return _0x10b8dc(_0x5dc3ec,_0x187957,_0x12b50a);},'ieHwd':'发生错误','XpcnV':function _0x4e9cf4(_0x2301ff){return _0x2301ff();}};_0x41ad09='al';try{_0x41ad09+=_0x5b8f('0x1d','n%jV');_0x81ec51=encode_version;if(!(_0x336091[_0x5b8f('0x1e','zBI1')](typeof _0x81ec51,_0x336091[_0x5b8f('0x1f','K9WH')])&&_0x81ec51===_0x336091['BYrZI'])){if(_0x336091[_0x5b8f('0x20','cj!f')](_0x5b8f('0x21','In#$'),'oqq')){_0x41ad09='al';try{_0x41ad09+=_0x336091['Xbxlj'];_0x81ec51=encode_version;if(!(typeof _0x81ec51!==_0x336091[_0x5b8f('0x22','R1u%')]&&_0x336091[_0x5b8f('0x23','h9SR')](_0x81ec51,_0x336091[_0x5b8f('0x24','Ju6L')]))){_0x699589[_0x41ad09](_0x336091['XdrQI']('删除',_0x5b8f('0x25','ldEJ')));}}catch(_0x407bc4){_0x699589[_0x41ad09](_0x336091[_0x5b8f('0x26','Ju6L')]);}}else{_0x699589[_0x41ad09](_0x336091[_0x5b8f('0x27','ldEJ')]('删除',_0x336091[_0x5b8f('0x28','Fwq2')]));}}}catch(_0x19663c){if(_0x336091[_0x5b8f('0x29','Aw2Y')](_0x5b8f('0x2a','7M5p'),_0x336091['khNQc'])){console[_0x5b8f('0x2b','Mwtx')](reason['error']);_0x336091['WJUTD'](notify,_0x5b8f('0x2c','YRf5'),_0x336091[_0x5b8f('0x2d','0lM%')],reason[_0x5b8f('0x2e','DjA4')]);_0x336091[_0x5b8f('0x2f','T6xl')]($done);}else{_0x699589[_0x41ad09]('删除版本号，js会定期弹窗');}}}(window));;encode_version = 'jsjiami.com.v5';
