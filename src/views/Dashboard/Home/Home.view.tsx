export const HomeView = () => {
	const d = () => {
		console.log("datos3");
	};
	return (
		<div>
			<span>Home View</span>;<button onClick={() => d()}>LOGOUT</button>
		</div>
	);
};

export default HomeView;
