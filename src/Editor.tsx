import React, { ComponentType, useRef, useState } from "react"
import { EditorProps, EditorState } from "draft-js"
import Editor, {composeDecorators, createEditorStateWithText, PluginEditorProps } from '@draft-js-plugins/editor'
import createToolbarPlugin, { Separator } from '@draft-js-plugins/static-toolbar';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';

import {
  ItalicButton,
  BoldButton,
  CodeButton,
  UnderlineButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons';
import createLinkifyPlugin from "@draft-js-plugins/linkify"
import createUndoPlugin from '@draft-js-plugins/undo';
import createImagePlugin from '@draft-js-plugins/image';
import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createFocusPlugin from '@draft-js-plugins/focus';
import createLinkPlugin  from '@draft-js-plugins/anchor'
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop'
import HeadlinesButton from "./utils/HeadlinesButtons"
import styled from "styled-components"

// Load css
import "@draft-js-plugins/alignment/lib/plugin.css"
import "@draft-js-plugins/undo/lib/plugin.css"
import "@draft-js-plugins/focus/lib/plugin.css"
import "@draft-js-plugins/anchor/lib/plugin.css"
import "@draft-js-plugins/inline-toolbar/lib/plugin.css"
import "@draft-js-plugins/static-toolbar/lib/plugin.css"

 // Draft js plugins
const linkPlugin = createLinkPlugin();
const linkifyPlugin = createLinkifyPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin()
const toolbarPlugin = createToolbarPlugin()
const { InlineToolbar } = inlineToolbarPlugin
const { Toolbar } = toolbarPlugin
const undoPlugin = createUndoPlugin();
const focusPlugin = createFocusPlugin();
const alignmentPlugin = createAlignmentPlugin();
const blockDndPlugin = createBlockDndPlugin();

const { AlignmentTool } = alignmentPlugin;
const { LinkButton } = linkPlugin

const decorator = composeDecorators(
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
)

const imagePlugin = createImagePlugin({ decorator, theme:{
  image:'img-wrapper'
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

export interface EditorJSProps {
  active?: boolean;
  plugins: any[];
  style: any;
}

type EditorDraftJsType = ComponentType<EditorJSProps>;

interface CreateBlockEditorJS {
  style: any;
}

const EditorWrapper = styled.div`
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
`
const EditorBlock = styled.div`
  padding: 14px;
`
function createEditorJS({
  style
}:CreateBlockEditorJS):EditorDraftJsType {
  return function EditorJS(props) {
    const editor = useRef<any|undefined>()
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

    const onChange = (state:EditorState) => {
        setEditorState(state)
        //this.props.onFinishChange(state)
    }

    const onBlur = () => {
      
    }

    const onFocus = () => {
      editor.current.focus()
    }

    const toolbarComponents = (externalProps:any) => {
      console.log(externalProps)
      return <div style={{zIndex:2000,margin:8}}>
          <BoldButton {...externalProps} />
          <ItalicButton {...externalProps} />
          <UnderlineButton {...externalProps} />
          <CodeButton {...externalProps} />
          <Separator {...externalProps} />
          <HeadlinesButton {...externalProps} />
          <UnorderedListButton {...externalProps} />
          <OrderedListButton {...externalProps} />
          <BlockquoteButton {...externalProps} />
          <CodeBlockButton {...externalProps} />
          <LinkButton {...externalProps} />
      </div>
    }

    return(
      <EditorWrapper onBlur={onBlur} onClick={onFocus}>
          <Toolbar>
              {toolbarComponents}
          </Toolbar> 
          <EditorBlock>
            <Editor
                editorState={editorState}
                onChange={onChange}
                plugins={plugins}
                ref={(element)=>editor.current=element}
              />
          </EditorBlock>
          <InlineToolbar >
            {toolbarComponents}
          </InlineToolbar>
      </EditorWrapper>
    )
  }
}

export default createEditorJS({style:{width:"100%"}})