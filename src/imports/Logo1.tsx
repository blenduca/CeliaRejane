import svgPaths from "./svg-alw7f3pov8";
import { imgGroup, imgGroup1 } from "./svg-dykpp";

function Group1() {
  return (
    <div className="absolute inset-[0.37%_-0.01%_0.01%_47.08%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.5608 48.0348">
        <g id="Group">
          <path d={svgPaths.p1ed4e700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p23eb2700} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3d553680} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p35d6df80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p28667500} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p650b80} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p443df00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p19e5ba80} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1f85cb80} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1cb3a880} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.pfb316f0} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p1ea63e40} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p14023700} fill="var(--fill-0, white)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[-57.74%_41.98%_-57.67%_-14.34%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[21.018px_27.844px] mask-size-[60.709px_48.137px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.032 103.872">
        <g id="Group">
          <path d={svgPaths.p1fe34480} fill="url(#paint0_linear_1_392)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_392" x1="83.477" x2="19.577" y1="-1.11253" y2="109.566">
            <stop stopColor="#C09639" />
            <stop offset="0.07" stopColor="#FFDA5D" />
            <stop offset="0.25" stopColor="#B5852B" />
            <stop offset="0.32" stopColor="#C09639" />
            <stop offset="0.48" stopColor="#F1EFAD" />
            <stop offset="0.67" stopColor="#C09639" />
            <stop offset="0.92" stopColor="#F1EFAD" />
            <stop offset="1" stopColor="#C09639" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_58.57%_0.17%_0]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[72.79%_62.44%_-5.73%_27.02%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.332px_2.932px] mask-size-[6.691px_10.01px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4524 15.8843">
        <g id="Group">
          <path d={svgPaths.p3940a800} fill="url(#paint0_linear_1_386)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_386" x1="-2669.12" x2="-2733.02" y1="4644.64" y2="4755.31">
            <stop stopColor="#C09639" />
            <stop offset="0.07" stopColor="#FFDA5D" />
            <stop offset="0.25" stopColor="#B5852B" />
            <stop offset="0.32" stopColor="#C09639" />
            <stop offset="0.48" stopColor="#F1EFAD" />
            <stop offset="0.67" stopColor="#C09639" />
            <stop offset="0.92" stopColor="#F1EFAD" />
            <stop offset="1" stopColor="#C09639" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[78.87%_65.46%_0.37%_29.97%]" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_-0.01%_0.01%_0]" data-name="Group">
      <Group1 />
      <ClipPathGroup />
      <ClipPathGroup1 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[0_-0.01%_0.01%_0]" data-name="Layer 1">
      <Group />
    </div>
  );
}

export default function Logo() {
  return (
    <div className="relative size-full" data-name="logo 1">
      <Layer />
    </div>
  );
}