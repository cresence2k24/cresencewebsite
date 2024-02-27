import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group btn btn-sm inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300">
          Downloads
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white transform group-focus:-rotate-180
        transition duration-150 ease-in-out" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-[#610d83] shadow-xl shadow-black ring-1 ring-white ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href={`${process.env.PUBLIC_URL}/static/media/Main_Poster.png`}
                  target='_blank_'
                  className={classNames(
                    active ? 'bg-gray-200 rounded-lg text-black' : 'text-white',
                    'block px-4 py-2 text-md'
                  )}
                >
                  Main Poster
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href={`${process.env.PUBLIC_URL}/static/media/Brochure.pdf`}
                  target='_blank_'
                  className={classNames(
                    active ? 'bg-gray-200 rounded-lg text-black' : 'text-white',
                    'block px-4 py-2 text-md'
                  )}
                >
                  Brochure
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href={`${process.env.PUBLIC_URL}/static/media/Event_Posters.pdf`}
                  target='_blank_'
                  className={classNames(
                    active ? 'bg-gray-200 rounded-lg text-black' : 'text-white',
                    'block px-4 py-2 text-md'
                  )}
                >
                  Event Posters
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
