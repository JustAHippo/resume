"use client";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Chip,
} from "@heroui/react";

import { HeartFilledIcon, SearchIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <Card className="max-w-[500px]">
          <CardHeader className="justify-start gap-x-5">
            <Avatar isBordered size="lg" src="/profile.jpg" />
            <div className="flex flex-col items-start justify-center gap-y-1">
              <div>
                <h4 className="text-large font-bold leading-none text-default-600">
                  Drowzee
                </h4>
                <h6 className=" text-left text-xs text-default-400">he/they</h6>
              </div>

              <Chip
                className="text-small"
                color="primary"
                radius="sm"
                size="sm"
                variant="shadow"
              >
                <h5 className="text-small tracking-tight text-default-600">
                  Software Developer
                </h5>
              </Chip>
            </div>
          </CardHeader>
          <CardBody>
            <h5 className="text-small text-default-600 text-wrap">
              {" "}
              Hello! I'm a full stack software developer named Drowzee who
              specializes in backend development and API reverse engineering.
              I've been programming since I was 13 and have self taught myself
              many languages over the years. Thanks for stopping by!
            </h5>
          </CardBody>
          <CardFooter className="flex flex-col gap-y-2 items-center justify-center">
            <h5 className="text-small text-default-400">Proficient in</h5>
            <div className="flex items-center justify-center gap-x-2">
              <Avatar size="sm" src="/logos/go.png" />
              <Avatar size="sm" src="/logos/python.png" />
              <Avatar size="sm" src="/logos/node.webp" />
              <Avatar size="sm" src="/logos/csharp.png" />
              <Avatar size="sm" src="/logos/java.webp" />
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"/projects"}
        >
          <SearchIcon />
          See My Projects
        </Link>
        <Link
          className={buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "shadow",
          })}
          href={"/about"}
        >
          <HeartFilledIcon />
          Read About Me
        </Link>
      </div>
    </section>
  );
}
