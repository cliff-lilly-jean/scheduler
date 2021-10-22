const ClockButton = (title, activeClass, _callBack) => {
 return (
  <div>
   <button className={activeClass} onClick={_callBack}>{title}</button>
  </div>
 );
};

export default ClockButton;
