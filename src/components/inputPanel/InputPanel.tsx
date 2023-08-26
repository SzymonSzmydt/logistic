import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./styles/input.module.css";

export interface Dimensions {
  productW: number;
  productH: number;
  palleteW: number;
  palleteH: number;
}

interface InputProps {
  setDimensions: Dispatch<SetStateAction<Dimensions>>;
}

const InputPanel = ({ setDimensions }: InputProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Dimensions>();

  const onSubmit: SubmitHandler<Dimensions> = (data) => setDimensions(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.product}>
        <label>Opakowanie - długość</label>
        <input
          type='number'
          {...register("productH", { required: true, min: 1, max: 1000 })}
          aria-invalid={errors.productW ? "true" : "false"}
        />
        <label>Opakowanie - szerokość</label>
        <input
          type='number'
          {...register("productW", {
            required: {
              value: true,
              message: "To pole jest wymagane!",
            },
            min: {
              value: 1,
              message: "Wartość musi być większa równa 1!",
            },
            max: {
              value: 1000,
              message: "Wymagana wartość w przedziale między 1 - 1000",
            },
          })}
          aria-invalid={errors.productW ? "true" : "false"}
        />
        <p role='error'> {errors?.productW?.message} </p>
      </div>
      <div className={style.pallete}>
        <label>Paleta - długość</label>
        <input
          type='number'
          {...register("palleteH", { required: true, min: 500, max: 2000 })}
          aria-invalid={errors.productW ? "true" : "false"}
        />
        <label>Paleta - szerokość</label>
        <input
          type='number'
          {...register("palleteW", { required: true, min: 500, max: 2000 })}
          aria-invalid={errors.productW ? "true" : "false"}
        />
      </div>

      <button type='submit'>Generuj</button>
    </form>
  );
};

export default InputPanel;
