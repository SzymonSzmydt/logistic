import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { initialState } from "../../App";
import style from "./styles/input.module.css";

export interface Dimensions {
  productL: number;
  productS: number;
  paletteL: number;
  paletteS: number;
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
          placeholder={`${initialState.productL}`}
          {...register("productL", { required: true, min: 1, max: 800 })}
          aria-invalid={errors.productL ? "true" : "false"}
        />
        <p role='error'> {errors?.productL?.message} </p>

        <label>Opakowanie - szerokość</label>
        <input
          type='number'
          placeholder={`${initialState.productS}`}
          {...register("productS", {
            required: {
              value: true,
              message: "To pole jest wymagane!",
            },
            min: {
              value: 1,
              message: "Wartość musi być większa równa 1!",
            },
            max: {
              value: 800,
              message: "Wymagana wartość w przedziale między 1 - 1000",
            },
          })}
          aria-invalid={errors.productS ? "true" : "false"}
        />
        <p role='error'> {errors?.productS?.message} </p>
      </div>

      <div className={style.palette}>
        <label>Paleta - długość</label>
        <input
          type='number'
          placeholder={`${initialState.paletteL}`}
          {...register("paletteL", { required: true, min: 500, max: 2000 })}
          aria-invalid={errors.paletteL ? "true" : "false"}
        />

        <label>Paleta - szerokość</label>
        <input
          type='number'
          placeholder={`${initialState.paletteS}`}
          {...register("paletteS", { required: true, min: 500, max: 2000 })}
          aria-invalid={errors.paletteS ? "true" : "false"}
        />
      </div>

      <button type='submit'>Generuj</button>
    </form>
  );
};

export default InputPanel;
