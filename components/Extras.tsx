interface Props {
  projects: Project[];
}
interface IProps {
  text: string;
}

const Extras = ({ projects }: Props) => {
  return (
    <div className="mt-56 text-custom-slate md:mt-64 md:pl-10 lg:pl-36">
      <div className="text-center text-2xl font-semibold md:text-3xl">
        Other Noteworthy Projects
      </div>

      <div className="mt-20">
        {projects.map((project) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
};
export default Extras;
