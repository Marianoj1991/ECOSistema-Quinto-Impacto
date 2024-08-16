import { z } from "zod";

const publicacionServiceSchema = z.object({
  titulo: z.string().min(1, { message: "Campo requerido" }),

  descripcion: z
  .string()
  .min(1, { message: "Campo requerido" })
  .max(2000, { message: "Máximo 2000 caracteres" }),

});

export default publicacionServiceSchema;