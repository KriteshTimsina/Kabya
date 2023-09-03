import { Wrapper } from "../../components/Wrapper";
import Charts from "./components/Charts";
import SearchBox from "./components/SearchBox";

const Home = () => {
  return (
    <Wrapper className="flex flex-col gap-5">
      <SearchBox />
      <Charts />
    </Wrapper>
  );
};

export default Home;
