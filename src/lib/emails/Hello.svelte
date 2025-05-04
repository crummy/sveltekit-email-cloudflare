<script>
    import { Button, Hr, Html, Text, Head } from 'svelte-email-tailwind';

    export let name = 'World';
</script>

<Html lang="en">
<Head />
<Text class="md:text-[18px] text-[24px]">
    Hello, {name}!
</Text>
<Hr />
<Button href="https://svelte.dev">Visit Svelte</Button>
</Html>