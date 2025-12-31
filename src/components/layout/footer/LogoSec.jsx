import { noBgLogo } from "@/utils/constants";

export default function LogoSec() {
  return (
    <div className="">
      <img className="w-2/5 sm:w-1/3" src={noBgLogo} alt="logo" />
      <p className="text-gray-400 max-w-xs text-3xl pt-8 sm:ps-2">
        Building What’s Next
      </p>
    </div>
  );
}
