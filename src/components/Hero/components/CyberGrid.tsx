export const CyberGrid = () => (
  <div className='absolute inset-0 overflow-hidden pointer-events-none' aria-hidden='true'>
    <div className='absolute -top-40 right-[-10%] w-150 h-150 rounded-full bg-neon-purple/20 blur-[140px]' />
    <div className='absolute top-1/3 left-[-10%] w-112.5 h-112.5 rounded-full bg-neon-cyan/10 blur-[120px]' />
    <div className='absolute inset-x-0 top-[40%] h-px bg-neon-pink/70 shadow-[0_0_30px_8px_rgba(255,42,109,0.35)]' />
    <div className='cyber-grid' />
    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#07050d_100%)]' />
  </div>
);
