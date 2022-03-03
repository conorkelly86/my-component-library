import React, { ReactElement, useState } from "react";
import gitlab from "./gitlab.svg";
import github from "./github.svg";
import twitter from "./twitter.svg";
import discord from "./discord.svg";
import linkedin from "./linkedin.svg";

interface MyLinksProps {}

function MyLinks({}: MyLinksProps): ReactElement {
  return (
    <>
      <div className="flex justify-center text-[36px] m-8 text-center">
        Where can you find me?
      </div>
      <div className="flex justify-center flex-wrap">
        <a href="https://gitlab.com/conye9980">
          <img
            src={gitlab}
            alt="git"
            className="flex h-12 w-12 mr-6 to-blue-500"
          />
        </a>
        <a href="https://www.twitter.com/conorkellydev">
          <img
            src={twitter}
            alt="twitter"
            className="flex h-12 w-12 mr-6 to-blue-500"
          />
        </a>
        <a href="https://discordapp.com/users/Conye#1085">
          <img
            src={discord}
            alt="discord"
            className="flex h-12 w-12 mr-6 to-blue-500"
          />
        </a>
        <a href="https://github.com/conye9980">
          <img
            src={github}
            alt="github"
            className="flex h-12 w-12 mr-6 to-blue-500"
          />
        </a>
        <a href="https://ie.linkedin.com/in/conor-kelly-a5758371">
          <img
            src={linkedin}
            alt="linkedin"
            className="flex h-12 w-12 mr-6 to-blue-500"
          />
        </a>
      </div>
    </>
  );
}
export default MyLinks;
