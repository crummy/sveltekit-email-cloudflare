import { createEmail, sendEmail } from 'svelte-email-tailwind/preview';

export async function load() {
    // return the list of email components
    return { emailList: [] };
}

export const actions = {
    // Pass in the two actions. Provide your Resend API key.
    ...createEmail,
    ...sendEmail({ resendApiKey: "asdf" })
};