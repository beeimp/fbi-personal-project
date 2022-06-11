import { FunctionComponent, MouseEventHandler, RefObject, useState } from "react";
import { ImageSliderWrapper, ImageSliderView, ImageSliderButton } from '../../components/image-slider';

interface ImageSliderLayoutProps {
  imageUrls: Array<string>;
  wrapperRef: RefObject<HTMLDivElement>;
}

const ImageSliderLayout: FunctionComponent<ImageSliderLayoutProps> = ({ imageUrls, wrapperRef }) => {
  const size = wrapperRef.current?.offsetWidth;
  const [imagePostion, setImagePosition] = useState<{ position: number, next: number }>({
    position: 0,
    next: 0
  })

  const slideHandler = (event: React.MouseEvent<Element, globalThis.MouseEvent>, name: string) => {
    if (name !== 'next' && name !== 'prev') throw new Error(`name이 'next' 또는 'prev'가 아닙니다.(name:${name})`);
    const { next } = imagePostion;
    console.log(next, imageUrls.length)
    if (name === 'next') {
      if (next < imageUrls.length - 1) {
        setImagePosition({
          position: next,
          next: next + 1
        })
      }
    } else {
      if (0 < next) {
        setImagePosition({
          position: next,
          next: next - 1
        })
      }
    }

  }

  return (
    <ImageSliderWrapper size={size}>
      {/* <ImageSliderView imageUrl={imageUrls[0]} ></ImageSliderView> */}

      {
        imageUrls.map((imageUrl) => (
          <ImageSliderView
            key={imageUrl}
            imageUrl={imageUrl}
            position={imagePostion.position}
            next={imagePostion.next} />
        ))
      }
      <ImageSliderButton name="prev" onClick={(event) => slideHandler(event, "prev")}>{"<"}</ImageSliderButton>
      <ImageSliderButton name="next" onClick={(event) => slideHandler(event, "next")}>{">"}</ImageSliderButton>
    </ImageSliderWrapper>
  );
}

export default ImageSliderLayout;