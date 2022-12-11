export interface IRoute {
  id: number;
  path: string;
  text: string;
}

const routes: IRoute[] = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/characters",
    text: "Characters",
  },
  {
    id: 3,
    path: "/episodes",
    text: "Episodes",
  },
];

export default routes;
