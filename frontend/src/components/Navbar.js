
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  {name: "Register", to:""},
  // {name: "Signup", to:"/signup"},
  { name: "Home", to: "/home" },
  { name: "Menu", to: "/menu" },
  { name: "Reservations", to: "/reservations" },
  
];

export default function Example() {
  return (
    <Disclosure as="nav" className="shadow-2xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 font-medium">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) => {
                          return (
                            "rounded-md px-3 py-2 text-sm" +
                            (isActive
                              ? "font-bold underline underline-offset-8"
                              : "hover:underline underline-offset-8")
                          );
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink to={item.to} className="font-medium">
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={({ isActive }) => {
                      return (
                        "block rounded-md px-3 py-2 text-base" +
                        (isActive
                          ? "font-bold underline underline-offset-2"
                          : "")
                      );
                    }}
                  >
                    {item.name}
                  </Disclosure.Button>
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
