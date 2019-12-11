/**
 * Lazy Load de css
 * @param src
 * @returns {Promise<void>}
 */
export default function loadStyle(src) {
    return new Promise(function(resolve, reject) {
        let style = document.createElement("link");
        style.rel = "stylesheet";
        style.type = "text/css";
        style.href = src;
        style.onload = resolve;
        style.onerror = reject;
        document.head.appendChild(style);
    });
}