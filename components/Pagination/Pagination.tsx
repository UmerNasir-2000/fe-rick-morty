import { useRouter } from "next/router";

const Pagination = () => {
  const router = useRouter();
  const nextPageClickHandler = () => {
    if (router.query.pageNumber) {
      let page = parseInt(router.query.pageNumber.toString()) + 1;
      if (page > 42) {
        alert("Max page reached!");
        return;
      }
      router.push(`/characters/?pageNumber=${page}`);
    } else {
      router.push(`/characters/?pageNumber=2`);
    }
  };

  const previousPageClickHandler = () => {
    if (router.query.pageNumber) {
      let page = parseInt(router.query.pageNumber.toString()) - 1;
      router.push(`/characters/?pageNumber=${page}`);
    }
  };

  return (
    <div className="flex justify-end p-2">
      <button
        className="p-4 border-black border-[1px] mx-1 rounded hover:bg-[#202329] hover:text-white"
        onClick={previousPageClickHandler}
      >
        Previous
      </button>
      <button
        className="p-4 border-black border-[1px] mx-1 rounded hover:bg-[#202329] hover:text-white"
        onClick={nextPageClickHandler}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
