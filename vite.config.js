import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
    root: "src",
    server: {
        port: 3000,
        strictPort: true,
    },
    build: {
        // eslint-disable-next-line no-undef
        outDir: path.join(__dirname, "dist"),
        emptyOutDir: true,
    },
    plugins: [react()],
})
