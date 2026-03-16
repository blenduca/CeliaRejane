import { imgGroup } from "./svg-xhe8i";

function Group() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[41.68px_41.68px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.68 41.68">
        <g id="Group">
          <path d="M41.68 0H0V41.68H41.68V0Z" fill="url(#paint0_linear_1_347)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_347" x1="42.6616" x2="0.9816" y1="19.8536" y2="19.8536">
            <stop stopColor="#CBAE99" />
            <stop offset="0.09" stopColor="#BC9F87" />
            <stop offset="0.3" stopColor="#9D7E62" />
            <stop offset="0.59" stopColor="#FCD9B8" />
            <stop offset="0.65" stopColor="#F4D1B1" />
            <stop offset="0.75" stopColor="#DFBDA0" />
            <stop offset="0.86" stopColor="#BC9D83" />
            <stop offset="0.99" stopColor="#8D705B" />
            <stop offset="1" stopColor="#8A6D59" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 1">
      <ClipPathGroup />
    </div>
  );
}

export default function Bullets() {
  return (
    <div className="relative size-full" data-name="Bullets">
      <Layer />
    </div>
  );
}