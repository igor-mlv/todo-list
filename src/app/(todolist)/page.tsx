'use client'

import { Input } from "@/components/ui/input"
import DropDownMenu from "./components/DropDownMenu";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function App() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (

    <main className={`${isDarkMode ? 'dark' : ''}`}>
      {/* <main> */}
      <div className="w-full flex justify-center items-start pt-[40px] bg-background">
        <div className="w-full max-w-[750px]">
          <div className="w-full flex flex-col justify-start items-center">
            <h1 className="text-text text-[26px]">TODO LIST</h1>

            <div className="w-full mt-[18px] flex flex-row justify-between">
              <Input
                className="text-[16px] w-[595px] h-[38px] pl-2 pr-2"
                type="text"
                placeholder="Search note ..." />

              <DropDownMenu />

              <ThemeToggleButton />

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}


