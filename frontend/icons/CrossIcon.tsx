function CrossIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M7.778 23.334L23.335 7.778M7.778 7.778l15.557 15.557"
      />
    </svg>
  );
}

export default CrossIcon;