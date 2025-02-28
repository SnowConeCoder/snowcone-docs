import * as React from 'react';
import RootSvg, { RootSvgProps } from 'docs/src/icons/RootSvg';

export default function SvgMuiLogo(props: RootSvgProps) {
  return (
    <RootSvg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={32}
      viewBox="0 0 260 260"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          x1="-29.86"
          y1="131.03"
          x2="128.41"
          y2="222.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffe566" />
          <stop offset="0.29" stopColor="#ffe368" />
          <stop offset="0.29" stopColor="#ffe368" />
          <stop offset="0.29" stopColor="#ffe16a" />
          <stop offset="0.29" stopColor="#ffda6f" />
          <stop offset="0.29" stopColor="#ffcd79" />
          <stop offset="0.29" stopColor="#ffbc87" />
          <stop offset="0.29" stopColor="#ffa59a" />
          <stop offset="0.29" stopColor="#ff89b0" />
          <stop offset="0.29" stopColor="#ff68ca" />
          <stop offset="0.29" stopColor="#f6c" />
          <stop offset="0.48" stopColor="#f6c" />
          <stop offset="0.82" stopColor="#f6c" />
          <stop offset="0.82" stopColor="#e16bd6" />
          <stop offset="0.82" stopColor="#c170e1" />
          <stop offset="0.82" stopColor="#a575ea" />
          <stop offset="0.82" stopColor="#8e79f1" />
          <stop offset="0.82" stopColor="#7d7cf7" />
          <stop offset="0.82" stopColor="#717efb" />
          <stop offset="0.82" stopColor="#6a7ffd" />
          <stop offset="0.82" stopColor="#687ffe" />
          <stop offset="0.82" stopColor="#687ffe" />
          <stop offset="1" stopColor="#667fff" />
        </linearGradient>
      </defs>
      <path
        d="M120.9,242.15l30.43-72.87c9.94-23.81-2.48-53.62-22.35-53.62H68.12c-19.88,0-32.3,29.81-22.36,53.62l30.43,72.87C86.13,266,111,266,120.9,242.15Z"
        fill="#2d3439"
        fillRule="evenodd"
      />
      <path d="M49.46,176.82l-.37-.21Z" fill="url(#a)" />
      <path
        d="M113.7,182.75,185.26,58.81l-21-36.3A45,45,0,0,0,125.31,0H106.49L23.39,143.94l9.41,16.3a44.94,44.94,0,0,0,16.29,16.37l.37.21a45,45,0,0,0,22.32,5.93Z"
        fill="#f6c"
      />
      <path
        d="M71.78,0a45,45,0,0,0-39,22.51L6,68.87a45,45,0,0,0,0,45L23,143.21,105.65,0Z"
        fill="#ffe368"
      />
      <path
        d="M125.31,182.75a45,45,0,0,0,39-22.51l26.76-46.36a45,45,0,0,0,0-45l-5.8-10.06L113.7,182.75Z"
        fill="#667fff"
      />
    </RootSvg>
  );
}
