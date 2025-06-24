import { Separator } from 'radix-ui';

import { Carrot170, InvertCarrot170 } from '@/components/icon';

import SelectModelCard from './select-model-card';

const SelectModel = () => (
  <div className="py-10 px-7.5 flex flex-col justify-between gap-30">
    <div className="typo-bold-38">
      <div>케어플러스에</div>
      <div>오신것을 환영합니다!</div>
    </div>
    <div className="flex flex-col gap-25">
      <SelectModelCard
        model="보호자"
        modelIcon={<Carrot170 />}
        modelTextClassName="text-main"
        title="간병인을\n요청하고 싶다면"
      />
      <Separator.Root className="w-full h-px bg-black" />
      <SelectModelCard
        model="간병인"
        modelIcon={<InvertCarrot170 />}
        modelTextClassName="text-orange"
        title="간병인을\등록하고 싶다면"
      />
    </div>
  </div>
);

export default SelectModel;
