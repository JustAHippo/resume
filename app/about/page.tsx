'use client'
import { title } from "@/components/primitives";
import {User} from "@heroui/user"
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import {Card, CardBody, CardHeader, CardFooter, Code, Link, Accordion, AccordionItem} from "@heroui/react"
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@heroui/table";
export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <h2 className="text-default-400 m-4">A little bit about... me!</h2>
      <Card>
        <CardHeader>
                <User 
        avatarProps={{src:"/profile.jpg"}}
        name="Drowzee"
        description="Software Developer, he/they">
      </User>
        </CardHeader>
        <CardBody>
          <div className="m-y-2">
            <Code size="md" color="default"><b>Hello, I'm Drowzee! 👋 </b></Code>
          </div>
          <div>
          <Code size="sm" color="default" className="text-wrap">
            <p>I'm a 17 year-old programmer and Computer Science major at the University of Maryland! Some of my favorite activities are fencing, hanging out with my friends, <Link href="/projects" className="text-sm">coding</Link>, reading, and most importantly, playing with my guinea pigs.</p>
            <br/>
            <CCarousel controls indicators interval={false}>
              <CCarouselItem>
                <CImage className="d-block w-100" src={'/carousel/piggy/1.png'} alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={'/carousel/piggy/2.png'} alt="slide 2" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={'/carousel/piggy/3.png'} alt="slide 3" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={'/carousel/piggy/4.png'} alt="slide 4" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={'/carousel/piggy/5.png'} alt="slide 5" />
              </CCarouselItem>
            </CCarousel>
            
            <p className="text-default-400 text-xs text-center m-2">Oh they're so adorable :)</p>
            
            <p>At the age of 13, I picked up programming as a hobby and self-taught my first language, Node JS. Since then, I have branched out to multiple adventures, even publishing <Link href="https://qbish.itch.io/fox-frenzy" isExternal className="text-sm">my first videogame</Link> with the National High School Game Academy at Carnegie Mellon University.</p>
            <br/>
            <p>Feel free to <Link className="text-sm" href="/contact">contact me</Link> if you want to know anything about my projects, life, or any other pressing questions you may have, or if you just want to say hi!</p>
            <Accordion>
              <AccordionItem key="1" aria-label="Here's some people that inspire me" title="Here's some people that inspire me">

              </AccordionItem>
              <AccordionItem key="2" aria-label="Some of my favorite pieces of media are" title="Some of my favorite pieces of media are">

              </AccordionItem>
            </Accordion>           
           
           </Code>
          </div>
        </CardBody>
      </Card>

    </div>
  );
}
