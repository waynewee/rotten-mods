function BookmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="bookmark"
      className="bookmark-solid_svg__svg-inline--fa bookmark-solid_svg__fa-bookmark bookmark-solid_svg__fa-w-12"
      viewBox="0 0 384 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
      />
    </svg>
  );
}

export default BookmarkIcon;