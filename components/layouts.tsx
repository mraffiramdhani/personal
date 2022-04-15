import Link from 'next/link';
import { useRouter } from 'next/router';
import Foundation from 'react-native-vector-icons/Foundation';

const menuItems = [
  {
    href: '/',
    title: 'Home',
    icon: 'home',
    IconFontFace: Foundation,
  },
  {
    href: '/alternate',
    title: 'Alternate',
    icon: 'page',
    IconFontFace: Foundation,
  },
];

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-row">
      <aside className="absolute p-3 -translate-x-full lg:w-72 z-30 flex h-full max-h-screen min-h-screen flex-none transform flex-col overflow-y-auto border-r border-gray-800 pb-10 transition duration-200 ease-in-out sm:pb-0 lg:relative lg:z-auto lg:translate-x-0 bg-zinc-900 2xl:w-72">
        <div className="top-0 z-10 flex flex-col justify-center px-3 py-2">
          <span className="text-white transform-gpu text-sm font-bold space-x-3 cursor-default">
            Raffi Ramdhani
          </span>
        </div>
        <ul className="pt-2 space-y-1">
          {menuItems.map((v) => {
            const { IconFontFace, href, icon, title } = v;
            return (
              <li key={title}>
                <Link href={href}>
                  <a
                    className={`flex items-center p-2 text-base font-normal rounded-lg text-white ${
                      router.asPath === href
                        ? 'bg-gray-700'
                        : 'hover:bg-gray-500'
                    }`}
                  >
                    <IconFontFace name={icon} size={16} color="#fff" />
                    <span className="ml-3 text-xs">{title}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="flex flex-1">
        <div className="flex w-full bg-dots">{children}</div>
      </main>
    </div>
  );
}
