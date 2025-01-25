const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-[1]">
      <div 
        className="w-full h-full opacity-[0.3] dark:opacity-[0.3]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, currentColor 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0',
          backgroundRepeat: 'repeat',
          color: 'var(--dot-color)',
        }}
      />
    </div>
  );
};

export default GridBackground; 