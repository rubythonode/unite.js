let jsdom = require("jsdom").JSDOM;

class JSDom {
    static initialize($config) {
        if($config.required) {
            this.make();
        }
    }

    static make($html = "<body></body>") {
        global.window = (new jsdom($html)).window;
        global.document = window.document;
    }

    static destroy() {
        delete global.window, global.document;
    }
}

module.exports = JSDom;