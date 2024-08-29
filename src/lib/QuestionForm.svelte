<script>
	export let handleSubmit;
	export let questions;
	export let start;
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h2># of Questions: {questions.length}</h2>
	<fieldset>
		<label for="question1">Number 1:</label>
		<input type="number" id="question1" name="question1" required />
	</fieldset>
	<fieldset>
		<label for="question2">Number 2:</label>
		<input type="number" id="question2" name="question2" required />
	</fieldset>
	<hr />
	<fieldset>
		<label for="question3">Number 3:</label>
		<input type="number" id="question3" name="question3" />
	</fieldset>
	<fieldset>
		<label for="question4">Number 4:</label>
		<input type="number" id="question4" name="question4" />
	</fieldset>
	<fieldset>
		<label for="question5">Number 5:</label>
		<input type="number" id="question5" name="question5" />
	</fieldset>

	<button type="submit">Submit</button>
	{#if questions.length > 2}
		<button type="button" on:click={start}>Start</button>
	{/if}
</form>

<style>
	form {
		background: white;
		box-shadow: 0 12px 5px rgba(0, 0, 0, 0.5);
		color: black;
		margin: 0 auto;
		padding: 10px;
		width: 300px;
	}

	form button {
		margin-top: 20px;
	}

	form button:last-child {
		background: purple;
	}

	fieldset {
		border: 0 none;
	}
</style>
