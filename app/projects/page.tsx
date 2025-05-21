"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Link,
} from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { useState } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import { GithubIcon } from "@/components/icons";
import { title } from "@/components/primitives";
export default function ProjectsPage() {
  let [isOpen, setIsOpen] = useState(false);
  let [serviceTitle, setServiceTitle] = useState("Blank");
  let [serviceInfo, setServiceInfo] = useState(<p />);
  let [carouselItems, setCarouselItems] = useState([""]);

  function open(index: number) {
    setIsOpen(true);
    setServiceTitle(messages[index].name);
    setServiceInfo(messages[index].text);
    setCarouselItems(messages[index].images);
  }

  function renderImage(link: string, idx: number) {
    if (link.includes("mp4")) {
      return (
        <CCarouselItem key={idx}>
          <video controls>
            {" "}
            <source src={link} type="video/mp4" /> Your browser does not support
            the video tag.
          </video>
        </CCarouselItem>
      );
    } else {
      return (
        <CCarouselItem key={idx}>
          <CImage
            alt={`slide ${idx}`}
            className="d-block w-100"
            src={link}
          />{" "}
        </CCarouselItem>
      );
    }
  }

  function close() {
    setIsOpen(false);
  }
  const messages = [
    {
      name: "JotJunction",
      text: (
        <div>
          <p>
            Have you ever written a note to a friend in class? JotJunction
            combines the worlds of social media and simple sketching to bring
            you a new and innovative social platform with one catch: Every
            message is a "jot".
          </p>
          <br />
          <p>
            {" "}
            Users can post, reply, comment, and create profile pictures.
            However, all of them must be "jots", or drawings made in a program
            similar to MS Paint. You can upvote your friends' work that you
            enjoy, and the most popular "jots" will be featured by JotJunction
            moderators.
          </p>{" "}
          <br />
          <b>
            While JotJunction has now shut down, a rewrite of the site is being
            done, and more progress will be shared at a later date.
          </b>
        </div>
      ),
      images: [
        "/carousel/jotjunction/1.png",
        "/carousel/jotjunction/2.png",
        "/carousel/jotjunction/3.png",
        "/carousel/jotjunction/4.jpg",
        "/carousel/jotjunction/5.png",
      ],
    },
    {
      name: "Notica",
      text: (
        <div>
          <p>
            Notica is a full scale reverse engineering of the{" "}
            <Link
              isExternal
              className="text-small"
              href="https://audicagame.com/"
            >
              Harmonix
            </Link>{" "}
            project{" "}
            <Link
              isExternal
              className="text-small"
              href="https://www.harmonixmusic.com/"
            >
              Audica
            </Link>
            's leaderboard servers, acting as a server emulator that restores
            the game's original online functionality.
          </p>
          <br />{" "}
          <p>
            Since the closure of the original leaderboard servers, Harmonix
            remains adamant that the game will no longer receive support in
            terms of online or offline content. Because of this position,{" "}
            <b>
              Notica is currently the only way to play Audica online for the
              foreseeable future.
            </b>{" "}
          </p>
          <br />
          <p>
            To get started, join the Audica Modding Group{" "}
            <Link
              isExternal
              className="text-small"
              href="https://discord.gg/cakQUt5"
            >
              Discord Server
            </Link>{" "}
            to receive the latest versions of the mod. While this project
            remains closed source at this time, documentation and source code
            are available{" "}
            <Link className="text-small" href="/contact">
              upon request
            </Link>
            .
          </p>
        </div>
      ),
      images: [
        "/carousel/notica/1.jpg",
        "/carousel/notica/2.png",
        "/carousel/notica/3.png",
      ],
    },
    {
      name: "theShop",
      text: (
        <div>
          <p>
            theShop is a partially complete reverse engineering of the{" "}
            <Link
              isExternal
              className="text-small"
              href="https://www.nintendo.com/en-gb/Hardware/Nintendo-3DS-Family/Download-Content/Nintendo-eShop/Nintendo-eShop-904671.html"
            >
              Nintendo 3DS eShop
            </Link>{" "}
            API. Currently, both downloading and browsing applications has been
            fully implemented, however some functionality remains undocumented.
          </p>
          <br />
          <p>
            Unforunately, I am not able to provide a public release, service, or
            codebase of this project. However, source code and documentation can
            be made accessible privately{" "}
            <Link className="text-small" href="/contact">
              upon request
            </Link>
            .{" "}
          </p>
        </div>
      ),
      images: ["/carousel/theshop/1.png", "/carousel/theshop/2.jpg"],
    },
    {
      name: "Fox Frenzy",
      text: (
        <div>
          <p>
            Fox Frenzy is a 2-4 player online party game in which players take
            control of foxes who try to hold onto a chicken until their time
            runs out. It is a competitive game with a king-of-the-hill style of
            gameplay. Made in 1 and 1/2 weeks, Fox Frenzy was a collaborative
            effort between 5 team members for CMU's NHSGA program.
          </p>
          <br />
          <p>
            Specifically, my responsibilities covered client-server
            interactions, along with all of the networking code present in the
            game. Learning Unity and networking with{" "}
            <Link
              isExternal
              className="text-sm"
              href="https://mirror-networking.com/"
            >
              Mirror
            </Link>{" "}
            was a fun challenge and taught me the intricacies of game
            development and OOP with C#.
          </p>
          <br />
          <p>
            Fox Frenzy is available for download{" "}
            <Link
              isExternal
              className="text-sm"
              href="https://qbish.itch.io/fox-frenzy"
            >
              here
            </Link>{" "}
            and is fully operable. Because the game was a group effort between
            multiple parties,{" "}
            <b>no source code or documentation is available by request.</b>
          </p>
        </div>
      ),
      images: [
        "/carousel/foxfrenzy/Trailer.mp4",
        "/carousel/foxfrenzy/Gameplay.mp4",
      ],
    },
  ];

  return (
    <div className="">
      <Transition as={React.Fragment} show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-2xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium text-white"
                  >
                    {serviceTitle}
                  </DialogTitle>
                  <div className="mt-2 text-sm/6 text-white/50">
                    {serviceInfo}

                    <CCarousel
                      controls
                      indicators
                      className="m-6"
                      interval={false}
                    >
                      {carouselItems
                        .filter(Boolean)
                        .map((image, idx) => renderImage(image, idx))}
                    </CCarousel>
                  </div>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 hover:bg-gray-600"
                      onClick={close}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className={`${isOpen ? "blur-sm" : ""} p-4 rounded`}>
        <h1 className={title()}>Projects</h1>
        <h2 className="text-default-400 m-4">Here's what I've been up to...</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Card className="max-w-[300px]">
            <CardHeader className="justify-center gap-x-3">
              <Avatar isBordered size="md" src="/logos/jotjunction.webp" />
              <h1 className="font-bold">JotJunction</h1>
            </CardHeader>
            <CardBody className="">
              <h6 className="text-small text-default-600 text-wrap text-center">
                Have you ever written a note to a friend in class? JotJunction
                combines the worlds of social media and simple sketching to
                bring you a new and innovative social platform with one catch:
                Every message is drawn.
              </h6>
            </CardBody>
            <CardFooter className="flex flex-col gap-y-2 items-center justify-center">
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                onClick={() => open(0)}
              >
                Learn More!
              </Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader className="justify-center gap-x-3">
              <Avatar isBordered size="md" src="/logos/foxfrenzy.png" />
              <h1 className="font-bold">Fox Frenzy</h1>
            </CardHeader>
            <CardBody className="">
              <h6 className="text-small text-default-600 text-wrap text-center">
                Fox Frenzy is a 2-4 player online party game in which players
                take control of foxes who try to hold onto a chicken until their
                time runs out. It is a competitive game with a king-of-the-hill
                style of gameplay. Made in 1 and 1/2 weeks, Fox Frenzy was a
                collaborative effort between 5 team members for CMU's NHSGA
                program.
              </h6>
            </CardBody>
            <CardFooter className="flex flex-col gap-y-2 items-center justify-center">
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                onClick={() => open(3)}
              >
                Learn More!
              </Link>
            </CardFooter>
          </Card>

          <Card className="max-w-[300px]">
            <CardHeader className="justify-center gap-x-3">
              <Avatar isBordered size="md" src="/logos/audica.jpg" />
              <h1 className="font-bold">Notica</h1>
            </CardHeader>
            <CardBody className="gap-y-1">
              <h6 className="text-small text-default-600 text-wrap text-center">
                Notica is a full scale reverse engineering of the{" "}
                <Link
                  isExternal
                  className="text-small"
                  href="https://audicagame.com/"
                >
                  Harmonix
                </Link>{" "}
                project{" "}
                <Link
                  isExternal
                  className="text-small"
                  href="https://www.harmonixmusic.com/"
                >
                  Audica
                </Link>
                's leaderboard servers, acting as a server emulator that
                restores the game's original online functionality.
              </h6>
              <h6 className="text-xs text-default-300">
                * Notica is not associated with Harmonix or the Audica team and
                remains a separate passion project.
              </h6>
            </CardBody>
            <CardFooter className="flex flex-col gap-y-2 items-center justify-center">
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                onClick={() => open(1)}
              >
                Learn More!
              </Link>
            </CardFooter>
          </Card>

          <Card className="max-w-[300px]">
            <CardHeader className="justify-center gap-x-3">
              <Avatar isBordered size="md" src="/logos/eshop.webp" />
              <h1 className="font-bold">theShop</h1>
            </CardHeader>
            <CardBody className="gap-y-1">
              <h6 className="text-small text-default-600 text-wrap text-center">
                theShop is a partially complete reverse engineering of the{" "}
                <Link
                  isExternal
                  className="text-small"
                  href="https://www.nintendo.com/en-gb/Hardware/Nintendo-3DS-Family/Download-Content/Nintendo-eShop/Nintendo-eShop-904671.html"
                >
                  Nintendo 3DS eShop
                </Link>{" "}
                API. Currently, both downloading and browsing applications has
                been fully implemented, however some functionality remains
                undocumented.
              </h6>
              <h6 className="text-xs text-default-300">
                * theShop is not associated with Nintendo. I do not support
                piracy or the circumvention of Nintendo security measures.
              </h6>
            </CardBody>
            <CardFooter className="flex flex-col gap-y-2 items-center justify-center">
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                onClick={() => open(2)}
              >
                Learn More!
              </Link>
            </CardFooter>
          </Card>

          <Card className="max-w-[300px]">
            <CardHeader className="justify-center gap-x-3">
              <Avatar isBordered size="md" src="/profile.jpg" />
              <h1 className="font-bold">Small Projects</h1>
            </CardHeader>
            <CardBody className="gap-y-1">
              <h6 className="text-small text-default-600 text-wrap text-center">
                While I give spotlight to many of my largest projects, I still
                have many smaller ones that I've completed over the years. I'd
                love for you to check them out over at my GitHub! I put tons of
                effort into smaller apps, websites, and services that are all
                free and open source.
              </h6>
            </CardBody>
            <CardFooter className="flex flex-col gap-y-2 items-center justify-center">
              <Link
                isExternal
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href={"https://github.com/JustAHippo"}
              >
                <GithubIcon />
                <h6>Check it out!</h6>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
