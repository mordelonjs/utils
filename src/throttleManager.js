/**
 * Manager para suprimir concurrencia de evento
 * @param type
 * @param name
 * @param obj
 * @returns {{throttle: *, release: *}}
 */
export default function throttleManager(type, name, obj) {
    obj = obj || window;
    const interval = 200;
    let then = Date.now();
    let running = false;
    let choke = function(ev) {
        let now = Date.now();
        let delta = now - then;
        if (running || delta < interval) {
            return;
        }
        running = true;
        requestAnimationFrame(function() {
            obj.dispatchEvent(new CustomEvent(name, {
                detail: ev
            }));
            then = now - delta % interval;
            running = false;
        });
    };
    let throttle = function() {
        obj.addEventListener(type, choke);
    };
    let release = function() {
        obj.removeEventListener(type, choke);
    };
    return {
        throttle: throttle,
        release: release
    };
}