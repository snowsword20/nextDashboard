/*
 * @Author: snowsword20 zuiyuanjuli1566@163.com
 * @Date: 2024-01-18 00:46:20
 * @LastEditors: snowsword20 zuiyuanjuli1566@163.com
 * @LastEditTime: 2024-01-18 17:01:01
 * @FilePath: \NextJSe:\TechPro\nextjs-dashboard\app\layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import '/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    )
}