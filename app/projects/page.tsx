'use client'
import React from 'react'
import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Link} from "@heroui/react"
import { button as buttonStyles } from "@heroui/theme";
import {GithubIcon} from "@/components/icons";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
export default function ProjectsPage() {
  
  let [isOpen, setIsOpen] = useState(false)
  let [serviceTitle, setServiceTitle] = useState("Blank")
  let [serviceInfo, setServiceInfo] = useState(<p></p>)
  let [carouselItems, setCarouselItems] = useState([""])
  function open(index: number) {
    setIsOpen(true)
    setServiceTitle(messages[index].name);
    setServiceInfo(messages[index].text)
    setCarouselItems(messages[index].images)
    
  }

  function close() {
    setIsOpen(false)
  }
  const messages = [
    {
      name:"JotJunction",
      text: <div><p>Have you ever written a note to a friend in class? JotJunction combines the worlds of social media and simple sketching to bring you a new and innovative social platform with one catch: Every message is a "jot".</p><br/><p> Users can post, reply, comment, and create profile pictures. However, all of them must be "jots", or drawings made in a program similar to MS Paint. You can upvote your friends' work that you enjoy, and the most popular "jots" will be featured by JotJunction moderators.</p> <br/><b>While JotJunction has now shut down, a rewrite of the site is being done, and more progress will be shared at a later date.</b></div>,
      images: ["/carousel/jotjunction/1.png","/carousel/jotjunction/2.png", "/carousel/jotjunction/3.png", "/carousel/jotjunction/4.jpg", "/carousel/jotjunction/5.png"]
    },
    {
      name:"Notica",
      text:<div><p>Notica is a full scale reverse engineering of the <Link href="https://audicagame.com/" className="text-small" isExternal>Harmonix</Link> project <Link href="https://www.harmonixmusic.com/" className="text-small" isExternal>Audica</Link>'s leaderboard servers, acting as a server emulator that restores the game's original online functionality.</p><br/> <p>Since the closure of the original leaderboard servers, Harmonix remains adamant that the game will no longer receive support in terms of online or offline content. Because of this position, <b>Notica is currently the only way to play Audica online for the foreseeable future.</b> </p><br/><p>To get started, join the Audica Modding Group <Link href="https://discord.gg/cakQUt5" className="text-small" isExternal>Discord Server</Link> to receive the latest versions of the mod. While this project remains closed source at this time, documentation and source code are available <Link href="/contact" className="text-small">upon request</Link>.</p></div>,
      images: ["/carousel/notica/1.jpg", "/carousel/notica/2.png", "/carousel/notica/3.png"]
    },
    {
      name:"theShop",
      text:<div><p>theShop is a partially complete reverse engineering of the <Link 
              href="https://www.nintendo.com/en-gb/Hardware/Nintendo-3DS-Family/Download-Content/Nintendo-eShop/Nintendo-eShop-904671.html" className="text-small" isExternal>
                Nintendo 3DS eShop</Link> API. Currently, both downloading and browsing applications has been fully implemented, however some functionality remains undocumented.</p><br/><p>Unforunately, I am not able to provide a public release, service, or codebase of this project. However, source code and documentation can be made accessible privately <Link href="/contact" className="text-small">upon request</Link>. </p></div>,
      images: ["/carousel/theshop/1.png", "/carousel/theshop/2.jpg"]
    }
  ]
  return (
    
    <div className="">
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-scroll">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-lg font-medium text-white">
                {serviceTitle}
              </DialogTitle>
              <div className="mt-2 text-sm/6 text-white/50">
                {serviceInfo}

                <CCarousel className="m-6" controls indicators interval={5000}>
  {carouselItems.filter(Boolean).map((image, idx) => (
    <CCarouselItem key={idx}>
      <CImage className="d-block w-100" src={image} alt={`slide ${idx}`} />
    </CCarouselItem>
  ))}
</CCarousel>
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    
      <div className={`${isOpen ? 'blur-sm' : ''} p-4 rounded`}>
        <h1 className={title()}>Projects</h1>
      <h2 className="text-default-400 m-4">Here's what I've been up to...</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Card className="max-w-[300px]">
          <CardHeader className="justify-center gap-x-3">
              <Avatar isBordered size="md" src="/logos/jotjunction.webp"></Avatar>
              <h1 className="font-bold">JotJunction</h1>
          </CardHeader>
          <CardBody className="">
            <h6 className="text-small text-default-600 text-wrap text-center">
              Have you ever written a note to a friend in class? JotJunction combines the worlds of social media and simple sketching to bring you a new and innovative social platform with one catch: Every message is drawn.
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
              <Avatar isBordered size="md" src="/logos/audica.jpg"></Avatar>
              <h1 className="font-bold">Notica</h1>
          </CardHeader>
          <CardBody className="gap-y-1">
            <h6 className="text-small text-default-600 text-wrap text-center">
              Notica is a full scale reverse engineering of the <Link href="https://audicagame.com/" className="text-small" isExternal>Harmonix</Link> project <Link href="https://www.harmonixmusic.com/" className="text-small" isExternal>Audica</Link>'s leaderboard servers, acting as a server emulator that restores the game's original online functionality.
            </h6>
            <h6 className="text-xs text-default-300">* Notica is not associated with Harmonix or the Audica team and remains a separate passion project.</h6>
            
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
              <Avatar isBordered size="md" src="/logos/eshop.webp"></Avatar>
              <h1 className="font-bold">theShop</h1>
          </CardHeader>
          <CardBody className="gap-y-1">
            <h6 className="text-small text-default-600 text-wrap text-center">
              theShop is a partially complete reverse engineering of the <Link 
              href="https://www.nintendo.com/en-gb/Hardware/Nintendo-3DS-Family/Download-Content/Nintendo-eShop/Nintendo-eShop-904671.html" className="text-small" isExternal>
                Nintendo 3DS eShop</Link> API. Currently, both downloading and browsing applications has been fully implemented, however some functionality remains undocumented.
            </h6>
            <h6 className="text-xs text-default-300">* theShop is not associated with Nintendo. I do not support piracy or the circumvention of Nintendo security measures.</h6>
            
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
              <Avatar isBordered size="md" src="/profile.jpg"></Avatar>
              <h1 className="font-bold">Small Projects</h1>
          </CardHeader>
          <CardBody className="gap-y-1">
            <h6 className="text-small text-default-600 text-wrap text-center">
               While I give spotlight to many of my largest projects, I still have many smaller ones that I've completed over the years. I'd love for you to check them out over at my GitHub! I put tons of effort into smaller apps, websites, and services that are all free and open source.
            </h6>
          </CardBody>
          <CardFooter className="flex flex-col gap-y-2 items-center justify-center">
            <Link
              className={buttonStyles({
                
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              isExternal
              href={"https://github.com/JustAHippo"}
            >
              <GithubIcon/>
              <h6>Check it out!</h6>
            </Link>
        </CardFooter>
        </Card>

      </div>
      </div>
      
    </div>
    

  );
}
