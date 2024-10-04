const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog 1", href: "/blog-1" },
  { name: "Blog 2", href: "/blog-2" },
];

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between gap-x-6 p-6 lg:px-8"
      >
        <div className="flex items-center gap-x-6 justify-center w-full">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
