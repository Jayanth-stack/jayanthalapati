import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { socialMedia } from "@/data";
import MagicButton from "@/Components/ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full section-spacing pb-10 relative" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt=""
          width={1920}
          height={640}
          className="w-full h-full opacity-40"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="section-heading text-center max-w-[20ch]">
          Building reliable software for <span className="text-purple">AI and platform engineering</span>
        </h2>
        <p className="body-text text-white-200 md:mt-8 my-4 text-center max-w-[62ch]">
          Open to senior backend and platform roles. Typical response time is under 24 hours for role and project inquiries.
        </p>
        <p className="caption-text text-white-100 text-center">Based in the US and available for remote collaboration.</p>
        <a href="mailto:jayanthalapati@gmail.com">
          <MagicButton
            title="Start a conversation"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="bg-black-100"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light text-white-100">
          Copyright © {new Date().getFullYear()} Jayanth Alapati
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open profile ${info.id}`}
              className="w-11 h-11 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-xl border border-white/15 transition-colors hover:bg-white/10"
            >
              <Image src={info.img} alt="" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
