import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type webpack from 'webpack';

export function buildCssLoaders (isDev: boolean): webpack.RuleSetRule {
  return {
    test: /\.s[ac]ss$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }

        }
      },
      'sass-loader'
    ]
  };
}
