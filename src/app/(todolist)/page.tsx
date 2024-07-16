import { Input } from "@/components/ui/input"
import DropDownMenu from "./components/DropDownMenu";
import ThemeToggleButton from "./components/ThemeToggleButton";

export default function Home() {
  return (
    <main className="">
      <div className="w-full flex justify-center items-start pt-[40px] bg-background">
        <div className="w-full max-w-[750px]">
          <div className="w-full flex flex-col justify-start items-center">
            <h1 className="text-[#252525] dark:text-[#F7F7F7] text-[26px] text-">TODO LIST</h1>

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


