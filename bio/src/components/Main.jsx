import street from "../assets/images/street.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStackOverflow,
} from "react-icons/fa";

function Main() {
  return (
    <div id="main">
      <img
        src={street}
        className="w-full h-screen object-cover object-left scale-x-[-1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Tochukwu Collins
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Programmer",
                2000,
                "Writer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
                fontWeight: "bold",
              }}
            />
          </h2>
          <div>
            <h3>
              <a
                className="active text-blue-700 text-[1.5rem]"
                href="mailto:tochukwu_shewdcollins@yahoo.com"
              >
                tochukwu_shewdcollins@yahoo.com
              </a>
              <p className="text-[1.5rem] tracking-normal">+234-706-942-6058</p>
            </h3>
          </div>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://twitter.com/Coltec057" target="blank">
              <FaTwitter
                className="cursor-pointer motion-safe:hover:-translate-x-2 motion-safe:transition"
                size={20}
              />
            </a>

            <a href="https://web.facebook.com/?_rdc=1&_rdr" target="blank">
              <FaFacebookF
                className="cursor-pointer motion-safe:hover:-translate-x-2 motion-safe:transition"
                size={20}
              />
            </a>

            <a href="https://www.instagram.com/coltec057/" target="blank">
              <FaInstagram
                className="cursor-pointer motion-safe:hover:-translate-x-2 motion-safe:transition"
                size={20}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/collins-tochukwu-a279a4166/"
              target="blank"
            >
              <FaLinkedinIn
                className="cursor-pointer motion-safe:hover:-translate-x-2 motion-safe:transition"
                size={20}
              />
            </a>

            <a
              href="https://stackoverflow.com/users/21428592/colley"
              target="blank"
            >
              <FaStackOverflow
                className="cursor-pointer motion-safe:hover:-translate-x-2 motion-safe:transition"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
