import { defineConfig } from "cypress";
import webpackPreprocessor from "@cypress/webpack-preprocessor";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        webpackPreprocessor({
          webpackOptions: {
            resolve: {
              extensions: [".ts"],
            },
            module: {
              rules: [
                {
                  test: /\.ts$/,
                  use: [
                    {
                      loader: "ts-loader",
                      options: { configFile: "cypress/tsconfig.json" },
                    },
                  ],
                },
              ],
            },
          },
        })
      );
    },
  },
});
