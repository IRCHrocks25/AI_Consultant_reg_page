import svgPaths from "./svg-5mtg8nuw2m";

function Component1() {
  return (
    <div className="absolute contents inset-[34.41%_21.08%]" data-name="2">
      <div className="absolute inset-[34.41%_21.08%]" data-name="Forbes-logo (Traced)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.4552 20.0179">
          <path clipRule="evenodd" d={svgPaths.pe52e880} fill="var(--fill-0, white)" fillRule="evenodd" id="Forbes-logo (Traced)" />
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
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Component1">
      <Icon />
    </div>
  );
}