import { css } from '@emotion/react';
import { FunctionComponent } from 'react';

const headerTitleWrapperStyle = css`
  
`;

const headerTitleStyle = css`
  text-align: center;
  font-size: 50px;
  margin: 0;
`

interface HeaderTitleProps {
  title: String;
}

const HeaderTitle: FunctionComponent<HeaderTitleProps> = ({ title }) => {
  return (
    <div>
      <h3 css={headerTitleStyle}>
        {title}
      </h3>
    </div>
  );
}

export default HeaderTitle;