import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./styles/input.module.css";

type Inputs = {
  productW: number;
  productH: number;
  palleteW: number;
  palleteH: number;
};

interface InputProps {
  setDimensions: Dispatch<SetStateAction<Inputs>>;
}

const InputPanel = ({ setDimensions }: InputProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => setDimensions(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.product}>
        <label>Opakowanie - szerokość</label>
        <input
          type='number'
          {...register("productW", { required: true, min: 1, max: 1000 })}
          aria-invalid={errors.productW ? "true" : "false"}
        />
        <label>Opakowanie - długość</label>
        <input
          type='number'
          {...register("productH", { required: true, min: 1, max: 1000 })}
          aria-invalid={errors.productW ? "true" : "false"}
        />
      </div>
      <div className={style.pallete}>
        <label>Paleta - szerokość</label>
        <input
          type='number'
          {...register("palleteW", { required: true, min: 500, max: 2000 })}
          aria-invalid={errors.productW ? "true" : "false"}
        />
        <label>Paleta - długość</label>
        <input
          type='number'
          {...register("palleteH", { required: true, min: 500, max: 2000 })}
          aria-invalid={errors.productW ? "true" : "false"}
        />
      </div>

      <button type='submit'>Generuj</button>
    </form>
  );
};

export default InputPanel;
