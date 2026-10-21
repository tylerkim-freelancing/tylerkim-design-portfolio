export default function Icon({ name = 'arrow', size = 20, ...props }) {
  const paths = {
    arrow: <path d="M4 12h16M14 6l6 6-6 6"/>,
    'arrow-up-right': <path d="M6 18 18 6M6 6h12v12"/>,
    back: <path d="M20 12H4m6-6-6 6 6 6"/>,
    desktop: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></>,
    mobile: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>,
    code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>
}
