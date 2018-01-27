import typescript from "rollup-plugin-typescript2";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import { minify } from "uglify-es";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "dist/index.es6.js",
      format: "es",
      sourcemap: true
    },
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true
    }
  ],
  external: ["react", "react-dom", "@storybook/react"],

  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    typescript({
      // tsconfig: "../../tsconfig.json",
      // useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: "./dist"
        }
      }
    }),
    uglify({}, minify)
  ]
};
