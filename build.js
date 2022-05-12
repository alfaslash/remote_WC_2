const esbuild = require("esbuild");
const cssModulesPlugin = require("esbuild-css-modules-plugin");

esbuild
	.build({
		entryPoints: ["./src/index.tsx"],
		jsxFactory: 'h',
		jsxFragment: 'Fragment',
		bundle: true,
		outfile: "./public/bundle.js",
		watch: {
			onRebuild(error) {
				if (error) {
					console.error('watch build failed:', error);
				} else {
					console.log('watch build succeeded');
				}
			},
		},
		plugins: [cssModulesPlugin()]
	})
	.then(() => {
		console.log('watching...')
	})
	.catch((e) => console.error(e.message));
