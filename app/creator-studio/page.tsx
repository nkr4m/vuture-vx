"use client"
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link, LinkIcon } from "@nextui-org/link";
import { useRouter } from "next/navigation";
export default function CreatorStudioPage() {
	const router = useRouter();
	return (
		<>

			<h1 className={title()}>Creator Studio</h1>

			<div className="container-fluid mt-3">
				<h4 className="text-2xl font-bold mb-2 text-primary">Pending Container(s)</h4>
				<div className="row">

					<div className="col-12 col-xs-6 col-sm-4 col-md-3 mb-3">
						<Link href="container">
							<Card className="shadow-md" style={{ cursor: 'pointer' }}>
								<CardHeader className="flex gap-3">
									<div className="flex flex-col">
										<p className="text-md">Container 1</p>
										<p className="text-small text-default-500">nextui.org</p>
									</div>
								</CardHeader>
								<CardBody>
									<p>Make beautiful websites regardless of your design experience.</p>
								</CardBody>

								<CardFooter>

								</CardFooter>
							</Card>
						</Link>
					</div>


					<div className="col-12 col-xs-6 col-sm-4 col-md-3 mb-3">
					<Link href="container">
						<Card className="shadow-md" style={{ cursor: 'pointer' }}>
							<CardHeader className="flex gap-3">
								<div className="flex flex-col">
									<p className="text-md">Container 2</p>
									<p className="text-small text-default-500">nextui.org</p>
								</div>
							</CardHeader>
							<CardBody>
								<p>Make beautiful websites regardless of your design experience.</p>
							</CardBody>

							<CardFooter>

							</CardFooter>
						</Card>
						</Link>
					</div>

					<div className="col-12 col-xs-12 col-sm-12 col-md-3 mb-3">
					<Link href="container">
						<Card className="shadow-md" style={{ cursor: 'pointer' }}>
							<CardHeader className="flex">
								<div className="flex flex-col">
									<p className="text-md">Container 3</p>
									<p className="text-small text-default-500">nextui.org</p>
								</div>
							</CardHeader>
							<CardBody>
								<p>Make beautiful websites regardless of your design experience.</p>
							</CardBody>

							<CardFooter>

							</CardFooter>
						</Card>
						</Link>
					</div>

					<div className="col-12 col-xs-6 col-sm-4 col-md-3 mb-3">
						<Card className="" style={{ cursor: 'pointer' }}>
							<CardHeader className="flex gap-3">
								<div className="flex flex-col">
									{/* <p className="text-md">Container 3</p>
									<p className="text-small text-default-500">nextui.org</p> */}
								</div>
							</CardHeader>
							<CardBody className="inline-block max-w-lg text-center justify-center">
								<p style={{ fontSize: '60px' }}>+</p>
							</CardBody>

							<CardFooter>

							</CardFooter>
						</Card>
					</div>

				</div>
			</div>



			<div className="container-fluid mt-3">
				<h4 className="text-2xl font-bold mb-2 text-primary">Live Container(s)</h4>
				<div className="row">
					<div className="col-12 col-xs-6 col-sm-4 col-md-3 mb-3">
						<Card className="shadow-md" style={{ cursor: 'not-allowed' }}>
							<CardHeader className="flex gap-3">
								<div className="flex flex-col">
									<p className="text-md">Container 1</p>
									<p className="text-small text-default-500">nextui.org</p>
								</div>
							</CardHeader>
							<CardBody>
								<p>Make beautiful websites regardless of your design experience.</p>
							</CardBody>

							<CardFooter>

							</CardFooter>
						</Card>
					</div>

					<div className="col-12 col-xs-6 col-sm-4 col-md-3 mb-3">
						<Card className="shadow-md" style={{ cursor: 'not-allowed' }}>
							<CardHeader className="flex gap-3">
								<div className="flex flex-col">
									<p className="text-md">Container 2</p>
									<p className="text-small text-default-500">nextui.org</p>
								</div>
							</CardHeader>
							<CardBody>
								<p>Make beautiful websites regardless of your design experience.</p>
							</CardBody>

							<CardFooter>

							</CardFooter>
						</Card>
					</div>


					<div className="col-12 col-xs-6 col-sm-4 col-md-3 mb-3">
						<Card className="" style={{ cursor: 'not-allowed' }}>
							<CardHeader className="flex gap-3">
								<div className="flex flex-col">
									{/* <p className="text-md">Container 3</p>
									<p className="text-small text-default-500">nextui.org</p> */}
								</div>
							</CardHeader>
							<CardBody className="inline-block max-w-lg text-center justify-center">
								<p style={{ fontSize: '60px' }}>+</p>
							</CardBody>

							<CardFooter>

							</CardFooter>
						</Card>
					</div>

				</div>
			</div>

		</>
	);
}
