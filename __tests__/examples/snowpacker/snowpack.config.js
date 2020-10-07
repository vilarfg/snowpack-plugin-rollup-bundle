const glob = require("glob");
const path = require("path");

const resolve = require('@rollup/plugin-node-resolve').default
const commonjs = require('@rollup/plugin-commonjs')

const mount = {
  src: "/snowpacker",
};

const proxy = {
  /* ... */
};

const plugins = [
  ["@snowpack/plugin-babel"],
  [
    "snowpack-plugin-rollup-bundle",
    {
      emitHtml: true,
      preserveSourceFiles: true,
      entrypoints: "build/snowpacker/entrypoints/**/*.js",
      // extendConfig: (config) => {
      //   return config
      // }
    },
  ],
];

const installOptions = {
  NODE_ENV: true,
  rollup: {
    plugins: [
      commonjs(),
      resolve(),
    ]
  }
};

const alias = {
  /* */
};

const devOptions = {
  out: "build",
  open: "none",
  bundle: true,
};

const buildOptions = {
  clean: true,
};

module.exports = {
  mount,
  alias,
  proxy,
  plugins: plugins,
  installOptions,
  devOptions,
  buildOptions,
};