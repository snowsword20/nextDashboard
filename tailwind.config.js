/*
 * @Author: snowsword20 zuiyuanjuli1566@163.com
 * @Date: 2024-01-18 01:36:13
 * @LastEditors: snowsword20 zuiyuanjuli1566@163.com
 * @LastEditTime: 2024-01-18 01:36:48
 * @FilePath: \NextJSe:\TechPro\nextjs-dashboard\tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}