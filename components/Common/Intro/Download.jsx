import Link from "next/link";
const Download = ({ icon }) => {
  return (
    <>
      <Link
        href="https://res.cloudinary.com/dpijcljrw/image/upload/v1772137843/cv_updated_27_april_2026_ahidyu.pdf"
        target="_blank"
        className="flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4"
      >
        <span className="text-Snow">Download Resume</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
