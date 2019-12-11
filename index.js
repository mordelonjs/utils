import loadStyle from "./src/loadStyle";
import loadScript from "./src/loadScript";
import throttleManager from "./src/throttleManager";

const Utils = {
    loadStyle: loadStyle,
    loadScript: loadScript,
    throttleManager: throttleManager,
};

// Cargar Utilidades a Mordelon JS
if (self && self.Mordelon) {
    if (!self.Mordelon.Utils) self.Mordelon.Utils = Utils;
} else if (window && window.Mordelon) {
    if(!window.Mordelon.Utils) window.Mordelon.Utils = Utils;
} else if (Mordelon) {
    if (!Mordelon.Utils) Mordelon.Utils = Utils;
} else {
    //cargar en Navegador
    if (window && !window.Utils) window.Utils = Utils;
    if (self && !self.Utils) self.Utils = Utils;
}

export default Utils;