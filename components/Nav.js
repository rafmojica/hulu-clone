import requests from "../utilities/requests";

function Nav() {
  return (
    <nav>
      <div className="flex">
        {Object.entries(requests).map(([key, { title, url }]) => {
          <h2
            key={key}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>;
          console.log(title)
        })}
      </div>
    </nav>
  );
}

export default Nav;
