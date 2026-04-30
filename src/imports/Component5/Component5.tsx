import svgPaths from "./svg-7ptz10g5bm";

function Component1() {
  return (
    <div className="absolute contents inset-[32.26%_21.08%_31.18%_21.08%]" data-name="6">
      <div className="absolute inset-[32.26%_21.08%_31.18%_21.08%]" data-name="CBS_logo (Traced)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.4548 23.4693">
          <path clipRule="evenodd" d={svgPaths.p9760480} fill="var(--fill-0, white)" fillRule="evenodd" id="CBS_logo (Traced)" />
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
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Component5">
      <Icon />
    </div>
  );
}