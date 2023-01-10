import { Config } from "remotion"
import { webpackOverride } from "./video/webpack-override"

Config.Rendering.setImageFormat("jpeg")
Config.Output.setOverwriteOutput(true)

Config.Bundling.overrideWebpackConfig(webpackOverride)
