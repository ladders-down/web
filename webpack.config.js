const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  if (!env) { env = {}; }

  return {
    mode: !env.production ? 'development' : 'production',
    devtool: 'inline-source-map',
    entry: './src/core/index.tsx',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/core/index.ejs'
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@ladders': path.join(__dirname, 'src/'),
        '@ladders-common-ui': path.join(__dirname, 'src/common-ui/')
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')(),
                  require('css-mqpacker')({ sort: true }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['src/common-ui/sass']
              }
            },
          ],
        }
      ],
    }
  };
}
