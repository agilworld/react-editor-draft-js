"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const buttons_1 = require("@draft-js-plugins/buttons");
function HeadlinesButton(props) {
    const onMouseDown = (event) => event.preventDefault();
    const onClick = () => props.onOverrideContent(HeadlinesPicker);
    return (react_1.default.createElement("div", { onMouseDown: onMouseDown, className: 'bi09khh' },
        react_1.default.createElement("button", { onClick: onClick, className: 'bc4rxid' }, "H")));
}
exports.default = HeadlinesButton;
const HeadlinesPicker = (props) => {
    react_1.useEffect(() => {
        setTimeout(() => {
            window.addEventListener('click', onWindowClick);
        });
        return () => {
            window.removeEventListener('click', onWindowClick);
        };
    }, []);
    const onWindowClick = () => props.onOverrideContent(undefined);
    const buttons = [buttons_1.HeadlineOneButton, buttons_1.HeadlineTwoButton, buttons_1.HeadlineThreeButton];
    return (react_1.default.createElement("div", null, buttons.map((Button, i) => (
    // eslint-disable-next-line react/no-array-index-key
    react_1.default.createElement(Button, Object.assign({ key: i }, props))))));
};
