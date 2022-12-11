import ICharacterList from "../CharacterList/characters.interface";
import CharacterStatus from "../CharacterStatus/CharacterStatus";

const Character = ({ ...character }: ICharacterList) => {
  return (
    <article className="w-[250px] h-[300px] bg-white rounded-lg cursor-pointer shadow-lg shadow-white-500/50">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-4/5"
      />
      <div className="flex justify-between mx-2 items-center my-4">
        <div>
          {character.name.length <= 16
            ? character.name
            : `${character.name.substring(0, 15)}...`}
        </div>
        <CharacterStatus status={character.status} />
      </div>
    </article>
  );
};

export default Character;
