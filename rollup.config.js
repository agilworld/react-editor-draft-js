import path from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { existsSync } from 'fs';
import css from "rollup-plugin-import-css";

const input = existsSync('./src/index.ts')
  ? './src/index.ts'
  : './src/index.tsx';
const external = (id) => !id.startsWith('.') && !path.isAbsolute(id);
const extensions = ['.ts', '.js', '.tsx', '.jsx'];
const babelOptions = {
  rootMode: 'upward',
  extensions,
  babelHelpers: 'bundled',
};

const globals = { react: 'React', 'react-dom': 'ReactDOM','styled-components': 'styled'};

export default [
  {
    input,
    output: {
      format: 'cjs',
      file: './lib/index.cjs.js',
      exports: 'named',
    },
    external:Object.keys(globals),
    plugins: [nodeResolve({ extensions }), babel(babelOptions),css()],
  },
  {
    input,
    output: {
      format: 'esm',
      file: './lib/index.esm.js',
    },
    external:Object.keys(globals),
    plugins: [
      nodeResolve({ extensions }),
      css(),
      babel({
        ...babelOptions,
        plugins: [
          [
            'babel-plugin-transform-rename-import',
            {
              replacements: [
                {
                  original: 'lodash',
                  replacement: 'lodash-es',
                },
              ],
            },
          ],
        ],
      }),
    ],
  },
];