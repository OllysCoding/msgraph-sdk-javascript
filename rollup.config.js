import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

const config = [
	{
		input: ["lib/es/browser/index.js"],
		output: {
			file: "lib/graph-es-sdk.js",
			format: "es",
			name: "MicrosoftGraph",
		},
		plugins: [resolve(), terser()],
	},
	{
		input: ["lib/es/browser/index.js"],
		output: {
			file: "lib/graph-js-sdk.js",
			format: "iife",
			name: "MicrosoftGraph",
		},
		plugins: [
			resolve(),
			babel({
				runtimeHelpers: true,
				exclude: "node_modules/**",
			}),
			commonjs({ include: "node_modules/**" }),
			terser(),
		],
	},
];

export default config;
