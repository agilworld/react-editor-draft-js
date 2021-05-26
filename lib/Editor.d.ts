import { ComponentType } from "react";
import "@draft-js-plugins/alignment/lib/plugin.css";
import "@draft-js-plugins/undo/lib/plugin.css";
import "@draft-js-plugins/focus/lib/plugin.css";
import "@draft-js-plugins/anchor/lib/plugin.css";
import "@draft-js-plugins/inline-toolbar/lib/plugin.css";
import "@draft-js-plugins/static-toolbar/lib/plugin.css";
export interface EditorJSProps {
    active?: boolean;
    plugins: any[];
    style: any;
}
declare type EditorDraftJsType = ComponentType<EditorJSProps>;
declare const _default: EditorDraftJsType;
export default _default;
