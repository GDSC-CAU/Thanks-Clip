/**
 * @note `tailwindcss` remotion 셋팅, (현재 불필요)
 * @param {Parameters<import("remotion").WebpackOverrideFn>[0]} currentConfiguration
 * @returns {ReturnType<import("remotion").WebpackOverrideFn>}
 */
const tailwindcssWebpackOverride = (currentConfiguration) => {
    return {
        ...currentConfiguration,
        module: {
            ...currentConfiguration.module,
            rules: [
                ...(currentConfiguration.module?.rules
                    ? currentConfiguration.module.rules
                    : []
                ).filter((rule) => {
                    if (rule === "...") {
                        return false
                    }
                    if (rule.test?.toString().includes(".css")) {
                        return false
                    }
                    return true
                }),
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        "postcss-preset-env",
                                        "tailwindcss",
                                        "autoprefixer",
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },
    }
}

export { tailwindcssWebpackOverride }
