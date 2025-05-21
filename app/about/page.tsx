'use client'
import { title } from "@/components/primitives";
import {User} from "@heroui/user"
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import { Button, Chip, Avatar, Card, CardBody, CardHeader, CardFooter, Code, Link, Accordion, AccordionItem} from "@heroui/react"
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@heroui/table";
export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <h2 className="text-default-400 m-4">A little bit about... me!</h2>
      <Card className="max-w-[500px]">
        <CardHeader className="justify-start gap-x-5">
          <Avatar size="lg" isBordered src="/profile.jpg"></Avatar>
            <div className="flex flex-col items-start justify-center gap-y-1">
              <div>
                <h4 className="text-large font-bold leading-none text-default-600">Drowzee</h4>
                <h6 className=" text-left text-xs text-default-400">he/they</h6>
              </div>
              <Chip radius="sm" size="sm" className="text-small" color="primary" variant="shadow"><h5 className="text-small tracking-tight text-default-600">Software Developer</h5></Chip>
              </div>
      
        </CardHeader>
        <CardBody>
          <div className="m-y-2">
            <Code size="md" color="default"><b>Hello, I'm Drowzee! 👋 </b></Code>
          </div>
          <div>
          <Code  size="sm" color="default" className="whitespace-pre-wrap text-wrap break-words text-sm ">
            <p>I'm a 17 year-old programmer and Computer Science major at the University of Maryland! Some of my favorite activities are fencing, hanging out with my friends, <Link href="/projects" className="text-sm">coding</Link>, reading, and most importantly, playing with my guinea pigs.</p>
            <br/>
            <div className="w-full max-w-md mx-auto">
              <CCarousel controls indicators interval={false}>
              <CCarouselItem>
                <CImage className="d-block w-full object-cover rounded" src={'/carousel/piggy/1.png'} alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-full object-cover rounded" src={'/carousel/piggy/2.png'} alt="slide 2" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-full object-cover rounded" src={'/carousel/piggy/3.png'} alt="slide 3" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-full object-cover rounded" src={'/carousel/piggy/4.png'} alt="slide 4" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-full object-cover rounded" src={'/carousel/piggy/5.png'} alt="slide 5" />
              </CCarouselItem>
            </CCarousel>
            </div>

            
            <p className="text-default-400 text-xs text-center m-2">Oh they're so adorable :)</p>
            
            <p>At the age of 13, I picked up programming as a hobby and self-taught my first language, Node JS. Since then, I have branched out to multiple adventures, even publishing <Link href="https://qbish.itch.io/fox-frenzy" isExternal className="text-sm">my first videogame</Link> with the National High School Game Academy at Carnegie Mellon University.</p>
            <br/>
            <p>Feel free to <Link className="text-sm" href="/contact">contact me</Link> if you want to know anything about my projects, life, or any other pressing questions you may have, or if you just want to say hi!</p>
            <Accordion>
              <AccordionItem key="1" aria-label="Here's some people that inspire me" title="Here's some people that inspire me">
              
                <div className="">
                  <Table aria-label="Favorite People Table">
                    <TableHeader>
                      <TableColumn>NAME</TableColumn>
                      <TableColumn>JOB</TableColumn>
                      <TableColumn>MORE</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>Jim Sinclair</TableCell>
                        <TableCell>Autism Rights Advocate</TableCell>
                        <TableCell><Link className="text-sm" isExternal href="https://en.wikipedia.org/wiki/Jim_Sinclair_(activist)">Here</Link></TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>Maia Crimew</TableCell>
                        <TableCell>Hacktivist</TableCell>
                        <TableCell><Link className="text-sm" isExternal href="https://maia.crimew.gay/">Here</Link></TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>Terry Davis</TableCell>
                        <TableCell>Computer Programmer</TableCell>
                      <TableCell><Link className="text-sm" isExternal href="https://en.wikipedia.org/wiki/Terry_A._Davis">Here</Link></TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>Alan Turing</TableCell>
                        <TableCell>Computer Scientist</TableCell>
                        <TableCell><Link className="text-sm" isExternal href="https://en.wikipedia.org/wiki/Alan_Turing">Here</Link></TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>J McClendon</TableCell>
                        <TableCell>Singer/Songwriter</TableCell>
                        <TableCell><Link className="text-sm" isExternal href="https://glassbeach.band/">Here</Link></TableCell>
                      </TableRow>
                    </TableBody>
                    
                  </Table>
              </div>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Some of my favorite pieces of media are" title="Some of my favorite pieces of media are">
                <Table aria-label="Favorite Media Table">
                  <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>TYPE</TableColumn>
                    <TableColumn>AUTHOR</TableColumn>
                    <TableColumn>MORE</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Link Click</TableCell>
                      <TableCell>Anime/Show</TableCell>
                      <TableCell>Studio LAN</TableCell>
                      <TableCell><Link isExternal href="https://en.wikipedia.org/wiki/Link_Click">Here</Link></TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>Don't Mourn For Us</TableCell>
                      <TableCell>Essay</TableCell>
                      <TableCell>Jim Sinclair</TableCell>
                      <TableCell><Link isExternal href="https://philosophy.ucsc.edu/SinclairDontMournForUs.pdf">Here</Link></TableCell>
                    </TableRow>
                    <TableRow key="3">
                      <TableCell>Cloud Cuckoo Land</TableCell>
                      <TableCell>Novel</TableCell>
                      <TableCell>Anthony Doerr</TableCell>
                      <TableCell><Link isExternal href="https://www.goodreads.com/book/show/56783258-cloud-cuckoo-land">Here</Link></TableCell>
                    </TableRow>
                    <TableRow key="4">
                      <TableCell>OMORI</TableCell>
                      <TableCell>Game</TableCell>
                      <TableCell>OMOCAT</TableCell>
                      <TableCell><Link isExternal href="https://store.steampowered.com/app/1150690/OMORI/">Here</Link></TableCell>
                    </TableRow>
                    <TableRow key="5">
                      <TableCell>TFGBA</TableCell>
                      <TableCell>Album</TableCell>
                      <TableCell>glass beach</TableCell>
                      <TableCell><Link isExternal href="https://glassbeach.bandcamp.com/album/the-first-glass-beach-album">Here</Link></TableCell>
                    </TableRow>
                    <TableRow key="6">
                      <TableCell>he's not with us anymore</TableCell>
                      <TableCell>Album</TableCell>
                      <TableCell>casio dad</TableCell>
                      <TableCell><Link isExternal href="https://classicj.bandcamp.com/album/hes-not-with-us-anymore">Here</Link></TableCell>
                    </TableRow>
                    <TableRow key="7">
                      <TableCell>How to Make Love $tay</TableCell>
                      <TableCell>Album</TableCell>
                      <TableCell>Marcioz</TableCell>
                      <TableCell><Link isExternal href="https://marcioz.bandcamp.com/album/how-to-make-love-tay">Here</Link></TableCell>
                    </TableRow>
                    <TableRow key="8">
                      <TableCell>plastic death</TableCell>
                      <TableCell>Album</TableCell>
                      <TableCell>glass beach</TableCell>
                      <TableCell><Link isExternal href="https://glassbeach.bandcamp.com/album/plastic-death">Here</Link></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionItem>
            </Accordion>           
           
           </Code>
          </div>
        </CardBody>
        <CardFooter className="text-center flex flex-col">
          <h1 className="text-center">You can download:</h1>
          <div className="flex flex-row m-2 gap-2 justify-center">
            <a href="/resume.pdf" download><Button variant="shadow">My Résumé</Button></a>
            
            
          </div>
          
        </CardFooter>
      </Card>

    </div>
  );
}
