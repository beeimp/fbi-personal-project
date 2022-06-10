import { css } from "@emotion/react";
import { FunctionComponent, ReactNode } from "react";

interface HeaderWrapperProps {
  children: ReactNode
}

const wapperStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100px;
  padding: 0;
  margin: 0;

  border-bottom: 1px solid black;
`

const HeaderWrapper: FunctionComponent<HeaderWrapperProps> = ({children}) => {
  return (
    <div css={wapperStyle}>
      {children}
    </div>
  );
}

export default HeaderWrapper;