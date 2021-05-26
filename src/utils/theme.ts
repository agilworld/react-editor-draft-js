import { css } from "@linaria/core"
import { DraftJsButtonTheme } from '@draft-js-plugins/buttons';

// Write your styles in `css` tag
export const ToolbarTheme = css`
  width:90%;
  border:1px solid #eee;
  height:300px;
`;

export const ActiveTheme = css`
  border:1px solid #eee;
`;
export const theme:DraftJsButtonTheme = {
    active:ActiveTheme,
    button:ActiveTheme,
    buttonWrapper:ActiveTheme
}