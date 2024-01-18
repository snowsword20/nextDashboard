/*
 * @Author: snowsword20 zuiyuanjuli1566@163.com
 * @Date: 2024-01-18 10:05:00
 * @LastEditors: snowsword20 zuiyuanjuli1566@163.com
 * @LastEditTime: 2024-01-18 10:05:06
 * @FilePath: \NextJSe:\TechPro\nextjs-dashboard\app\ui\acme-logo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}