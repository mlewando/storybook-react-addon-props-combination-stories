import typescript from "rollup-plugin-typescript2";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "./src/index.ts",
  output: {
    file: "dist/index.js",
    format: "es",
    sourcemap: true
  },

  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true
    })
  ]
};
