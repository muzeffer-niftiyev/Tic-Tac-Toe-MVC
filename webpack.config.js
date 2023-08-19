// Import the 'path' module to work with file paths
const path = require("path");
// Import the 'HtmlWebpackPlugin' to generate an HTML file with correct bundles
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Import the 'MiniCssExtractPlugin' to extract CSS into separate files
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Export the webpack configuration object
module.exports = {
  // Entry point of the application
  entry: "./js/index.js",
  // Output configuration for bundled files
  output: {
    // Resolve the output path to an absolute directory
    path: path.resolve(__dirname, "dist"),
    // The filename of the bundled JavaScript
    filename: "bundle.js",
  },
  // Module rules for processing different file types
  module: {
    rules: [
      {
        // Test for JavaScript files
        test: /\.js$/,
        // Exclude 'node_modules' directory from processing
        exclude: /node_modules/,
        // Use 'babel-loader' for transpiling JavaScript
        use: "babel-loader",
      },
      {
        // Test for Sass/SCSS files
        test: /\.s[ac]ss$/i,
        // Use MiniCssExtractPlugin loader to extract CSS into separate files
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // Load CSS
          "sass-loader", // Convert Sass to CSS
        ],
      },
      {
        // Test for image files
        test: /\.(png|jpe?g|gif|svg)$/i,
        // Use 'file-loader' to handle images
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images", // Output path for images
            },
          },
        ],
      },
    ],
  },
  // Plugins used in the build process
  plugins: [
    // Generate an HTML file with the bundled JavaScript
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    // Extract CSS into a separate file
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  // Development server configuration
  devServer: {
    // Serve content from the 'dist' directory
    static: path.join(__dirname, "dist"),
    // Specify the port for the development server
    port: 8080,
  },
};
