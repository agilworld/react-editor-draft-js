"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = exports.ActiveTheme = exports.ToolbarTheme = void 0;
const core_1 = require("@linaria/core");
// Write your styles in `css` tag
exports.ToolbarTheme = core_1.css `
  width:90%;
  border:1px solid #eee;
  height:300px;
`;
exports.ActiveTheme = core_1.css `
  border:1px solid #eee;
`;
exports.theme = {
    active: exports.ActiveTheme,
    button: exports.ActiveTheme,
    buttonWrapper: exports.ActiveTheme
};
