import svgPaths from "./svg-ak0hgsnp9i";

function Component1() {
  return (
    <div className="absolute contents inset-[26.88%_28.92%_26.88%_28.43%]" data-name="4">
      <div className="absolute inset-[26.88%_28.92%_26.88%_28.43%]" data-name="1200px-Fox_Business_Logo (Traced)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.0557 29.6817">
          <path clipRule="evenodd" d={svgPaths.p13102800} fill="var(--fill-0, white)" fillRule="evenodd" id="1200px-Fox_Business_Logo (Traced)" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[64.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Component1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Component3">
      <Icon />
    </div>
  );
}