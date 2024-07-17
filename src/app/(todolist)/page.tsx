'use client'

import DropDownMenu from "./components/DropDownMenu";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import NotesList from "./components/NotesList";
import SearchInput from "./components/SearchInput";

export default function App() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (

    <main className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="w-full min-h-screen flex justify-center items-start pt-[40px] bg-background">
        <div className="w-full max-w-[750px]">
          <div className="w-full flex flex-col justify-start items-center">

            <h1 className="text-text text-[26px]">TODO LIST</h1>

            <div className="w-full mt-[18px] flex flex-row justify-between">
              <SearchInput />
              <DropDownMenu />
              <ThemeToggleButton />
            </div>

            <NotesList />

          </div>
        </div>
      </div>
    </main>
  );
}


