import Board from "@/components/board";
import { useGameStore } from "@/store/game-store";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const history = useGameStore((state) => state.history);
	const setHistory = useGameStore((state) => state.setHistory);
	const currentMove = useGameStore((state) => state.currentMove);
	const setCurrentMove = useGameStore((state) => state.setCurrentMove);

	const currentSquares = history[currentMove];
	const xIsNext = currentMove % 2 === 0;

	const handlePlay = (nextSquares) => {
		const nextHistory = history
			.slice(0, currentMove + 1)
			.concat([nextSquares]);
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	};

	const jumpTo = (nextMove) => {
		setCurrentMove(nextMove);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				fontFamily: "monospace",
			}}
		>
			<div>
				<Board
					xIsNext={xIsNext}
					squares={currentSquares}
					onPlay={handlePlay}
				/>
			</div>
			<div>
				<ol>
					{history.map((_, historyIndex) => {
						const description =
							historyIndex > 0
								? `Go to move #${historyIndex}`
								: "Go to game start";

						return (
							<li key={historyIndex}>
								<button onClick={() => jumpTo(historyIndex)}>
									{description}
								</button>
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
}
