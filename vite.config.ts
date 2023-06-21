import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(), svgr({ include: "**/**.svg" })],
    /* base: "./",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        "@constants": path.resolve(__dirname, "./src/toolbox/constants/"),
        "@components": path.resolve(__dirname, "./src/components/"),
      },
    }, */
});
