<script>
	import QuestionForm from "./lib/QuestionForm.svelte";
	import "animate.css";

	let startGame = false;
	let questions = [];
	let answers = [];
	let currentQ = 0;
	let answer = "";
	let frame = 0;

	function handleSubmit(event) {
		const formData = new FormData(event.target);
		const formEntries = Array.from(formData.entries());
		const numericValues = formEntries.map(([_, value]) => Number(value));
		questions = [...questions, numericValues];
		// Clear the form inputs
		event.target.reset();
	}

	/**
	 * @param {number} n
	 */
	function formatNumber(n) {
		if (n > 0) {
			return n < 10 ? `0${n}` : n;
		} else {
			return n > -10 ? `-0${n * -1}` : n;
		}
	}

	function checkAnswer(event) {
		if (event.key === "Enter") {
			const sum = questions[currentQ].reduce((a, b) => a + b, 0);
			answers.push({ correct: Number(answer) === sum, answer });
			currentQ++;
			answer = "";
			frame = Math.floor(Math.random() * 4);
		}
	}
</script>

<main>
	<h1>Slay Abacus Monsters</h1>
	{#if startGame}
		{#if answers.length === questions.length}
			<footer>
				{#each questions as q, i}
					<ul>
						{#each questions[i] as number}
							{#if number}
								<li>{formatNumber(number)}</li>
							{/if}
						{/each}
						<li><hr /></li>
						<li data-answer data-correct={answers[i].correct || null}>
							{answers[i].answer}
						</li>
					</ul>
				{/each}
			</footer>
		{:else}
			<div class="game">
				<section>
					<div
						class="enemy animate__animated animate__bounce animate__infinite"
						data-frame={frame}
					></div>

					{#if questions[currentQ]}
						<ul>
							{#each questions[currentQ] as number}
								{#if number}
									<li>{formatNumber(number)}</li>
								{/if}
							{/each}
						</ul>
					{/if}
				</section>
				<input
					type="number"
					placeholder="Answer..."
					bind:value={answer}
					on:keydown={checkAnswer}
					required
				/>
			</div>
		{/if}
	{:else}
		<QuestionForm
			{questions}
			{handleSubmit}
			start={() => {
				startGame = true;
			}}
		/>
	{/if}
</main>

<style>
	section,
	footer {
		display: flex;
		font-size: 2em;
		gap: 20px;
		margin: 0 auto 20px;
	}

	footer {
		justify-content: center;
	}

	ul {
		border: 1px solid white;

		& li {
			list-style: none;
			padding: 0 10px;
			text-align: right;

			&[data-answer] {
				color: red;
			}

			&[data-correct] {
				color: green;
			}
		}
	}

	.enemy {
		background: url(./assets/enemies.webp) no-repeat;
		background-size: 1600px 400px;
		display: block;
		height: 400px;
		margin: 0 auto;
		width: 400px;

		&[data-frame="1"] {
			background-position-x: -400px;
		}
		&[data-frame="2"] {
			background-position-x: -800px;
		}
		&[data-frame="3"] {
			background-position-x: -1200px;
		}
	}
</style>
