<script>
  import { SignedIn, SignedOut } from "sveltefire";
  import { signInAnonymously, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

  async function signInViaGoogle(auth) {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    const result = await signInWithPopup(auth, provider);
  }
</script>

<div class="bg-purple-100 text-right p-1">
  <SignedIn  >
    {#snippet children({ user, signOut })}
        {#if user.isAnonymous}
        logged in anonymously
      {:else}
        {user.email}
      {/if}
      <button class="p-1 link" onclick={signOut}>Log Out</button>
          {/snippet}
    </SignedIn>
  <SignedOut >
    {#snippet children({ auth })}
        <button class="p-1 link" onclick={() => signInAnonymously(auth)}>Log In (Anonymous)</button>
      <button class="p-1 link" onclick={() => signInViaGoogle(auth)}>Log In (Google)</button>
          {/snippet}
    </SignedOut>
</div>
