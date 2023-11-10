import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Button,
    Link,
} from "@nextui-org/react";

function YourSupportIsAllWeNeed() {
    return (
        <div className="w-11/12 sm:w-3/4 md:w-1/2 m-auto">
            <Card isBlurred className="p-2">
                <CardHeader>
                    <h2 className="font-bold sm:text-lg md:text-xl">
                        Your Support Is All We Need.
                    </h2>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div className="flex flex-col gap-3">
                        <p>
                            <Link color="success" href="/">
                                Larry Rowbs foundation
                            </Link>{" "}
                            aims to make the fashion industry more sustainable
                            and safeguard its workers.
                        </p>
                        <p>
                            But for this we need support from our community. We
                            invite you to be a part of this cause by any of the
                            following:
                        </p>
                        <div className="flex flex-col gap-2 ml-4">
                            <div>
                                1. <b>Fund Raising: </b>Helping us raise funds
                                to set up the recycling facility in Uganda. Your{" "}
                                <Link color="success" href="/donate">
                                    donations
                                </Link>{" "}
                                will go a long way.
                            </div>
                            <div>
                                2. <b>Join Us: </b>
                                <Link color="success" href="/join">
                                    Here
                                </Link>{" "}
                                is the link to register as a volunteer. Our team
                                needs environment activists, researchers,
                                designers, content writers, and social media
                                managers. You are most welcome if you want to
                                bring any other talent that will help us.
                            </div>
                            <div>
                                3. <b>Spread the word: </b>Help us in making the
                                world aware of the harms of fast fashion and{" "}
                                <Link
                                    color="success"
                                    href="https://www.instagram.com/thelarryrowbsfoundation/"
                                    target="_blank"
                                >
                                    sharing
                                </Link>{" "}
                                about our cause with others.
                            </div>
                            <div>
                                4. <b>Purchase clothes mindfully: </b>Purchase
                                only biodegradable or recycled clothes, and
                                recycle old clothes as much as possible!
                            </div>
                        </div>
                    </div>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button
                        as={Link}
                        href="/donate"
                        aria-label="Support our mission"
                        color="success"
                        size="lg"
                    >
                        Support our mission
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default YourSupportIsAllWeNeed;
