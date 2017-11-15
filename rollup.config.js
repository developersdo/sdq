import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'
import { minify } from 'uglify-es'
import pkg from './package.json';

export default [

  // browser-friendly UMD build
  {
    input: 'src/sdq.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
    },
    name: 'sdq',
    plugins: [
      babel(),
      uglify({}, minify),
      filesize(),
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/sdq.js',
    external: ['ms'],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
      babel(),
      uglify({}, minify),
      filesize(),
    ]
  }
];
