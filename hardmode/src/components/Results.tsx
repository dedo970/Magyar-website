import { useFormContext } from '../context/FormContextProvider';
import resultImg from '../assets/result.png';
import { useRouter } from "next/router";
import { api } from "../utils/api";


const Results = ({ resultPara }: { resultPara: string }) => {
  const { formData } = useFormContext();
  console.log(formData);
  console.log(JSON.stringify(formData))

  return (
    <>
      <img
        className='result__img'
        alt='handstanding people final page'
        src="../assets/result.png"
      />
      <p className='result__para'>{resultPara}</p>
    </>
  );
};

export default Results;
