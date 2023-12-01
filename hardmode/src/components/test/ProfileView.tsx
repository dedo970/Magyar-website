import { Grid, Typography, Avatar } from "@mui/material";
import type { SxProps } from "@mui/material";
import type { UserInfo } from "~/types/hackathon.type";
import Header from "../header";
import * as Accordion from '@radix-ui/react-accordion';
// import classNameNameNames from 'classNameNamenames';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export default function ProfileView({
  userInfo,
  sx,
}: {
  userInfo: UserInfo;
  sx: SxProps;
}) {
  return (
    <>
    <div className="">
        <h4 className="text-4xl font-bold text-gray-400 tracking-widest uppercase text-center">ZHRNUTIE</h4>
        <div className="space-y-12 px-2 xl:px-16 mt-12">
            <div className="mt-4 flex ">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-blue-600">
                        <span className="text-4xl text-blue-600 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-gray-400">
                        <span className="text-4xl text-gray-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-blue-600 font-bold">Začnime od začiatku. Akú prezývku používaš v Minecrafte?</span>
                    </div>
                    <div className="flex items-center py-2 ">
                        <span className="text-gray-500">{userInfo.firstName} </span>

                    </div>
                </div>
            </div>

            <div className="mt-4 flex">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-blue-600">
                        <span className="text-4xl text-blue-600 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-gray-400">
                        <span className="text-4xl text-gray-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-blue-600 font-bold">  Hráči sú na našom Discorde, aby sme na seba mali kontakt. Pripoj sa tam tiež a nižšie napíš, ako sa tam voláš. (napr. dedulo)</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="text-gray-500">{userInfo.lastName}</span>

                    </div>
                </div>
            </div>

            <div className="mt-4 flex">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-blue-600">
                        <span className="text-4xl text-blue-600 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-gray-400">
                        <span className="text-4xl text-gray-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-blue-600 font-bold">Ďalej by nás zaujímalo, ako si sa o našom servery dozvedel/a.</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="text-gray-500">{userInfo.location}</span>

                    </div>
                </div>
            </div>

            <div className="mt-4 flex">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-blue-600">
                        <span className="text-4xl text-blue-600 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-gray-400">
                        <span className="text-4xl text-gray-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-blue-600 font-bold">      Prečo si si vybral zrovna Magyar a, čo chceš na servery robiť? Čím viac nás tvoja odpoveď zaujme, tým vetšiu máš šancu na úspech.</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="text-gray-500">{userInfo.description}</span>

                    </div>
                </div>
            </div>

            <div className="mt-4 flex">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-blue-600">
                        <span className="text-4xl text-blue-600 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-gray-400">
                        <span className="text-4xl text-gray-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-blue-600 font-bold">Koľko máš rokov?</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="text-gray-500">{userInfo.team}</span>

                    </div>
                </div>
            </div>

            </div>
            </div>
      </>
  );
}
