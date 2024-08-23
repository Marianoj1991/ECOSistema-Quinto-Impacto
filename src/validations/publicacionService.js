import { z } from "zod";

const publicacionServiceSchema = z.object({
  titulo: z.string().min(1, { message: "Campo requerido" })
  .refine((value) => {
    // Dividir el título en palabras
    const palabras = value.split(" ");
    // Verificar que ninguna palabra tenga más de 20 caracteres
    return palabras.every(palabra => palabra.length <= 23);
  }, { message: "Cada palabra del título no debe exceder los 23 caracteres" }),

  descripcion: z
  .string()
  .min(1, { message: "Campo requerido" })
  .max(2000, { message: "Máximo 2000 caracteres" }),

});

export default publicacionServiceSchema;