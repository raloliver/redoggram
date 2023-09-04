/*
 * File: vite.config.js
 * Project: redoggram
 * Created: Monday, September 4th 2023, 6:09:13 am
 * Last Modified: Monday, September 4th 2023, 6:25:02 am
 * Copyright © 2023 AMDE Agência
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
});
