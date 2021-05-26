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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const draft_js_1 = require("draft-js");
const editor_1 = __importStar(require("@draft-js-plugins/editor"));
const static_toolbar_1 = __importStar(require("@draft-js-plugins/static-toolbar"));
const inline_toolbar_1 = __importDefault(require("@draft-js-plugins/inline-toolbar"));
const buttons_1 = require("@draft-js-plugins/buttons");
const linkify_1 = __importDefault(require("@draft-js-plugins/linkify"));
const undo_1 = __importDefault(require("@draft-js-plugins/undo"));
const image_1 = __importDefault(require("@draft-js-plugins/image"));
const alignment_1 = __importDefault(require("@draft-js-plugins/alignment"));
const focus_1 = __importDefault(require("@draft-js-plugins/focus"));
const anchor_1 = __importDefault(require("@draft-js-plugins/anchor"));
const drag_n_drop_1 = __importDefault(require("@draft-js-plugins/drag-n-drop"));
const HeadlinesButtons_1 = __importDefault(require("./utils/HeadlinesButtons"));
const styled_components_1 = __importDefault(require("styled-components"));
// Load css
require("@draft-js-plugins/alignment/lib/plugin.css");
require("@draft-js-plugins/undo/lib/plugin.css");
require("@draft-js-plugins/focus/lib/plugin.css");
require("@draft-js-plugins/anchor/lib/plugin.css");
require("@draft-js-plugins/inline-toolbar/lib/plugin.css");
require("@draft-js-plugins/static-toolbar/lib/plugin.css");
// Draft js plugins
const linkPlugin = anchor_1.default();
const linkifyPlugin = linkify_1.default();
const inlineToolbarPlugin = inline_toolbar_1.default();
const toolbarPlugin = static_toolbar_1.default();
const { InlineToolbar } = inlineToolbarPlugin;
const { Toolbar } = toolbarPlugin;
const undoPlugin = undo_1.default();
const focusPlugin = focus_1.default();
const alignmentPlugin = alignment_1.default();
const blockDndPlugin = drag_n_drop_1.default();
const { AlignmentTool } = alignmentPlugin;
const { LinkButton } = linkPlugin;
const decorator = editor_1.composeDecorators(alignmentPlugin.decorator, focusPlugin.decorator, blockDndPlugin.decorator);
const imagePlugin = image_1.default({ decorator, theme: {
        image: 'img-wrapper'
    } });
const plugins = [
    toolbarPlugin,
    inlineToolbarPlugin,
    linkifyPlugin,
    linkPlugin,
    focusPlugin,
    alignmentPlugin,
    imagePlugin,
    undoPlugin,
    blockDndPlugin
];
const EditorWrapper = styled_components_1.default.div `
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: text;
  width:700px;
  margin:30px auto;
  position: relative;
  border-radius: 2px;
  font-size: 18px;
  margin-bottom: 2em;
  box-shadow: inset 0px 1px 8px -3px #ABABAB;
  background: #fefefe;
  min-height: 500px;
`;
const EditorBlock = styled_components_1.default.div `
  padding: 14px;
`;
function createEditorJS({ style }) {
    return function EditorJS(props) {
        const editor = react_1.useRef();
        const [editorState, setEditorState] = react_1.useState(draft_js_1.EditorState.createEmpty());
        const onChange = (state) => {
            setEditorState(state);
            //this.props.onFinishChange(state)
        };
        const onBlur = () => {
        };
        const onFocus = () => {
            editor.current.focus();
        };
        const toolbarComponents = (externalProps) => {
            console.log(externalProps);
            return react_1.default.createElement("div", { style: { zIndex: 2000, margin: 8 } },
                react_1.default.createElement(buttons_1.BoldButton, Object.assign({}, externalProps)),
                react_1.default.createElement(buttons_1.ItalicButton, Object.assign({}, externalProps)),
                react_1.default.createElement(buttons_1.UnderlineButton, Object.assign({}, externalProps)),
                react_1.default.createElement(buttons_1.CodeButton, Object.assign({}, externalProps)),
                react_1.default.createElement(static_toolbar_1.Separator, Object.assign({}, externalProps)),
                react_1.default.createElement(HeadlinesButtons_1.default, Object.assign({}, externalProps)),
                react_1.default.createElement(buttons_1.UnorderedListButton, Object.assign({}, externalProps)),
                react_1.default.createElement(buttons_1.OrderedListButton, Object.assign({}, externalProps)),
                react_1.default.createElement(buttons_1.BlockquoteButton, Object.assign({}, externalProps)),
                react_1.default.createElement(buttons_1.CodeBlockButton, Object.assign({}, externalProps)),
                react_1.default.createElement(LinkButton, Object.assign({}, externalProps)));
        };
        return (react_1.default.createElement(EditorWrapper, { onBlur: onBlur, onClick: onFocus },
            react_1.default.createElement(Toolbar, null, toolbarComponents),
            react_1.default.createElement(EditorBlock, null,
                react_1.default.createElement(editor_1.default, { editorState: editorState, onChange: onChange, plugins: plugins, ref: (element) => editor.current = element })),
            react_1.default.createElement(InlineToolbar, null, toolbarComponents)));
    };
}
exports.default = createEditorJS({ style: { width: "100%" } });
