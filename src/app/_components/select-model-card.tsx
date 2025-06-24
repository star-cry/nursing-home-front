'use client';

import { Fragment } from 'react';

import { useRouter } from 'next/navigation';

import { ArrowRightBold } from '@/components/icon';
import { PATH } from '@/constants/path';
import { cn } from '@/lib/utils';

const SelectModelCard = ({ title, model, modelIcon, modelTextClassName }: SelectModelCardProps) => {
  const router = useRouter();

  const redirectToProtector = () => {
    router.push(PATH.protector);
  };

  return (
    <button className="flex gap-10 justify-center cursor-pointer text-left" onClick={redirectToProtector}>
      <div className="flex flex-col gap-3">
        <div className="typo-bold-31">
          <div>
            {title.split('\\n').map(line => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className={modelTextStyle({ className: modelTextClassName })}>{model}</span>
          <ArrowRightBold className="w-9 h-9" />
        </div>
      </div>
      <div className="bg-white rounded-full">{modelIcon}</div>
    </button>
  );
};

export default SelectModelCard;

interface SelectModelCardProps {
  title: string;
  model: string;
  modelIcon: React.ReactNode;
  modelTextClassName?: string;
}

const modelTextStyle = cn('font-nanum-pen-script-regular !text-60');
