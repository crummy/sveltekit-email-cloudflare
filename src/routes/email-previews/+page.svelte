<script lang="ts">
    import PreviewInterface from 'svelte-email-tailwind/preview/PreviewInterface.svelte';
    export let data;
</script>

<PreviewInterface {data} email="name@example.com" />