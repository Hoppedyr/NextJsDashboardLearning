'use server';

import { z } from 'zod'

const schema = z.object({
    amount: z.string({
      invalid_type_error: 'Invalid Email',
    }),
  })

export async function createInvoice(formData: FormData) {
    console.log("hit");

    const validatedFields = schema.safeParse({
        amount: formData.get('amount'),
        status: formData.get('status'),
      })
    

    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }

    // Test it out:
    console.log(validatedFields);
  }