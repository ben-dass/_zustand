import Square from "./square";

const Board = () => {
	return (
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
			{Array.from({ length: 9 }).map((_, index) => (
				<Square
					key={index}
					value={index.toString()}
				/>
			))}
		</div>
	);
};

export default Board;
