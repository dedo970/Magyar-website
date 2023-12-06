import { signOut, useSession } from "next-auth/react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {  Link } from "~/ui";
import { toast } from "sonner";
import { useScrollPosition } from "~/hooks/useScrollPosition";
import { Fragment } from 'react'
const navigation = [
  { name: 'Wiki', href: '/wiki', current: false },
  { name: 'Pravidlá', href: '/pravidla', current: false },
  { name: 'Členovia', href: '/clenovia', current: false },
]


import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
const Header = () => {
  const session = useSession();
  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()


  return (
    <>
    <Disclosure as="nav" className={classNames(scrollPosition > 0 ? 'headerbg transition-all fixed z-50 headerShadow' : ' max-[650px]:bg-darkGray  ', "z-50 fixed top-0 transition-all w-full py-2  px-10 " )}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="headerbg relative inline-flex items-center justify-center  rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-11 w-auto"
                    src="/Hardmode-logo.png"
                    alt="Logo"
                  />
                </div>
                </Link>
                <div className=" hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white',
                          'rounded-md px-3 py-2 text-lg  font-bold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {session.status !== "authenticated" && (
             
             
             
              <Link href="https://discord.gg/dTa4A7rFGY" className="block px-4 py-2 text-md font-bold text-gray-300 cursor-pointer">
              Discord
              </Link>
              )}


{session.status === "authenticated" && (
<>
                <div className="text-sm font-bold text-gray-300 pr-1">
              0
              </div>

              <span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
</>
)}
                            {session.status !== "authenticated" && (
        <div className="flex items-center space-x-3 font-bold text-gray-300 pr-1">
              <Link href="auth" className="account">
                <Image alt="" src="https://api.enchant.cz/head/64/MHF_Steve" />
                <div className="nick">Prihlásiť sa</div></Link>
            </div>
        )}

                {/* Profile dropdown */}
                      {session.status === "authenticated" && (
        <>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full headerbg text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-9 w-9 rounded-full"
                        src={`https://cravatar.eu/avatar/${session.data?.user?.email}/64.png`}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {/* kkt */}
                    <Menu.Items className="absolute right-0 headerShadow z-10 mt-2 w-48 origin-top-right rounded-md headerbg py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/dashboard"
                            className={classNames(active ? 'text-white' : '', 'block px-4 py-2 text-md font-bold text-gray-300 ')}
                          >
                            Tvoj Profil
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/dashboard"
                            className={classNames(active ? 'text-white' : '', 'block px-4 py-2 text-md font-bold text-gray-300')}
                          >
                            Mapa
                          </Link>
                        )}
                      </Menu.Item>
                      {session?.data.user.role === "Admin" && (
                                            <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/formlists"
                            className={classNames(active ? 'text-white' : '', 'block px-4 py-2 text-md font-bold text-gray-300')}
                          >
                            formlist
                          </Link>
                        )}
                      </Menu.Item>
                      )}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => signOut()}
                            className={classNames(active ? 'text-white' : '', 'block px-4 py-2 text-md font-bold text-gray-300 cursor-pointer')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>

                </Menu>
                                                      </>
                    )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-lg font-bold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
      </>
  );
};

export default Header;