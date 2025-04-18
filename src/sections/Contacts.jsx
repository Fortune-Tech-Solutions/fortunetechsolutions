import EmailForm from "../components/EmailForm";

const Contacts = () => {
    return (
        <div className="flex justify-center items-center max-w-7xl mx-auto">
            <div className="border border-base-content/75 rounded grid grid-cols-1 md:grid-cols-2 w-full mx-2">

                <div className="flex flex-col justify-center items-center p-8">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-bold mb-4 max-w-lg">Let&apos;s talk about your project&apos;s needs.</h2>
                        <p>
                            For more information or to subscribe to one of our Packages, please send us a message.
                            Our team will get back to you as soon as possible.
                        </p>
                        <span></span>
                        <div className="divider">OR</div>
                        <p className="text-center">You can contact us directly.</p>
                        <p className="font-bold flex items-center justify-center"><span className="mr-2">
                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                            >
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg></span>(703) 501-1716</p>
                    </div>
                </div>

                <div id="emailForm" className="flex justify-center border-t md:border-t-0 border-l-0 md:border-l border-base-content/75 py-8">
                    <EmailForm />
                </div>
            </div>
        </div>
    );
}

export default Contacts;
