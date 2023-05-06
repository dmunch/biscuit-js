const path = require('path');
const webpack = require("webpack");
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/demo/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.cjs?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }, {
        test: /\.ttf$/,
        use: ['file-loader']
    }
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: [],
      features: [/*
        "!accessibilityHelp",
        "!bracketMatching",
        "!caretOperations",
        "!clipboard",
        "!codeAction",
        "!codelens",
        "!colorDetector",
        "!comment",
        "!contextmenu",
        "!cursorUndo",
        "!dnd",
        "!folding",
        "!fontZoom",
        "!format",
        "!gotoError",
        "!gotoLine",
        "!gotoSymbol",
        "!hover",
        "!iPadShowKeyboard",
        "!inPlaceReplace",
        "!inspectTokens",
        "!linesOperations",
        "!links",
        "!multicursor",
        "!parameterHints",
        "!quickCommand",
        "!quickOutline",
        "!referenceSearch",
        "!rename",
        "!smartSelect",
        "!snippets",
        "!suggest",
        "!toggleHighContrast",
        "!toggleTabFocusMode",
        "!transpose",
        "!wordHighlighter",
        "!wordOperations",
        "!wordPartOperations",*/
      ]
    }),
    new CopyPlugin({
        patterns: [
            {from: 'src/demo/index.html', to: ''}
        ]
    }),
    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    extensionAlias: {
      ".js": [".ts", ".js"]
    },
    fallback: { crypto: false }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
  experiments: {
    topLevelAwait: true
  },
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()]
	}
};