import { render } from 'svelte/server';
// import { renderAsPlainText } from 'svelte-email-tailwind';
import type { ComponentProps } from 'svelte';
import type HelloProps from '../../../lib/emails/Hello.svelte';
import Hello from '../../../lib/emails/Hello.svelte';

const componentProps: ComponentProps<HelloProps> = {
    name: 'Steven'
};

let data = render(Hello, { props: componentProps });
console.log(data);
// Alternatively, render your email as plain text:
// const plainText = renderAsPlainText(html);
