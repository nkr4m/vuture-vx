"use client"
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import 'bootstrap/dist/css/bootstrap-grid.css';
import { useRouter } from "next/navigation";
import PageOwnerPage from "./pageOwner";
import { Link, LinkIcon } from "@nextui-org/link";



export default function ContainerEditorPage() {
	const router = useRouter();
	return (
		<>

			<h1 className={title()}>Container Information&nbsp;</h1>
			<div className="container-fluid mt-3">
				<h4 className="text-2xl font-bold mb-2 text-primary">Available Page(s)</h4>
				<div className="row overflow-x-auto">
					<div className="col-12 col-xs-6 col-sm-4 col-md-3 mb-3">
						<Link href="pageEditor">
							<Card className="shadow-md" style={{ cursor: 'pointer' }} >
								<CardHeader className="flex gap-3">
									<div className="flex flex-col">
										<p className="text-md">Page 1</p>
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
						<Link href="pageEditor">
							<Card className="shadow-md" style={{ cursor: 'pointer' }}>
								<CardHeader className="flex gap-3">
									<div className="flex flex-col">
										<p className="text-md">Page 2</p>
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
						<Link href="pageEditor">
							<Card className="shadow-md" style={{ cursor: 'pointer' }} >
								<CardHeader className="flex">
									<div className="flex flex-col">
										<p className="text-md">Page 3</p>
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
						<Link href="pageEditor">
							<Card className="shadow-md" style={{ cursor: 'pointer' }} >
								<CardHeader className="flex">
									<div className="flex flex-col">
										<p className="text-md">Page 4</p>
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
						<Link href="pageEditor">
							<Card className="shadow-md" style={{ cursor: 'pointer' }} >
								<CardHeader className="flex">
									<div className="flex flex-col">
										<p className="text-md">Page 5</p>
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
			<h4 className="text-2xl font-bold mb-2 text-primary">Container Owner(s)</h4>
				<div className="row">
					<Card className="col-12 col-xs-12 col-sm-12 col-md-6 mb-6 shadow-md">
						
						<CardBody className="overflow-x-auto">
							<PageOwnerPage />
							<br />
						</CardBody>
					</Card>

					<div className="col-12 col-xs-12 col-sm-12 col-md-6 mb-6">
					</div>
				</div>

			</div>




		</>
	);
}
