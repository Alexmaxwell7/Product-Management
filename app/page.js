"use client";
import { useEffect } from "react";
import useProductStore from "./store/useProductStore";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import CategoryDropdown from "./components/CategoryDropdown";
import Loader from "./components/Loader";
import {
  Popover
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function HomePage() {
  const { fetchProducts, fetchCategories, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);


  return (
    <div className="container mx-auto p-4">
      <Popover
        as="header"
        className="bg-white shadow-sm data-[open]:fixed data-[open]:inset-0 data-[open]:z-40 data-[open]:overflow-y-auto lg:static lg:overflow-y-visible data-[open]:lg:static data-[open]:lg:overflow-y-visible"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
              <div className="flex shrink-0 items-center">
                <p className="text-pink-500 font-semibold text-lg">MOBOOM</p>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="grid w-full grid-cols-1">
                  <input
                    name="search"
                    type="search"
                    placeholder="Search"
                    className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4  text-gray-400 font-medium gap-x-4">
              <p>Store</p>
              <p>Account</p>
              <p>Wishlist</p>
              <p className="text-black font-medium">Basket</p>
            </div>
          </div>
        </div>
      </Popover>
      <div className="overflow-hidden rounded-lg  shadow bg-yellow-900">
        <div className="px-4 py-5 sm:p-6">
          <p className="text-white font-semibold">Lorem Ipsum</p>
          <p className="text-gray-400 mt-2">
            Flash sales begins from June
            <span className="text-white font-semibold ml-2">Read More</span>
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4 mt-4">Product Store</h1>

      <SearchBar />
      <CategoryDropdown />

      {loading ? <Loader /> : <ProductList />}
    </div>
  );
}
