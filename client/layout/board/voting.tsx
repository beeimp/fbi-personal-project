import { ChangeEventHandler, FunctionComponent } from "react";
import { VotingInput, VotingButton, VotingWrapper } from '../../components/voting';

interface VotingLayoutProps {
  height?: string;
}

const VotingLayout: FunctionComponent<VotingLayoutProps> = ({height="50px"}) => {

  const votingInputHandler:ChangeEventHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const value:number = Number(event.target.value);
    
  }

  return (
    <VotingWrapper height={height}>
      <VotingInput></VotingInput>
      <VotingButton onClick={(e) => { }}>UP!</VotingButton>
      <VotingButton onClick={(e) => { }}>Down..</VotingButton>
    </VotingWrapper>
  );
}

export default VotingLayout;