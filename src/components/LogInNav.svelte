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
  <SignedIn let:user let:signOut>
    {#if user.isAnonymous}
      logged in anonymously
    {:else}
      {user.email}
    {/if}
    <button class="p-1 link" on:click={signOut}>Log Out</button>
  </SignedIn>
  <SignedOut let:auth>
    <button class="p-1 link" on:click={() => signInAnonymously(auth)}>Log In (Anonymous)</button>
    <button class="p-1 link" on:click={() => signInViaGoogle(auth)}>Log In (Google)</button>
  </SignedOut>
</div>
