import { Dispatch, FunctionComponent, MouseEvent  ,MouseEventHandler, SetStateAction } from "react";
import { BoardPreview } from "../../components/board";
import { BoardPreviewWrapper } from '../../components/board';
import { contentsType } from "../../types/board";

interface BoardPreviewLayoutProps {
  contentList: contentsType[];
  setIsView: Dispatch<SetStateAction<boolean>>;
  setView: Dispatch<SetStateAction<contentsType>>;
}

const BoardPreviewLayout: FunctionComponent<BoardPreviewLayoutProps> = ({ contentList, setIsView, setView }) => {
  const onClick = (e:MouseEvent<Element, globalThis.MouseEvent>, id:number) => {
    e.preventDefault();
    const contents = contentList.find(contents => contents.id === id)
    if(contents) {
      setIsView(true);
      setView(contents);
    }
  }

  return (
    <BoardPreviewWrapper>
      {contentList?.map((contents, index) => (
        <BoardPreview
          key={index} 
          imageUrls={contents.image_urls}
          onClick={(e) => onClick(e, contents.id)}></BoardPreview>
      ))}
    </BoardPreviewWrapper>
  );
}

export default BoardPreviewLayout;