interface ITitleProps {
	title: string;
}
export const Title = ({ title }: ITitleProps) => {
	return <h1 className="e-section-title e-tas">{title}</h1>;
};
