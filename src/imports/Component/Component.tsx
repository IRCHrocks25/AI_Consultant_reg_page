import svgPaths from "./svg-o719b3wihf";

function Component1() {
  return (
    <div className="absolute contents inset-[17.21%_34.8%_16.13%_34.8%]" data-name="1">
      <div className="absolute inset-[17.21%_34.8%_16.13%_34.8%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.7984 42.7969">
          <path clipRule="evenodd" d={svgPaths.p3d056700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
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
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Component">
      <Icon />
    </div>
  );
}