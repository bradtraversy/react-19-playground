const TabButton = ({ children, isActive, onClick }) => {
  if (isActive) {
    return <div className='text-blue-600 font-bold'>{children}</div>;
  }
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};
export default TabButton;
