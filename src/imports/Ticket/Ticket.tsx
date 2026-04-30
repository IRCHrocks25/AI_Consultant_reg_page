import imgBonus141 from "./34a208af9a6de7524d2b90ee111fc70a7a9f63ea.png";
import imgGermany1 from "./c5daa9cf5b364f6f5e78feb459ce365470336eab.png";

function Group2() {
  return (
    <div className="absolute contents left-0 top-[298px]">
      <div className="absolute bg-white h-[826px] left-0 top-[298px] w-[2553px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-63.37%] contents left-[calc(50%+96.03px)] top-[-37.9%]" style={{ containerType: "size" }}>
      <div className="-translate-x-1/2 absolute bottom-[-63.37%] flex items-center justify-center left-[calc(50%+96.02px)] top-[-37.9%] w-[3388.659px]" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(9.49648cqw,-68.5133cqh)] rotate-[-164.54deg] skew-x-[-5.56deg] w-[hypot(90.5035cqw,31.4867cqh)]">
          <div className="opacity-50 relative size-full" data-name="Bonus (14) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBonus141} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[-63.37%] flex items-center justify-center left-[calc(50%+96.02px)] top-[-37.9%] w-[3388.659px]" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(9.49648cqw,-68.5133cqh)] rotate-[-164.54deg] skew-x-[-5.56deg] w-[hypot(90.5035cqw,31.4867cqh)]">
          <div className="bg-gradient-to-t from-[#0e000f] from-[29.07%] opacity-50 size-full to-[rgba(109,0,117,0)]" data-name="Bonus (14) 2" />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return <div className="absolute contents h-[1113.512px] left-[804.46px] top-[347.02px] w-[1593.175px]" />;
}

function Group1() {
  return (
    <div className="absolute contents h-[3214.837px] left-[-564.96px] top-[-767.99px] w-[4091.249px]">
      <div className="-translate-x-1/2 absolute bottom-[-82.87%] flex items-center justify-center left-[calc(50%+204.17px)] top-[-57.4%] w-[3814.082px]" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(10.379cqw,-70.6019cqh)] rotate-[-164.54deg] skew-x-[-5.56deg] w-[hypot(89.621cqw,29.3981cqh)]">
          <div className="relative size-full" data-name="Bonus (14) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBonus141} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[-82.87%] flex items-center justify-center left-[calc(50%+204.17px)] top-[-57.4%] w-[3814.082px]" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(10.379cqw,-70.6019cqh)] rotate-[-164.54deg] skew-x-[-5.56deg] w-[hypot(89.621cqw,29.3981cqh)]">
          <div className="bg-gradient-to-t from-[#0e000f] from-[29.07%] size-full to-[rgba(109,0,117,0)]" data-name="Bonus (14) 2" />
        </div>
      </div>
      <Group />
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[-143.55px]">
      <div className="-translate-x-1/2 absolute h-[1481.471px] left-1/2 opacity-67 top-[-143.55px] w-[2553px]" data-name="Germany 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgGermany1} />
          <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.2)] inset-0 to-[rgba(0,0,0,0.2)]" />
        </div>
      </div>
    </div>
  );
}

export default function Ticket() {
  return (
    <div className="bg-white relative size-full" data-name="ticket">
      <Group2 />
      <Group3 />
      <Group1 />
      <Group4 />
    </div>
  );
}