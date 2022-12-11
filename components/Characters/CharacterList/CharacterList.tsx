import Character from "../Character/Character";
import ICharacterList from "./characters.interface";

export interface ICharacterProps {
  characters: ICharacterList[];
}

const CharacterList = ({ characters }: ICharacterProps) => {
  return (
    <section className="bg-[#202329] flex justify-center items-center flex-wrap gap-4 p-5">
      {characters.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </section>
  );
};

export default CharacterList;
