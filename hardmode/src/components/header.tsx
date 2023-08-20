import { signOut, useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Up from "~/animations/up";
import { Button, Link } from "~/ui";
import { toast } from "sonner";
import { ClientRoute } from "~/utils/client-router";
import { useScrollPosition } from "~/hooks/useScrollPosition";
import { Fragment } from 'react'
const navigation = [
  { name: 'Wiki', href: '/wiki', current: false },
  { name: 'Pravidlá', href: '', current: false },
  { name: 'Členovia', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]


import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
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

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()
  
  return (
    <>
    <Disclosure as="nav" className={classNames(scrollPosition > 0 ? 'bg-gray-800 transition-all fixed z-50' : ' max-[650px]:bg-gray-800 ', "z-50 fixed top-0 transition-all w-full " )}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                <a href="/">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/Hardmode-logo.png"
                    alt="Logo"
                  />
                </div>
                </a>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {session.status !== "authenticated" && (
        <div className="flex items-center space-x-3">
              <Link href="auth" className="account">
                <img src="https://api.enchant.cz/head/64/MHF_Steve" />
                <div className="nick">Přihlásit se</div></Link>
            </div>
        )}

                {/* Profile dropdown */}
                        {session.status === "authenticated" && (
        <>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full  bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-9 w-9 rounded-full"
                        src="https://api.enchant.cz/head/64/MHF_Steve"
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/dashboard"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => signOut()}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                          >
                            Sign out
                          </a>
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
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
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
  
    {/* <header className="fixed top-0 z-50 block w-full bg-neutral-900/80 py-4 px-5 font-medium text-gray-200">
      <Up>
      <div className="flex items-center justify-around">
   
        <Link href="/" underline={false}>
          <div className="flex items-center space-x-3 transition-all duration-100 hover:text-white">
          
            <Image
              src="/Hardmode-logo.png"
              width={40}
              height={40}
              alt="Project Hackathon Logo"
            />
            <p className="hidden md:block">Project Hackathon</p>
            </div>
            </Link>

            <p className="hidden md:block">Pravidlá</p>
            <p className="hidden md:block">Wiki</p>
            <p className="hidden md:block">Členovia</p>





            {session.status === "authenticated" && (
            <Link href="/formlist">
            <p className="hidden md:block">Members</p>
            </Link>
            )}
          


        {session.status !== "authenticated" && (
        <div className="flex items-center space-x-3">
              <Link href="auth" className="account">
                <img src="https://api.enchant.cz/head/64/MHF_Steve" />
                <div className="nick">Přihlásit se</div></Link>
            </div>
        )}
        {session.status === "authenticated" && (
        <>
            <div className="flex items-center space-x-3">
                <Up delay={0.2}>
                  <div className="flex items-center space-x-3 ">
                  <img src="https://api.enchant.cz/head/64/MHF_Steve" className="rounded-full h-9" />
                    <span className="text-gray-400">|</span>
                    <Button onClick={() => signOut()}>Sign out</Button>
                  </div>
                </Up>
              </div>
              </>
           )}
</div>
</Up>
      </header> */}
      </>
  );
};

export default Header;