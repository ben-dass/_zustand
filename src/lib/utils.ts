import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const calculateWinner = (squares) => {
	// Every possible winning combination
	const lines = [
		[0, 1, 2], // Row 1
		[3, 4, 5], // Row 2
		[6, 7, 8], // Row 3
		[0, 3, 6], // Column 1
		[1, 4, 7], // Column 2
		[2, 5, 8], // Column 3
		[0, 4, 8], // Diagonal \
		[2, 4, 6], // Diagonal /
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];

		// If all 3 conditions are met, this means the line is not empty and all 3 squares
		// in the line are the same player symbol.
		if (
			squares[a] && // checks if null
			squares[a] === squares[b] && // checks if 1st and 2nd are on the same line
			squares[a] === squares[c] // checks if 1st and 3rd are on the same line
		) {
			return squares[a];
		}
	}

	return null;
};

export const calculateTurns = (square) => {
	return square.filter((square) => !square).length;
};

export const calculateStatus = (winner, turns, player) => {
	if (!winner && !turns) return "Draw";
	if (winner) return `Winner ${winner}`;
	return `Next player: ${player}`;
};
