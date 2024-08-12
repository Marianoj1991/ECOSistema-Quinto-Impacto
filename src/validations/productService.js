import { z } from "zod";

const productServiceSchema = z.object({
  nombre: z.string().min(1, { message: "Campo requerido" }),
  descripcionCorta: z
    .string()
    .min(1, { message: "Campo requerido" })
    .max(50, { message: "Máximo 50 caracteres" }),
  categoria: z.string().min(1, { message: "Seleccioná una categoría" }),
  email: z
    .string()
    .min(1, { message: "Campo requerido" })
    .email({ message: "Email inválido" }),
  telefono: z
    .string()
    .min(1, { message: "Campo requerido" })
    .regex(/\+[5]{1,1}[479]{1,1}[8]?[\d\s]+/, {
      message: "Teléfono inválido",
    }),
  instagram: z
    .string()
    .regex(/^(https:\/\/www\.instagram\.com\/)[\w.]+[/]{1,1}$/, {
      message: "Link de instagram inválido",
    })
    .or(z.literal("")),
  facebook: z
    .string()
    .regex(/^(https:\/\/www\.facebook\.com\/)[\w.]+$/, {
      message: "Link de facebook inválido",
    })
    .or(z.literal("")),
  pais: z.string().min(1, { message: "Seleccioná un país" }),
  provincia: z.string().min(1, { message: "Seleccioná una provincia/estado" }),
  ciudad: z.string().min(1, { message: "Campo requerido" }),
  descripcionLarga: z
    .string()
    .min(1, { message: "Campo requerido" })
    .max(300, { message: "Máximo 300 caracteres" }),
});

export default productServiceSchema;
