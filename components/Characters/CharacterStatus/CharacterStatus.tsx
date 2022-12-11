interface ICharacterStatusProps {
  status: string;
}

const CharacterStatus = ({ status }: ICharacterStatusProps) => {
  let classes =
    status === "Alive"
      ? "text-green-800"
      : status === "unknown"
      ? "text-gray-800"
      : "text-red-800";

  status = status === "unknown" ? "Unknown" : status;

  return <div className={`italic ${classes} font-bold`}>{status}</div>;
};

export default CharacterStatus;
