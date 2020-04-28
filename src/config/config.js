const href = window.location.href;

let baseUrl = "https://mock.yonyoucloud.com/mock/6119";
if (/(\.test\.)/.test(href)) {
    baseUrl = 'https://mock.yonyoucloud.com/mock/6119';
} else if (/localhost|\.dev\.|((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/.test(href)) {
    baseUrl = 'https://mock.yonyoucloud.com/mock/6119';
} else {
    baseUrl = 'https://mock.yonyoucloud.com/mock/6119';
};

export default baseUrl;