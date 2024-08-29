// Loon Script: Modify CSP Headers
// This script modifies Content-Security-Policy headers for specific Google services.

let headers = $request.headers;
let csp = headers['Content-Security-Policy'] || headers['content-security-policy'];

if (csp) {
    csp = csp.replace(/googleapis\.com/g, 'gapis.geekzu.org');
    csp = csp.replace(/recaptcha\.google\.com/g, 'recaptcha.net');
    csp = csp.replace(/google\.com/g, 'recaptcha.net');
    csp = csp.replace(/gstatic\.com/g, '*.gstatic.cn');
    $done({ headers: { ...headers, 'Content-Security-Policy': csp } });
} else {
    $done({});
}
