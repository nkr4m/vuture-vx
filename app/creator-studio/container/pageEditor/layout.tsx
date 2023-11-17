export default function ContainerEditorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="">
			<div className="">
				{children}
			</div>
		</section>
	);
}
