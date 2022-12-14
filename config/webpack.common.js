const fs = require('fs');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getFiles = (type) => {
  return fs.readdirSync(SRC_PAGES).map((folderName) => {
    return fs.readdirSync(`${SRC_PAGES}/${folderName}`).find((fileName) => fileName.endsWith(`.${type}`));
  });
};

const ROOT_DIR = join(__dirname, '../');
const SRC_DIR = join(ROOT_DIR, 'src');
const SRC_PAGES = join(SRC_DIR, 'pages');
const JS_FILES = getFiles('js');
const PUG_FILES = getFiles('pug');
const FOLDERS = fs.readdirSync(SRC_PAGES);

const getEtries = () => {
  return JS_FILES.map((file) => {
    const [fileName] = file.split('.');
    return `${SRC_PAGES}/${fileName}/${file}`;
  });
};

module.exports = {
  paths: {
    root: ROOT_DIR,
    src: SRC_DIR,
    pages: SRC_PAGES,
    folders: FOLDERS,
    pugs: PUG_FILES,
  },
  getFiles,
  commonConfig: {
    entry: ['@babel/polyfill', ...getEtries()],

    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          exclude: /(node_modules|bower_components)/,
        },
        {
          test: /\.(gif|png|jpe?g|svg|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/img/[name].[contenthash:10][ext]',
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name][ext]',
          },
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },

    performance: {
      hints: false,
    },

    resolve: {
      extensions: ['.js'],
      alias: {
        '@src': SRC_DIR,
        '@utils': join(SRC_DIR, 'utils'),
        '@assets': join(SRC_DIR, 'assets'),
        '@components': join(SRC_DIR, 'components'),
      },
    },

    plugins: [
      new webpack.ProgressPlugin(),
      new Dotenv({
        systemvars: true,
        safe: false,
      }),
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
      }),
      new CopyPlugin({
        patterns: [{ from: join(SRC_DIR, 'assets/img'), to: 'img' }],
      }),
    ],
  },
};
