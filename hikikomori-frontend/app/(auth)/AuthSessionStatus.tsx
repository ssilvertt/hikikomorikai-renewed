const AuthSessionStatus = ({
	status,
	className,
	...props
}: {
	status: string | null;
	className?: string;
} & React.HTMLAttributes<HTMLDivElement>): JSX.Element | null => (
	<>
		{status && (
			<div className={`${className} font-medium text-sm`} {...props}>
				{status}
			</div>
		)}
	</>
);
export default AuthSessionStatus;
