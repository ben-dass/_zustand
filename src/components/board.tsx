import Square from "./square";
import { calculateStatus, calculateTurns, calculateWinner } from "@/lib/utils";

interface IBoard {
	xIsNext: boolean;
	squares: Array<string | null>;
	onPlay: (nextSquares: Array<string | null>) => void;
}

const Board = ({ xIsNext, squares, onPlay }: IBoard) => {
	const player = xIsNext ? "X" : "O";
	const winner = calculateWinner(squares);
	const turns = calculateTurns(squares);
	const status = calculateStatus(winner, turns, player);

	const handleClick = (i: number) => {
		if (squares[i] || winner) return;
		const nextSquares = squares.slice();
		nextSquares[i] = player;
		onPlay(nextSquares);
	};
	console.log("Board re-rendered.");

	return (
		<>
			<div style={{ marginBottom: "0.5rem" }}>{status}</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gridTemplateRows: "repeat(3, 1fr)",
					width: "calc(3 * 2.5rem)",
					height: "calc(3 * 2.5rem)",
					border: "1px solid #999",
				}}
			>
				{squares.map((square, squareIndex) => (
					<Square
						key={squareIndex}
						value={square}
						onSquareClick={() => handleClick(squareIndex)}
					/>
				))}
			</div>
		</>
	);
};

export default Board;
