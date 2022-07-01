"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preprocessor_1 = require("./preprocessor");
const vitePluginIfDef = (userOptions = {}) => {
    let data;
    let filePath;
    let option;
    return {
        name: 'vitePluginIfdefCompile',
        enforce: 'pre',
        configResolved(resolvedConfig) {
            data = resolvedConfig['ifdef-define'];
            option = resolvedConfig['ifdef-option'];
        },
        resolveId(source) {
            filePath = source;
        },
        transform(code, id) {
            let verboseFlag = "verbose";
            let verbose = option[verboseFlag];
            let tripleSlashFlag = "ifdef-triple-slash";
            let tripleSlash = option[tripleSlashFlag];
            let fillWithBlanksFlag = "ifdef-fill-with-blanks";
            let fillWithBlanks = option[fillWithBlanksFlag];
            let uncommentPrefixFlag = "ifdef-uncomment-prefix";
            let uncommentPrefix = option[uncommentPrefixFlag];
            userOptions = data;
            return (0, preprocessor_1.default)(code, userOptions, verbose, tripleSlash, filePath, fillWithBlanks, uncommentPrefix);
        },
    };
};
exports.default = vitePluginIfDef;
