import "../../assets/css/CssComponents/navbar.css";

export default function Navbar({ links }) {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a>
            <div className="border"></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
