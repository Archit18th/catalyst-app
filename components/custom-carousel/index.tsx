import Image from 'next/image';

import { Button } from '~/components/ui/button';
import {
  Slideshow,
  SlideshowAutoplayControl,
  SlideshowContent,
  SlideshowControls,
  SlideshowNextIndicator,
  SlideshowPagination,
  SlideshowPreviousIndicator,
  SlideshowSlide,
} from '~/components/ui/slideshow';

import CustomImage from './customImage.jpeg';
import CustomImage2 from './summer-sale.jpeg';

export const CustomCarousel = () => (
  <Slideshow>
    <SlideshowContent>
      <SlideshowSlide>
            <div className="relative">
            {/* <Image
                alt="an assortment of brandless products against a blank background"
                className="absolute -z-10 object-cover"
                fill
                priority
                sizes="(max-width: 1536px) 100vw, 1536px"
                src={CustomImage}
            /> */}
            <Image
                alt="an assortment of brandless products against a blank background"
                className="absolute -z-10 object-cover"
                fill
                priority
                sizes="(max-width: 1536px) 100vw, 1536px"
                src={CustomImage2}
            />
            <div className="customflex flex-col gap-4 px-12 pb-48 pt-36">
                <h2 className="text-5xl font-black lg:text-6xl">25% Off Sale</h2>
                <p className="max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <Button asChild className="w-fit">
                <a href="/#">Shop now</a>
                </Button>
            </div>
            </div>
        </SlideshowSlide>
        <SlideshowSlide>
            <div className="relative">
                <Image
                    alt="an assortment of brandless products against a blank background"
                    className="absolute -z-10 object-cover"
                    fill
                    priority
                    sizes="(max-width: 1536px) 100vw, 1536px"
                    src={CustomImage2}
                />
            </div>
        </SlideshowSlide>
    </SlideshowContent>
    <SlideshowControls>
      <SlideshowAutoplayControl />
      <SlideshowPreviousIndicator />
      <SlideshowPagination />
      <SlideshowNextIndicator />
    </SlideshowControls>
  </Slideshow>
);
