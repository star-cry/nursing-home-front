import { Carrot170Icon, LogoLarge } from '@/components';

const Splash = () => (
  <div className="h-full w-full px-10 flex flex-col justify-between">
    <div className="flex justify-center items-center flex-col mt-14">
      <div className="rounded-full bg-white inline-block mb-6">
        <Carrot170Icon />
      </div>
      <span className="font-nanum-brush-script-regular text-40 mb-9px">도움에 도움을 더하다</span>
      <div className="mb-3px">
        <LogoLarge />
      </div>
      <span className="text-12">CAREGIVERPLATFORM</span>
    </div>
    <div className="w-100 bg-gray-40 flex items-center justify-center h-118.75 px-10">
      <p className="text-black text-center">젊은 여자 간병인이 늙은 여자 환자를 옆에서 안고 있고 멀리 보고 있는 사진</p>
    </div>
  </div>
);

export default Splash;
