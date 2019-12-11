/**
 * Lazy Load de Scripts
 * @param src
 * @returns {Promise<void>}
 */
export default function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement("script");
        script.async = true;
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}