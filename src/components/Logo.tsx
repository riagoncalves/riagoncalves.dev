import Image from 'next/image';

interface Props {
  size?: number
}

export const Logo: React.FC<Props> = ({ size = 40 }) => (
  <Image
    width={size}
    height={size}
    src='/images/logo-white.svg'
    alt='riagoncalves'
    className='drop-shadow-[0_0_6px_rgba(0,240,255,0.7)]'
  />
);
