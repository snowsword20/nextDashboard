/*
 * @Author: snowsword20 zuiyuanjuli1566@163.com
 * @Date: 2024-01-18 16:52:12
 * @LastEditors: snowsword20 zuiyuanjuli1566@163.com
 * @LastEditTime: 2024-01-18 19:10:08
 * @FilePath: \NextJSe:\TechPro\nextjs-dashboard\app\ui\dashboard\nav-links.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
  
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
      name: 'Invoices',
      href: '/dashboard/invoices',
      icon: DocumentDuplicateIcon,
    },
    { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  ];
  
  export default function NavLinks() {
    const pathname = usePathname();
    console.log(`pathname=${pathname}`);
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
            //   className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  