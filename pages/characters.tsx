import type { GetServerSidePropsContext } from "next";
import axiosInstance, { IAxiosResponse } from "../utils/axios";
import CharacterList, {
  ICharacterProps,
} from "../components/Characters/CharacterList/CharacterList";
import ICharacterList from "../components/Characters/CharacterList/characters.interface";
import Pagination from "../components/Pagination/Pagination";

const Characters = ({ characters }: ICharacterProps) => {
  return (
    <>
      <CharacterList characters={characters} />
      <Pagination />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const {
      data: { results },
      status,
    } = await axiosInstance.get<IAxiosResponse<ICharacterList>>(
      `/character/?page=${context.query.pageNumber}`
    );

    const newProps: ICharacterProps = {
      characters: results,
    };

    return {
      props: newProps,
    };
  } catch (error) {
    console.log(error);
  }
}

export default Characters;
