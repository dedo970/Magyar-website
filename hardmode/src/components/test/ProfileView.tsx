import { Grid, Typography, Avatar } from "@mui/material";
import type { SxProps } from "@mui/material";
import type { UserInfo } from "~/types/hackathon.type";
import Header from "../header";

export default function ProfileView({
  userInfo,
  sx,
}: {
  userInfo: UserInfo;
  sx: SxProps;
}) {
  return (
    <>
    <h1 className="mt-9">Zhrnutie</h1>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-9">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Začneme od začátku. Jakou přezdívku používáš v Minecraftu?
              </th>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 text-right">
              </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {userInfo.firstName} 
              </th>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 text-right">
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white break-normal">
              Hráči jsou na našem Discord serveru, abychom na sebe měli kontakt. Připoj se tam taky a níže napiš, jak se tam jmenuješ.
              (např. Lemon_CZE#1234)
              </th>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 text-right">
              </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {userInfo.lastName} 
              </th>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 text-right">
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white break-normal">
              Dále by nás zajímalo, jak jsi se o našem serveru dozvěděl/a.
              </th>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 text-right">
              </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {userInfo.location} 
              </th>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 text-right">
              </td>
            </tr>
          </tbody>
        </table>
      </div>



      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white break-normal">
              Proč sis vybral zrovna Enchant a co chceš na serveru dělat? Čím víc nás tvá zpráva zaujme, tím větší máš šanci na úspěch.
              </th>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 text-right">
              </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {userInfo.description} 
              </th>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 text-right">
              </td>
            </tr>
          </tbody>
        </table>
      </div>



      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white break-normal">
              Kolik je ti let?
              </th>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 text-right">
              </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {userInfo.team} 
              </th>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 text-right">
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      
      </>
  );
}
