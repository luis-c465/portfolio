> A newer alternative to [React](https://react.dev) focusing on readability. Offers advantages when JavaScript reactivity into backend focused frameworks like [Django](https://www.djangoproject.com/)

# Example

```sv
<script>
    let count = 1;
    $: doubled = count * 2;
</script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
```
