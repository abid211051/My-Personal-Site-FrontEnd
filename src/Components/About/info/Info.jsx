import InfoBarAnim from "./InfoBarAnim";
import info from "./InfoData";
const Info = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        <div className="flex flex-col items-start pt-2">
          {info?.length > 0 &&
            info[0].map((item, index) => (
              <InfoBarAnim item={item} index={index} key={"info_" + index} />
            ))}
        </div>
        <div className="flex flex-col items-start pt-2">
          {info?.length > 0 &&
            info[1].map((item, index) => (
              <InfoBarAnim item={item} index={index} key={"info_" + index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Info;
