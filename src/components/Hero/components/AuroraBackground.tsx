export const AuroraBackground = () => (
  <div className='absolute inset-0 overflow-hidden pointer-events-none'>
    <div className='aurora-1 absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600' />
    <div className='aurora-2 absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-700' />
    <div className='aurora-3 absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-600' />
    <div className='aurora-4 absolute top-1/2 right-1/4 w-[250px] h-[250px] rounded-full bg-blue-400' />
  </div>
);
