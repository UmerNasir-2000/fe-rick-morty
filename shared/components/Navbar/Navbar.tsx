import Link from "next/link";
import routes from "../../routes/index";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between p-4 items-center">
      <div className="text-xl font-bold hover:underline">Rick & Morty</div>
      <ul className="flex">
        {routes.map((route) => (
          <li className="p-2" key={route.id}>
            <Link href={route.path}>{route.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
